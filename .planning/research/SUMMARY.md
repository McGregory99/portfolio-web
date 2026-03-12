# Project Research Summary

**Project:** Goyo Cancio — Personal Brand Hub
**Domain:** Developer personal brand site — software engineer + content creator + course seller
**Researched:** 2026-03-12
**Confidence:** MEDIUM-HIGH

## Executive Summary

This milestone transforms an existing Next.js 15 portfolio from a credential-first CV site into an identity-first personal brand hub. Research across comparable sites (johnrush.me, lvrpiz.com) and current best practices confirms a clear pattern: the most effective developer personal brand sites lead with what the person builds and creates, not their job title or employer. For Goyo, this means surfacing three identity axes in the hero — geospatial/Earth Observation engineering, full-stack web building, and teaching developers through courses and content — before anything else. The architecture to support this is well-understood and low-risk: static data in `lib/`, Server Components throughout, and a clean section-per-component layout.

The recommended approach is additive, not a rewrite. The existing stack (Next.js 15, React 19, Tailwind CSS 4, Vercel) requires only three new packages: `motion` for entrance animations, `lucide-react` for icons, and `@next/third-parties` for YouTube embedding. No component library is warranted; the site's small component surface is better served by bespoke Tailwind. The primary new surfaces are a redesigned hero, a courses section (card grid linking to external platforms), and a content channels section (styled links to YouTube, TikTok, Instagram, LinkedIn, X). All of these are fully static — no API calls, no state management, no CMS for this milestone.

The key risk is not technical. The main failure modes are copywriting regressions (hero that reverts to a job-title pattern), visual choices that look like a theme rather than a person, and section ordering that buries the content creator identity below existing work history. All three are mitigated by sequencing deliberately: lock the hero copy and information architecture before writing any component code, and treat the design system as a first step rather than an afterthought.

## Key Findings

### Recommended Stack

The existing stack is strong and needs no replacement. Three additive packages cover all new requirements. `motion` (v12+, the rebranded Framer Motion) is React 19 compatible and is the de-facto choice for scroll-triggered entrance animations in the React ecosystem. `lucide-react` provides clean stroke-style icons with full tree-shaking. `@next/third-parties` is the Vercel-official YouTube embed with no React compatibility concerns. Avoid `react-social-media-embed` (unmaintained for React 19) and any CSS-in-JS libraries (conflict with Tailwind 4's CSS-first approach).

**Core technologies:**
- `motion` ^12.x — entrance and scroll animations — React 19 compatible, 4KB base, use `motion/react-client` import in Server Component files
- `lucide-react` ^0.475+ — UI and social icons — SVG-only, zero runtime, full tree-shaking
- `@next/third-parties` — YouTube embed — Vercel-official, uses lite-youtube-embed for performance
- Tailwind CSS 4 (existing) — all new components built with utility classes, no component library needed
- Inline SVGs from `/public/social/` (existing) — for TikTok and Instagram brand icons not covered by Lucide

### Expected Features

Research confirms five P1 features for this milestone. The hero redesign and visual refresh are prerequisites for all other sections — they set the visual language and identity signal every subsequent section inherits.

**Must have (table stakes):**
- Identity-first hero — visitors decide in 3-5s; must answer who Goyo is and what he builds/creates
- Projects and work experience sections — proof of work; retain existing, reskin to new design language
- Mobile responsiveness — over 50% of traffic; existing but must survive redesign
- Clear primary CTA — one obvious next action per section, not multiple competing
- Personal photo / avatar — humanizes the brand; already in project

**Should have (competitive differentiators):**
- Courses section with card-per-course — signals teaching authority, separates creator-educators from pure engineers
- Content channels section — makes multi-platform presence explicit; not buried in footer icons
- Builder-first hero copy — "I build geospatial tools and teach developers" beats "Software Engineer at X"
- Geospatial / domain specificity callout — narrow niche is a strength, should be visible
- Stats bar (2-4 numbers) — adds instant credibility; defer until real numbers are confirmed

**Defer (v2+):**
- Blog / article system — heavy scope, no validated need yet
- Newsletter signup — defer until email list strategy is defined
- Contact form — mailto link is sufficient; form adds complexity without proportional value
- Live social feed embeds — API fragility, layout shift, maintenance cost; static links are better

### Architecture Approach

The recommended architecture is a clean three-layer structure: a `lib/` data layer (all content as exported JS arrays), `app/components/` as pure presentational components that receive props, and `app/page.js` as the single assembly point. All section and card components should be Server Components (zero client JS shipped for static display-only pages); `"use client"` is only warranted at leaf components with browser interaction (e.g., a hover animation card). No state management library, no routing beyond anchor links, no CMS for this milestone. This is a fully static pre-rendered site.

**Major components:**
1. `lib/` (profile.js, courses.js, channels.js, experience.js) — single source of truth for all content; editing a course URL means editing one file
2. Section Components (HeroSection, CoursesSection, ChannelsSection, ExperienceSection) — thin wrappers that accept data props and own their `<section id="...">` layout
3. Leaf Components (CourseCard, ChannelLink, ExperienceItem) — pure presentational, Server Components, no client JS except where hover interactions require it
4. `app/page.js` — clean composition of all sections; imports from lib/, passes data as props; should be under 50 lines

### Critical Pitfalls

1. **Resume reflex in the hero** — hero copy defaults to job title and employer; write the identity copy ("I build geospatial tools and web apps — and teach developers online") before touching CSS; the copy must name all three identity axes
2. **Template aesthetic** — design uses default Tailwind scales and looks like every other portfolio; make 2-3 deliberate unusual visual choices (e.g., the existing `border-accent-yellow` is a strong signal — lean into it rather than neutralizing it)
3. **Content creator identity buried below the fold** — courses and channels sections placed after work history means YouTube/TikTok visitors never see them; page hierarchy must be hero → courses → channels → experience/projects
4. **Data hardcoded in components** — the existing pattern (socialLinks in Header, experience in page.js) creates maintenance friction; all new content goes in `lib/` from the start; never inline channel URLs in a component
5. **Brownfield breakage** — existing mobile responsiveness, social links, and image display regress during redesign; treat redesign as a visual layer migration, not a rewrite; test mobile at 375px after every component change

## Implications for Roadmap

Based on research, the dependency graph is clear. Hero and information architecture must come before any section is built. Data layer must be defined before components are built. Visual language must be established before section styling. This suggests 4-5 phases with a front-loaded foundation that prevents rework.

### Phase 1: Identity Foundation and Information Architecture
**Rationale:** All subsequent work inherits the identity framing and page structure established here. Building sections before this is done guarantees rework. This is also entirely copy and structure — no code risk.
**Delivers:** Finalized hero copy (builder-first, all three identity axes), confirmed section order (hero → courses → channels → experience → projects), and a locked visual language decision (dark-minimal or clean-minimal, accent color, typography choices).
**Addresses:** Identity-first hero (P1), visual design refresh (P1), personality-driven about blurb (P1 copywriting)
**Avoids:** Resume reflex pitfall, template aesthetic pitfall, content creator identity buried below fold

### Phase 2: Data Layer and lib/ Setup
**Rationale:** Components cannot be built without a stable data contract. Defining lib/ first means every component is built against a real schema, eliminating the "data hardcoded in component" anti-pattern from the start.
**Delivers:** `lib/profile.js`, `lib/courses.js`, `lib/channels.js`, `lib/experience.js` with real data populated; `public/courses/` thumbnails collected
**Addresses:** Social aggregation maintenance burden pitfall, data separation architecture requirement
**Avoids:** Hardcoded-data anti-pattern, social links maintenance burden pitfall

### Phase 3: Hero and Header Redesign
**Rationale:** Hero is the highest-impact visual change and the visual reference all other sections match against. Implementing it before section components prevents style drift.
**Delivers:** New HeroSection component with builder-first copy, staggered entrance animation via `motion`, updated Header with extracted profile data from lib/profile.js
**Uses:** `motion` (entrance animation), `lucide-react` (social icons), `next/font/google` (existing)
**Implements:** HeroSection Server Component with `"use client"` scope limited to motion wrapper; social links sourced from lib/profile.js
**Avoids:** Resume reflex, "use client" on full section components

### Phase 4: New Sections — Courses and Content Channels
**Rationale:** These are the core new features. Building them after the hero ensures they match the established visual language. Building them together keeps the data layer patterns consistent.
**Delivers:** CoursesSection + CourseCard grid, ChannelsSection + ChannelLink components, all linking to external platforms
**Uses:** `lucide-react` icons, `@next/third-parties` YouTubeEmbed (if video embed is in scope), Tailwind card components
**Implements:** CoursesSection, CourseCard, ChannelsSection, ChannelLink as Server Components
**Avoids:** Course cards with no context (each card must include value description and platform signal), embedded live feeds anti-pattern

### Phase 5: Visual Reskin of Existing Sections and Polish
**Rationale:** Once new sections are proven and the visual language is established, reskin existing ExperienceItem and ProjectItem components to match. Adding polish (scroll-triggered reveals, hover micro-interactions) is safer as a final pass.
**Delivers:** Reskinned ExperienceSection, reskinned Projects section, scroll-triggered entrance animations via `motion`, mobile testing and fixes, OG/meta tag update to reflect new identity
**Uses:** `motion` whileInView for scroll-triggered reveals
**Avoids:** Brownfield breakage (mobile tested incrementally, not only at end), "looks done but isn't" checklist from PITFALLS.md

### Phase Ordering Rationale

- Phase 1 (identity/IA) before Phase 3 (hero code) is the single most important ordering decision. Writing hero code before the copy is finalized is the most common source of rework in portfolio redesigns.
- Phase 2 (data layer) before Phases 3-5 (components) prevents the hardcoded-data anti-pattern from being baked in at birth. The build order in ARCHITECTURE.md confirms this: lib/ files are the zero-dependency foundation.
- Phase 4 (new sections) before Phase 5 (polish) follows the "working first, polished second" principle. Scroll animations on a section that might still change waste time.
- Phase 5 combines the reskin of existing sections with polish deliberately — both are low-risk incremental changes that don't alter page structure, so they can be batched.

### Research Flags

Phases likely needing deeper research during planning:
- **Phase 3 (Hero animation):** Motion v12 App Router import patterns (`motion/react-client` vs `motion/react`) need to be verified against the actual Next.js 15.3.1 project before implementation to confirm no hydration edge cases.
- **Phase 4 (YouTube embed):** If `@next/third-parties` YouTubeEmbed is included, verify Vercel CSP headers don't block the youtube.com iframe; this is a known gotcha with hardened Vercel deployments.

Phases with standard patterns (skip research-phase):
- **Phase 2 (lib/ data layer):** Standard Next.js data separation pattern, well-documented, zero risk.
- **Phase 5 (reskin existing sections):** Pure Tailwind class changes on existing components. No new patterns introduced.

## Confidence Assessment

| Area | Confidence | Notes |
|------|------------|-------|
| Stack | MEDIUM-HIGH | Core packages verified via official sources and npm registry. Motion v12 React 19 compatibility confirmed via GitHub issue tracking. `react-social-media-embed` risk confirmed via direct package inspection. One caveat: react-social-media-embed React 19 compatibility was assessed indirectly (peer deps declaration), not via integration test. |
| Features | MEDIUM | Based on live site analysis (johnrush.me, lvrpiz.com) and multiple secondary sources on developer personal branding. Feature prioritization is synthesized judgment, not a direct benchmark study. The P1/P2/P3 tiers are well-reasoned but opinionated. |
| Architecture | HIGH | Based on direct codebase analysis and official Next.js docs patterns. The lib/ + Server Component architecture is standard and low-risk. Build order is logically derived from dependency graph. |
| Pitfalls | HIGH | The critical pitfalls are grounded in both direct codebase observation (credential-first Header.js, hardcoded data in page.js) and verified patterns from competitor site analysis. These are concrete and actionable, not hypothetical. |

**Overall confidence:** MEDIUM-HIGH

### Gaps to Address

- **Hero copy content:** The identity copy for the hero was not written during research (out of scope). Phase 1 must produce finalized copy before Phase 3 begins. The structure is clear but the actual words need Goyo's input.
- **Course catalog:** `lib/courses.js` shape is defined but actual course titles, URLs, descriptions, and thumbnail images need to come from Goyo. Phase 2 is blocked on this input.
- **Channel URLs and handles:** `lib/channels.js` requires confirmed, current URLs for all platforms. Research flagged that handles change — these need to be verified at the start of Phase 2.
- **Stats availability:** The stats bar (courses published, YouTube subscribers, etc.) is a P2 feature. It can only be built once Goyo confirms the numbers he wants to display.
- **Language choice:** PITFALLS.md flags the Spanish/English mixing risk. A decision on the site language must be made before any copy is written in Phase 1.

## Sources

### Primary (HIGH confidence)
- Next.js official docs (nextjs.org/docs) — App Router patterns, Image component, `@next/third-parties` YouTubeEmbed
- Direct codebase analysis (`Header.js`, `page.js`, `.planning/codebase/ARCHITECTURE.md`) — existing structure, anti-patterns present
- npm registry (framer-motion, lucide-react, react-social-media-embed) — version and peer dependency status
- johnrush.me — direct site analysis for hero framing, visual style, section structure

### Secondary (MEDIUM confidence)
- Motion docs (motion.dev) — React 19 support, App Router import pattern
- lvrpiz.com — direct site analysis for minimal personal portfolio patterns
- Alvaro Trigo blog, Feather.so, Copyfol.io, freeCodeCamp — developer personal branding patterns
- DEV Community articles on Next.js 15 App Router organization best practices

### Tertiary (LOW confidence)
- reactlibraries.com (Motion vs Motion One bundle size comparison) — useful directional data but single source
- marketingscoop.com (social media embedding guide) — supports static-links-over-embeds recommendation; secondary validation only

---
*Research completed: 2026-03-12*
*Ready for roadmap: yes*
