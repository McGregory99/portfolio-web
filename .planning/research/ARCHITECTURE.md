# Architecture Research

**Domain:** Next.js 15 App Router personal brand / portfolio site
**Researched:** 2026-03-12
**Confidence:** HIGH

## Standard Architecture

### System Overview

```
┌─────────────────────────────────────────────────────────────────┐
│                       Page Layer                                 │
│  app/page.js  ←  assembles sections, imports data from lib/     │
├─────────────────────────────────────────────────────────────────┤
│                     Section Components                           │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐  ┌──────────────┐   │
│  │  Hero    │  │ Courses  │  │ Channels │  │  Experience  │   │
│  │ Section  │  │ Section  │  │ Section  │  │   Section    │   │
│  └────┬─────┘  └────┬─────┘  └────┬─────┘  └──────┬───────┘   │
├───────┴──────────────┴─────────────┴────────────────┴───────────┤
│                    Leaf / Card Components                        │
│  ┌───────────┐  ┌────────────┐  ┌────────────┐                  │
│  │CourseCard │  │ChannelLink │  │ExperienceItem│                 │
│  └───────────┘  └────────────┘  └────────────┘                  │
├─────────────────────────────────────────────────────────────────┤
│                       Data Layer (lib/)                          │
│  ┌────────────┐  ┌─────────────┐  ┌─────────────┐              │
│  │  courses   │  │  channels   │  │  experience │              │
│  │  .js       │  │  .js        │  │  .js        │              │
│  └────────────┘  └─────────────┘  └─────────────┘              │
└─────────────────────────────────────────────────────────────────┘
```

### Component Responsibilities

| Component | Responsibility | Typical Implementation |
|-----------|----------------|------------------------|
| `app/page.js` | Assemble sections into a single-page layout | Server Component, imports data from lib/, passes as props |
| `HeroSection` | Identity-first headline, tagline, CTA | Server Component, receives profile data as props |
| `CoursesSection` | Grid of course cards linking externally | Server Component, iterates over courses array |
| `ChannelsSection` | Aggregated list of content channel links | Server Component, iterates over channels array |
| `ExperienceSection` | Chronological work history | Server Component, iterates over experience array |
| `CourseCard` | Single course: title, description, image, external link | Server Component, pure presentational |
| `ChannelLink` | Single platform icon + name + external link | Server Component, pure presentational |
| `ExperienceItem` | Single job card with tech badges | Server Component (existing, keep as-is) |
| `Header` | Name, tagline, social icons nav | Server Component, pull data from lib/profile.js |

## Recommended Project Structure

The codebase currently places data inline in components. The recommended migration is to extract all content into `lib/` and keep `app/components/` as pure presentational rendering.

```
app/
├── layout.js               # Root layout — metadata, fonts, global CSS (existing)
├── page.js                 # Single-page assembler: imports sections, reads lib/ data
├── globals.css             # Tailwind CSS theme (existing)
│
├── components/             # All UI components (presentational only, no data)
│   ├── Header.js           # Profile identity block
│   ├── HeroSection.js      # NEW — identity-first hero with tagline
│   ├── CoursesSection.js   # NEW — section wrapper + CourseCard grid
│   ├── CourseCard.js       # NEW — individual course card
│   ├── ChannelsSection.js  # NEW — content channels aggregator
│   ├── ChannelLink.js      # NEW — individual channel row/icon
│   ├── ExperienceSection.js # NEW (thin wrapper) or keep inline in page.js
│   ├── ExperienceItem.js   # Existing — keep
│   └── ProjectItem.js      # Existing — keep
│
lib/                        # Static data — all content lives here, not in components
├── profile.js              # Name, tagline, bio, profile image path
├── courses.js              # Array of course objects (title, description, url, image)
├── channels.js             # Array of channel objects (platform, url, icon, label)
└── experience.js           # Array of work experience objects (existing data, moved)

public/
├── profile.png             # Profile photo
├── company_logo/           # Existing
├── projects_logo/          # Existing
├── social/                 # Social icons (existing)
└── courses/                # NEW — course thumbnail images
```

### Structure Rationale

- **`lib/`:** All site content in one place. When Goyo updates a course or adds a channel, he edits one file, not a component. This is the standard Next.js recommendation for separating data from UI (official docs confirm `_lib/data.ts` pattern, MEDIUM-HIGH confidence).
- **`app/components/`:** Pure rendering only. No arrays, no hardcoded strings beyond labels. Accepts props, returns JSX.
- **`app/page.js`:** Single source of truth for page structure and section order. Imports from `lib/` and passes data down as props. Remains a Server Component.
- **No `/courses` or `/channels` routes:** The milestone is a single-page experience. All sections are `<section id="...">` anchors inside `app/page.js`, not separate routes.

## Architectural Patterns

### Pattern 1: Flat Data Objects in lib/

**What:** Define all content as exported JavaScript arrays/objects in `lib/` files. Import them at the page level and pass down as props.

**When to use:** Always, for this site. Content is static, curated by a single person, never user-generated.

**Trade-offs:** Simple to read and edit. No CMS overhead. No build-time fetching needed. Downside: adding a course requires a code change + deploy. For a solo developer site this is acceptable and actually preferable (no CMS auth, no API keys, no cost).

**Example:**
```javascript
// lib/courses.js
export const courses = [
  {
    id: "geospatial-python",
    title: "Geospatial Python for Engineers",
    description: "Learn to work with satellite data using Python and GDAL.",
    url: "https://external-platform.com/course/geospatial-python",
    image: "/courses/geospatial-python.png",
    badge: "Bestseller",
  },
];

// app/page.js (Server Component)
import { courses } from "../lib/courses";
import CoursesSection from "./components/CoursesSection";

export default function Home() {
  return (
    <div>
      <CoursesSection courses={courses} />
    </div>
  );
}
```

### Pattern 2: Section Components as Thin Wrappers

**What:** Each page section gets its own component that handles layout and receives data as props. The component is responsible for the section `<section id="...">`, heading, and iterating over child cards.

**When to use:** For every new section (courses, channels). Keeps `page.js` clean and lets each section evolve independently.

**Trade-offs:** One extra file per section. Worth it — it prevents `page.js` from growing into a 300-line god component. Each section can be styled, animated, and tested in isolation.

**Example:**
```javascript
// app/components/CoursesSection.js
export default function CoursesSection({ courses }) {
  return (
    <section id="courses" className="py-12">
      <h2 className="text-2xl font-bold text-center mb-8">Courses</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {courses.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </section>
  );
}
```

### Pattern 3: Server Components by Default, Client Only for Interaction

**What:** All section and card components are Server Components unless they require browser-only behavior (hover state, toggle, scroll listener). The existing `ProjectItem.js` uses `"use client"` for hover — that's the right threshold.

**When to use:** The entire new build (Hero, Courses, Channels sections). None of these require client state — they are display-only with external links.

**Trade-offs:** Server Components ship zero JavaScript for their rendering logic to the client, keeping the bundle minimal. The only cost is that you cannot use `useState`, `useEffect`, or browser APIs inside them. For a link-forward personal site this is not a limitation.

## Data Flow

### Request Flow

```
User visits goyocancio.com
    |
Next.js App Router → app/layout.js (HTML shell, metadata, fonts)
    |
app/page.js (Server Component, executes at build time on Vercel)
    |
    ├── import { profile }    from lib/profile.js
    ├── import { courses }    from lib/courses.js
    ├── import { channels }   from lib/channels.js
    └── import { experience } from lib/experience.js
    |
    ↓ props passed down
HeroSection(profile) → renders static HTML
CoursesSection(courses) → CourseCard[] → renders static HTML with <a href="external">
ChannelsSection(channels) → ChannelLink[] → renders static HTML with <a href="external">
ExperienceSection(experience) → ExperienceItem[] → renders static HTML
    |
Vercel serves pre-rendered static HTML + minimal JS
```

### State Management

There is no application state for this milestone. The site is fully static and read-only:

```
lib/*.js (data source)
    ↓ (import at build time)
page.js (assembler)
    ↓ (props, one direction only)
Section Components
    ↓ (props, one direction only)
Card / Leaf Components
    ↓
Static HTML output
```

No Redux, no Zustand, no Context API. No `useState` except potentially for a mobile nav toggle (scoped to Header if needed).

### Key Data Flows

1. **Profile identity flow:** `lib/profile.js` → `app/page.js` → `HeroSection` props → rendered HTML. The name, tagline, and avatar all come from one file.
2. **Courses flow:** `lib/courses.js` → `app/page.js` → `CoursesSection` props → `CourseCard` props → external link `<a>` tag. No intermediate state, no API call.
3. **Channels flow:** `lib/channels.js` → `app/page.js` → `ChannelsSection` props → `ChannelLink` props → external link `<a>` tag. Identical pattern to courses.
4. **Social links flow:** Currently hardcoded in `Header.js`. Should be extracted to `lib/profile.js` (same profile data file) so social links appear in both the Header and the ChannelsSection from one source of truth.

## Scaling Considerations

This site does not have scaling concerns in the traditional sense — it is a static pre-rendered Vercel deployment. The relevant "scale" question is content maintainability.

| Scale | Architecture Adjustments |
|-------|--------------------------|
| 1-5 courses | lib/courses.js array — no changes needed |
| 6-20 courses | Still fine in lib/courses.js, possibly add category filtering via client-side array filter |
| 20+ courses | Consider a headless CMS (Sanity, Contentlayer) to avoid large code changes per entry |
| Blog added later | Add `app/blog/[slug]/page.js` with MDX via next-mdx-remote or Contentlayer. No impact on current section architecture. |

### Scaling Priorities

1. **First inflection point:** When adding a course or channel requires a developer deploy, that friction becomes real around 10+ courses. At that point, extract to a JSON file or a headless CMS. The lib/ pattern makes this migration trivial — swap `import { courses } from lib/courses.js` for `import { courses } from lib/cms.js` that fetches from Sanity.
2. **Second inflection point:** If Goyo starts a blog, MDX is the right choice. The current architecture does not conflict with adding `app/blog/` routes — they are additive, not refactors.

## Anti-Patterns

### Anti-Pattern 1: Data Hardcoded Directly in Components

**What people do:** Define arrays of courses or channels inside `CoursesSection.js` or `ChannelsSection.js`.

**Why it's wrong:** The current codebase already does this (experiences in `page.js`, socialLinks in `Header.js`). It couples content to UI. Finding and editing "the YouTube channel URL" means knowing which component file holds it. Adding a new platform requires knowing which component to edit.

**Do this instead:** Extract all content to `lib/`. Components receive data via props. `lib/channels.js` is where you look to change a URL.

### Anti-Pattern 2: One Mega Component for the Whole Page

**What people do:** Put all sections directly in `page.js` as inline JSX, resulting in a 400+ line file.

**Why it's wrong:** The current `page.js` is already trending this way. Each new section (courses, channels) would add 50-80 lines inline. Changes to the courses section require navigating a large file.

**Do this instead:** Extract each `<section>` into its own Section Component. `page.js` becomes a clean composition of `<HeroSection>`, `<CoursesSection>`, `<ChannelsSection>`, `<ExperienceSection>`.

### Anti-Pattern 3: "use client" on Section Components

**What people do:** Add `"use client"` to a section component because a nested card has a hover interaction, then the entire section tree loses server rendering.

**Why it's wrong:** It sends unnecessary JavaScript to the browser for components that only render static HTML. The hover on `ProjectItem` currently does this correctly — the `"use client"` boundary is at the leaf, not the section.

**Do this instead:** Keep `"use client"` at the lowest possible component level (the individual card or button), never at the Section wrapper. New CourseCard and ChannelLink components should be Server Components — external links need no client JS.

### Anti-Pattern 4: Separate Routes for Each Section

**What people do:** Create `app/courses/page.js`, `app/channels/page.js` as separate pages.

**Why it's wrong:** The personal brand site is a single scrollable experience. Splitting into routes adds navigation friction, separate loading states, and duplicate layout wrapping. Competitors like johnrush.me are single-page layouts.

**Do this instead:** All sections are `<section id="courses">` anchors on the same `app/page.js`. Use anchor links for in-page navigation if needed.

## Integration Points

### External Services

| Service | Integration Pattern | Notes |
|---------|---------------------|-------|
| Course platform (Udemy, Gumroad, etc.) | Static `<a href>` link in CourseCard | No API. URL stored in lib/courses.js |
| YouTube | Static `<a href>` link in ChannelLink | No embed or API needed for this milestone |
| LinkedIn, X, Instagram, TikTok | Static `<a href>` links | Same pattern. All in lib/channels.js |
| Vercel | Static export deployment | No config changes needed. App Router + lib/ data = static at build time |

### Internal Boundaries

| Boundary | Communication | Notes |
|----------|---------------|-------|
| lib/ → page.js | Direct ES module import | One-way. lib/ has no knowledge of components |
| page.js → Section Components | Props | One-way downward. Section Components never import from page.js |
| Section Components → Card Components | Props | One-way downward. CourseCard never imports CoursesSection |
| Header ↔ lib/profile.js | Direct import | Header imports profile data directly — acceptable since Header is not a reusable component across pages |

## Build Order for This Milestone

The dependency graph of what must exist before what can be built:

```
1. lib/profile.js          ← no dependencies
2. lib/courses.js          ← no dependencies
3. lib/channels.js         ← no dependencies
4. lib/experience.js       ← migrate existing hardcoded data

   ↓

5. HeroSection             ← depends on lib/profile.js shape being defined
6. CourseCard              ← depends on lib/courses.js shape being defined
7. CoursesSection          ← depends on CourseCard existing
8. ChannelLink             ← depends on lib/channels.js shape being defined
9. ChannelsSection         ← depends on ChannelLink existing

   ↓

10. Update Header          ← extract socialLinks to lib/profile.js
11. Update ExperienceItem  ← no structural change, just data sourced from lib/
12. Rewrite app/page.js    ← compose all sections together, import from lib/

   ↓

13. Visual refresh         ← Tailwind class updates across all components
```

This order means the data shape is locked in steps 1-4, which prevents component rework when the data contract changes. The page assembly (step 12) is the last code-logic step, after which only styling remains.

## Sources

- Next.js official project structure docs (nextjs.org/docs/app/getting-started/project-structure, accessed 2026-03-12) — HIGH confidence
- Next.js App Router patterns article, DEV Community 2026 — MEDIUM confidence
- Next.js 15 organization best practices, DEV Community 2025 — MEDIUM confidence
- Existing codebase analysis (`app/page.js`, `app/components/Header.js`, `.planning/codebase/ARCHITECTURE.md`) — HIGH confidence (direct inspection)

---
*Architecture research for: Next.js 15 App Router personal brand site*
*Researched: 2026-03-12*
