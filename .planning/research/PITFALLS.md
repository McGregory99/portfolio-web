# Pitfalls Research

**Domain:** Personal brand hub / developer portfolio redesign with course showcase and content aggregation
**Researched:** 2026-03-12
**Confidence:** HIGH (pitfalls grounded in current codebase analysis + verified patterns)

---

## Critical Pitfalls

### Pitfall 1: The Resume Reflex — Hero That Lists Credentials Instead of Identity

**What goes wrong:**
The hero section ends up as a dressed-up CV header: name, job title, and a row of social icons. Visitors learn what Goyo is (Software Engineer) but not who he is or what he builds. The existing `Header.js` is already in this pattern — `jobTitle: "Software Engineer"` as a static prop says nothing about geospatial work, courses, or the content creator side. The redesign risk is making it slightly prettier while keeping the same credential-first structure.

**Why it happens:**
Developers default to what they know — the professional framing from LinkedIn and CVs. Adding a tagline feels awkward or self-promotional, so it gets softened into a job title. The result is a section that blends into every other portfolio online.

**How to avoid:**
Write the hero copy before touching any CSS. The copy must answer: "What do I build, who do I build it for, and what else should visitors know about me?" Goyo's identity has three distinct axes: geospatial/Earth Observation engineering, web/full-stack building, and teaching developers through courses and content. All three should be visible. Lead with a builder-first statement ("I build geospatial tools and web apps — and teach developers online") not a role title. Look at how johnrush.me does it: vulnerability + specificity + a clear builder narrative, not a polished title card.

**Warning signs:**
- The first visible text is a job title or company name
- No mention of courses or content creation in the hero
- "Software Engineer" appears prominently with no supporting context
- Hero can be swapped onto a different person's site with a name change

**Phase to address:**
Hero redesign phase (identity and copy must be locked before visual polish begins)

---

### Pitfall 2: Copy-Paste Template Aesthetic — Looks Like a Theme, Not a Person

**What goes wrong:**
The site gets a visual refresh using a popular component library or Tailwind UI pattern, but every design decision is default — same card shadows, same section spacing, same typography scale as thousands of other portfolios. The problem isn't the technology, it's the absence of distinctive visual choices that signal "this person has taste and opinions."

**Why it happens:**
Developers in brownfield rewrites focus on matching the new design system to the existing structure. They pick a Tailwind component pattern that works, apply it consistently, and ship. The result is technically correct but aesthetically anonymous.

**How to avoid:**
Make at least two or three deliberate, unusual visual choices that reflect Goyo's specific identity. The existing codebase already has `border-accent-yellow` as a visual accent — lean into that specificity rather than replacing it with a neutral palette. The johnrush.me approach uses raw dashed borders and monospace fonts precisely because they're unusual. Decide on a typographic personality, a spacing rhythm, and a primary accent treatment — then apply them with discipline rather than defaulting to Tailwind's out-of-box scales.

**Warning signs:**
- Design feels "could be anyone" after color changes
- Font choices are system defaults or the same stack every portfolio uses (Inter + nothing)
- No visual element that a visitor would remember 10 minutes after leaving

**Phase to address:**
Design system / visual language phase — establish distinctive choices before building sections

---

### Pitfall 3: Content Creator Identity Buried Below the Fold

**What goes wrong:**
The courses section and content channel aggregation get added at the bottom of the page, below the existing work experience and projects sections. Recruiters and collaborators who scan from top to bottom leave without understanding that Goyo teaches developers. The page still reads as a software engineer's CV with extras at the bottom.

**Why it happens:**
In brownfield redesigns, it's easy to "add" new sections at the end of the existing structure without reconsidering the page hierarchy. The current structure (Header → Experience → Projects → footer) was built for a CV audience. The new audience includes developer community members who care primarily about courses and content.

**How to avoid:**
Design the page information hierarchy based on who visits and what they need first. The courses and content identity should appear early — likely as part of the hero's supporting context or as the second visible section. Visitors from YouTube, TikTok, or Instagram arrive specifically because of the content creator side; they should land and immediately see courses and channels without scrolling past work history. Consider ordering sections by audience intent: hero (identity) → courses (product) → content channels (community) → experience/projects (credibility).

**Warning signs:**
- Courses section requires scrolling past two or more existing sections
- Page still reads as "experience, then projects, then extras"
- Someone from YouTube clicking a profile link would not see courses or channels above the fold

**Phase to address:**
Page structure / information architecture phase — decide section order before building any section

---

### Pitfall 4: Course Cards With No Context — "Click Here to Buy" Without Trust

**What goes wrong:**
The courses section gets implemented as a grid of cards with a title, thumbnail, and external link button. Visitors see course titles but have no reason to click. There is no context about who the instructor is, what problem the course solves, or why this person is qualified to teach it. The section feels commercial but not convincing.

**Why it happens:**
Course showcase sections are modeled after e-commerce product grids. The instinct is to show the product clearly and link to purchase. But for a personal brand site, the visitor is not yet sold on the instructor — the site itself needs to do that work before the course card appears.

**How to avoid:**
Each course card should communicate three things: what the student learns, who it is for, and a signal of social proof (student count, platform, or testimonial snippet). The hero's identity framing does some of this work if it's strong, but the courses section should reinforce it. Use copy on course cards that addresses the learner directly ("Learn to build geospatial tools from scratch") not just the course title. The CTA link should feel like a recommendation from a person, not a product listing.

**Warning signs:**
- Course card copy is only the course title and platform name
- No instructor context visible in or near the courses section
- CTA buttons use generic text like "Ver más" or "Buy Now" with no specificity

**Phase to address:**
Courses section implementation phase

---

### Pitfall 5: Social Links Aggregation That Becomes a Maintenance Burden

**What goes wrong:**
Content channels get hardcoded as an array in `page.js` (the existing pattern for experiences and projects). When Goyo's YouTube handle changes, a new platform gets added, or a link breaks, the fix requires a code change and redeployment. More critically: hardcoded channel sections have no indication of whether the account is active — a stale Instagram link with no recent posts makes the site look abandoned.

**Why it happens:**
The existing codebase hardcodes everything in page-level data arrays. It's the simplest approach and works fine for static data like work history. Social channels feel the same — they change rarely. But content creator identities shift platforms and handles more than engineering experience does.

**How to avoid:**
Keep the data in a single config file (e.g., `lib/content.js` or `app/data/channels.js`) rather than inline in page components. This does not require a CMS or dynamic fetching — just a clearly separated data layer so updating a handle or adding a platform is a one-line change with obvious location. Do not add API-fetched follower counts or live feed embeds — these introduce external API dependencies, rate limits, and maintenance cost for minimal user value. Static links to channels are sufficient.

**Warning signs:**
- Channel data defined inline inside a component or page
- No clear single file where channel URLs live
- Plans to embed live social feeds or fetch follower counts dynamically

**Phase to address:**
Content channels section phase — enforce data separation from the start

---

### Pitfall 6: Brownfield Breakage — Redesign Breaks What Already Works

**What goes wrong:**
In replacing the visual layer, existing components that currently work — `ExperienceItem`, `ProjectItem`, `Header` — get refactored or deleted and rebuilt from scratch. Functionality that worked (mobile responsiveness, social icon links, profile image display) regresses. The redesign ships with broken links, misaligned mobile layouts, or missing sections that were present before.

**Why it happens:**
When a design looks significantly different from the current one, the reflex is to delete and rewrite rather than adapt. Rewrites introduce more regression risk than incremental updates. The current components are small and simple but they do work correctly on mobile.

**How to avoid:**
Treat the redesign as a visual layer migration, not a full rewrite. The existing component structure (`ExperienceItem`, `ProjectItem`) can receive new Tailwind classes and props without being deleted. Preserve the data structure (the arrays in `page.js`) until the new design is validated visually. Add new components (`CourseCard`, `ChannelLink`) alongside existing ones rather than replacing them mid-build. Test on mobile at each incremental step, not only at the end.

**Warning signs:**
- Deleting existing component files before the replacement is visually validated
- Changing the `page.js` data arrays at the same time as redesigning component markup
- Skipping mobile testing until the end of a redesign phase

**Phase to address:**
Every phase — establish a "don't break working features" rule before any phase begins

---

## Technical Debt Patterns

| Shortcut | Immediate Benefit | Long-term Cost | When Acceptable |
|----------|-------------------|----------------|-----------------|
| Hardcoding all content in `page.js` arrays | Simple, no abstraction needed | Updating course info, channel links, or work history requires digging into page component | Acceptable for v1 if a dedicated data file (`lib/data.js`) separates content from markup |
| Using `<img>` instead of Next.js `<Image>` for course thumbnails | Faster to implement | No automatic WebP conversion, no lazy loading, slower LCP on mobile | Never — Next.js `<Image>` is already used in Header, maintain consistency |
| Inline styles for one-off brand color choices | Quick to ship a distinctive detail | Bypasses Tailwind's design system, creates inconsistency when theme evolves | Never — extend Tailwind config with brand tokens instead |
| Adding third-party social feed embeds (Curator, Walls.io) | "Live" channel content | External JS, layout shift, API rate limits, GDPR surface, maintenance | Never for this project — static channel links achieve the same goal |
| Building separate pages for each section (courses at `/courses`) | Clean URL structure | Adds routing complexity when this is a one-page brand hub | Only acceptable if course count grows beyond 6-8 cards |

---

## Integration Gotchas

| Integration | Common Mistake | Correct Approach |
|-------------|----------------|------------------|
| External course platform links | Opening in same tab, breaking back navigation | Always `target="_blank" rel="noopener noreferrer"` — preserve the portfolio page as the hub |
| YouTube / TikTok channel links | Linking to channel root URL that changes when rebranding | Link to the stable handle URL, not video-specific URLs; document the handle in a single data file |
| Social icons (SVG files) | Using `<img>` tags that ignore theme color | If monochrome icons are needed for dark/light theme, use inline SVG or CSS `currentColor` fill |
| Vercel deployment | Adding environment variables for non-existent APIs (e.g., fetching follower counts) | This site has no backend needs — don't introduce API keys or server-side fetching for social data |
| Next.js `<Image>` with external URLs | Forgetting to add external domains to `next.config.js` `images.remotePatterns` | Add course platform image domains (e.g., Udemy, Teachable thumbnails) to config before using them in course cards |

---

## Performance Traps

| Trap | Symptoms | Prevention | When It Breaks |
|------|----------|------------|----------------|
| Unoptimized course thumbnail images | Slow LCP, especially on mobile — course section feels heavy | Use Next.js `<Image>` with explicit `width`/`height` or `fill` + `sizes` prop; serve WebP | Immediately on first ship if not addressed |
| Importing large icon libraries (react-icons, heroicons full bundle) | JS bundle bloat, slower TTI | Import only specific icons by path, not the full library | Even at small traffic — affects Core Web Vitals |
| Embedding third-party social widgets | Layout Cumulative Shift (CLS), blocking JS, privacy consent requirements | Replace with static HTML links styled as channel cards | Immediately — widgets load asynchronously after paint |
| Multiple large SVG social icons loaded as separate requests | Waterfall of small requests on initial load | Bundle icons as a sprite or use inline SVG for icons used above the fold | Noticeable on slow connections at any traffic level |

---

## UX Pitfalls

| Pitfall | User Impact | Better Approach |
|---------|-------------|-----------------|
| No clear primary CTA in hero | Visitors who want to hire or collaborate leave without knowing what to do | Include one explicit CTA above the fold: "View courses" or "Get in touch" — pick one primary action |
| Course section with no pricing signal | Visitors interested in courses hesitate to click external link without price context | Add a brief descriptor ("free on YouTube" vs "paid course on Udemy") near each course card |
| Content channels section that looks like a footer | Visitors interpret it as boilerplate and scroll past | Give the channels section a human frame ("Where I create content") not just an icon row |
| Mobile hero that squashes profile photo and text | Name and title become unreadable on small screens | Test the hero on 375px viewport specifically — the current Header already struggles with `text-lg` on mobile |
| Mixing Spanish and English copy | Confuses the target audience (dev community) and signals inconsistency | Commit to one language throughout — English if targeting international dev community, Spanish if targeting local market |

---

## "Looks Done But Isn't" Checklist

- [ ] **Hero section:** Verify all three identity axes visible (geospatial engineer, web builder, educator/content creator) — not just a job title
- [ ] **Courses section:** Verify each card has copy beyond the title — at minimum a one-line value description and a visible platform name
- [ ] **Content channels:** Verify every external link opens in a new tab and has been clicked manually to confirm it points to an active account
- [ ] **Mobile layout:** Verify at 375px, 390px, and 430px viewports specifically — not just "responsive" but actually readable
- [ ] **Experience section:** Verify it visually integrates with the new design language — section headings, spacing, and card styles match the refresh
- [ ] **Social links in Header:** Verify Instagram and TikTok links are present if those are now priority channels (current Header only has LinkedIn, GitHub, X, YouTube)
- [ ] **Next.js Image domains:** Verify `next.config.js` includes any external image domains used in course thumbnails
- [ ] **Language consistency:** Verify no mixed Spanish/English strings across all section headings and copy
- [ ] **Open Graph / meta tags:** Verify `layout.js` has accurate title, description, and OG image reflecting the new identity (not the old CV framing)

---

## Recovery Strategies

| Pitfall | Recovery Cost | Recovery Steps |
|---------|---------------|----------------|
| Hero copy still reads as CV | LOW | Copy is separate from markup — rewrite the tagline strings, no structural changes needed |
| Course section has no context copy | LOW | Add description strings to the course data array, update card component to render them |
| Broke mobile layout during redesign | MEDIUM | Restore last working mobile-tested commit, apply Tailwind responsive classes incrementally |
| Social links pointing to wrong/stale accounts | LOW | Update URLs in the data file; if no data file exists yet, this is the trigger to create one |
| Embedded third-party social widget causing layout shift | HIGH (if deep) | Remove widget entirely, replace with static link cards — never worth the maintenance cost |
| Mixed language copy shipped to production | LOW | String sweep across all components, single find/replace pass |

---

## Pitfall-to-Phase Mapping

| Pitfall | Prevention Phase | Verification |
|---------|------------------|--------------|
| Resume reflex in hero | Hero / identity redesign phase | Read hero copy aloud — does it mention building geospatial tools AND teaching? |
| Template aesthetic | Design system phase (before building sections) | Show to someone unfamiliar with Goyo — can they describe what makes this site visually distinctive? |
| Content creator identity buried below fold | Information architecture / page structure phase | Does a visitor from YouTube see courses and channels without scrolling? |
| Course cards with no context | Courses section implementation | Do course cards answer: what will I learn, who is this for, where do I buy? |
| Social aggregation maintenance burden | Content channels section | Is channel data in a single dedicated file separate from component markup? |
| Brownfield breakage | Every phase | Run the site on mobile at 375px after every component change — not just at phase end |

---

## Sources

- johnrush.me — direct observation of identity-first hero framing, conversational copy, minimalist aesthetic choices (HIGH confidence)
- [11 Hand-Picked Personal Brand Websites](https://blog.copyfol.io/personal-brand-website) — pitfall: building without brand discovery leads to generic, unmemorable sites (MEDIUM confidence)
- [5 Mistakes Developers Make in Their Portfolio Websites](https://www.devportfoliotemplates.com/blog/5-mistakes-developers-make-in-their-portfolio-websites) — generic intros, credential-first framing (MEDIUM confidence)
- [Avoid These 5 Things When Building Your Portfolio](https://vanschneider.com/avoid-these-5-things-when-building-your-design-portfolio) — overshadowing work with design choices, losing the human element (MEDIUM confidence)
- [Link-in-Bio 2.0: Own Your Domain](https://www.linkdrip.com/blog/link-in-bio-2-0-how-to-build-a-high-converting-social-hub-with-branded-short-links) — third-party aggregation gives away SEO, own domain is always correct for creator hubs (HIGH confidence)
- [Next.js Image Optimization Docs](https://nextjs.org/docs/app/api-reference/components/image) — remotePatterns config required for external image domains (HIGH confidence)
- Codebase analysis of `Header.js`, `page.js` — direct observation of current credential-first structure, hardcoded data patterns, missing channels (HIGH confidence — primary source)

---
*Pitfalls research for: personal brand hub / developer portfolio redesign (Next.js + Tailwind CSS)*
*Researched: 2026-03-12*
