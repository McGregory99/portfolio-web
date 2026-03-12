# Feature Research

**Domain:** Developer personal brand site — software engineer + content creator + course seller
**Researched:** 2026-03-12
**Confidence:** MEDIUM (based on analysis of live sites, web research, and pattern synthesis)

## Feature Landscape

### Table Stakes (Users Expect These)

Features visitors assume exist. Missing these = site feels incomplete or amateur.

| Feature | Why Expected | Complexity | Notes |
|---------|--------------|------------|-------|
| Identity-first hero | Visitors spend 3–5s deciding whether to stay. A name + title + one-liner must answer "who is this and why should I care" immediately. | LOW | Must lead with builder/maker framing, not resume title. "I build X and teach Y" beats "Senior Engineer at Z". |
| Avatar / personal photo | Humanizes the brand. Anonymous personal sites feel impersonal and untrustworthy. | LOW | High-quality headshot or illustrated avatar. Crop to face, not full-body. |
| Social links (visible, above fold) | GitHub, LinkedIn, X/Twitter are expected for any developer. Visitors check these to validate the person. | LOW | Icon row in hero or header. Separate from content section. 4–6 links max before it becomes noise. |
| Projects section | Concrete proof of work. Without it, claims in the hero are just assertions. | MEDIUM | Cards with name, short description, tech used, external link. 3–6 projects. |
| Work experience section | Recruiters and potential clients vet credentials before reaching out. Omitting it forces them to leave to find LinkedIn. | MEDIUM | Existing — must be preserved but visually integrated into new design language. |
| Mobile responsiveness | Over 50% of traffic is mobile. Non-responsive = instant exit. | LOW | Existing — must be maintained across redesign. |
| Fast load time | Personal brand sites have no loading screen excuse. Slow = unprofessional signal. | LOW | Static content + Next.js means this is mostly free if no heavy embeds or unoptimized images. |
| Clear primary CTA | Visitors need one obvious next action. Without it, they leave without engaging. | LOW | "View my courses", "Book a call", or "Watch on YouTube" — pick one per section, not five competing. |
| Contact or reach-out mechanism | Recruiters, clients, and collaborators need to contact you. No contact = lost opportunities. | LOW | Email link is enough. Contact form is optional — adds complexity without much gain for a personal site. |

### Differentiators (Competitive Advantage)

Features that set a personal brand site apart from a standard portfolio. Not expected, but memorable.

| Feature | Value Proposition | Complexity | Notes |
|---------|-------------------|------------|-------|
| Builder-first hero framing | "I build geospatial tools, web apps, and teach developers" is a concrete identity claim, not a job title. Sites like johnrush.me lead with "I'm a founder with 24 products" — the achievement/builder angle, not the corporate role. | LOW | Copywriting change, not code change. High impact per effort. |
| Courses section with cards | Signals teaching authority. A courses section separates creator-educators from pure engineers. Cards with title, cover image, platform badge, and CTA link create a marketplace feel without hosting a checkout. | MEDIUM | Each card: course title, short tagline, platform (Udemy / etc.), cover image, "Enroll" CTA linking externally. |
| Content channels aggregation section | Surfaces multi-platform presence in one place. Instead of burying YouTube/TikTok in a footer icon, a dedicated "Find me on" section with channel name, platform logo, and subscriber/follower count makes the content creator identity explicit. | LOW–MEDIUM | Simple grid or list. No embedded feeds — just styled links. Platform count + short channel description per card. |
| Personality-driven about blurb | A 2–3 sentence human summary that reads like a person wrote it, not a LinkedIn bio. johnrush.me's "I'm a founder/hacker/builder" tone vs the standard "Experienced software engineer with 8+ years..." | LOW | Copywriting. No code needed. Dramatically changes perceived warmth of the site. |
| Geospatial / domain specificity callout | Being the "Earth Observation and geospatial developer who teaches" is an extremely narrow niche — which is a strength. Calling it out explicitly (not just listing it as a skill) sets Goyo apart from generic full-stack devs. | LOW | One line in hero or about section. Can be reinforced visually with a subtle map/satellite image motif. |
| Stats bar or achievement highlights | johnrush.me shows "24 products, 100k+ B2B users" in the hero. A stats row with 2–4 concrete numbers (courses published, YouTube subscribers, years building, etc.) builds instant credibility. | LOW | Static numbers — no live counter needed. Keep to 2–4 stats max. |
| Dark/minimal aesthetic with personality | johnrush.me uses dark background + monospace font + dashed borders. lvrpiz.com uses clean minimal. Both avoid the default "Bootstrap portfolio" look. The aesthetic signals taste and intentionality. | MEDIUM | Design decision, not a feature. But it's the first thing visitors register. Tailwind CSS 4 makes dark mode first-class. |
| Section-level anchor navigation | Smooth scroll with active highlight (as johnrush.me does) lets visitors jump to the section relevant to them — recruiters go to Experience, fans go to Content, students go to Courses. | LOW–MEDIUM | Next.js + CSS handles this cleanly. No JS library needed for basic version. |

### Anti-Features (Commonly Requested, Often Problematic)

Features that seem like good ideas but create maintenance burden, complexity, or friction without proportional value.

| Feature | Why Requested | Why Problematic | Alternative |
|---------|---------------|-----------------|-------------|
| Embedded social feeds (live YouTube/TikTok/Instagram) | Shows active presence dynamically | API rate limits, embed performance penalty, constant breakage when platforms change their embed APIs, increases page weight significantly. TikTok's oEmbed has been unreliable. | Static links to channels with follower count. Update manually on major milestones. |
| Blog / article system | Keeps site fresh, good for SEO | Heavy scope: needs CMS or MDX pipeline, post listing, slug routing, SEO metadata per post. Out of scope per PROJECT.md. Adds 2–3 days of build time for no validated need. | Link to a Medium/Dev.to/Substack profile if writing happens externally. |
| Contact form with backend | Feels more professional than a mailto link | Requires serverless function or form service (Formspree, etc.), spam handling, email delivery. For a personal site, most serious inquiries come via LinkedIn or Twitter DM anyway. | mailto: link with pre-filled subject. Simple, zero maintenance. |
| Course checkout on-site | Reduces friction of external redirect | Payment processing, order management, email receipts, refund policy. Full SaaS scope. Explicitly out of scope per PROJECT.md. | Link directly to course platform (Udemy, etc.) for purchase. |
| Live subscriber/follower counters | Shows real-time social proof | Requires API polling on every visit, API keys in environment, risk of rate limiting. YouTube Data API has quota limits. | Static numbers updated manually. Use "1k+" format — precise counts imply freshness you can't maintain. |
| Skills progress bars | Common on portfolio templates | Visually infantile — what does "JavaScript: 85%" even mean? Creates more questions than it answers. Recruiters have reported these as a red flag. | Keyword list in experience section, or project tech stacks demonstrate skills contextually. |
| Animated loading screen | Feels polished, as seen on johnrush.me | johnrush.me gets away with it because it's a known brand. For a new visitor, a 1.5s loading overlay is friction before they've seen anything. | Let the page render normally. Use subtle entrance animations on content if polish is wanted. |
| i18n / multi-language | Broader reach | Doubles content maintenance burden. Explicit out of scope per PROJECT.md. | Single language. Add later only if audience data shows it's warranted. |

## Feature Dependencies

```
Hero redesign (identity-first copy + layout)
    └──sets visual language for──> All other sections

Content channels section
    └──requires──> Brand identity established in hero (tone + color)

Courses section
    └──requires──> At least 1 course to display
    └──links to──> External platform (no internal dependency)

Stats bar
    └──enhances──> Hero section (placed near or in hero)
    └──requires──> Concrete numbers to fill (courses, subscribers, etc.)

Social links (icon row)
    └──conflicts with——> Content channels section IF both are in the hero
                         (causes redundancy — social icons in hero, channel cards below)

Work experience section
    └──existing, retained
    └──requires visual reskin to match──> New design language
```

### Dependency Notes

- **Hero must come first in build:** All other sections inherit the visual language established in the hero redesign. Implementing courses cards or content section in isolation before the hero is finalized risks rework.
- **Social links vs Content section:** There is an intentional overlap between a social icon row in the header/hero and a content channels section. The distinction: the icon row is for quick navigation (GitHub, LinkedIn — professional links), the content section is for content platforms with context (YouTube with channel description, TikTok with niche description). Keep them separate and intentional.
- **Stats bar enhances but does not block:** The stats row (if included) is a cosmetic enhancement to the hero. It can be added after the hero redesign is stable without disruption.

## MVP Definition

### Launch With (v1 — this milestone)

Minimum scope to replace the corporate-feeling portfolio with an identity-first personal brand hub.

- [ ] Hero redesign with builder-first framing — the most visible change, highest impact
- [ ] Courses section with card-per-course linking to external platform — core new feature
- [ ] Content channels section with platform cards/links (YouTube, Instagram, TikTok, LinkedIn, X) — establishes creator identity
- [ ] Visual design refresh (dark/minimal or clean minimal, away from default resume look) — required for credibility
- [ ] Work experience retained with visual reskin to match new design language — preserve existing value

### Add After Validation (v1.x)

Features to add once the core redesign is live and receiving traffic.

- [ ] Stats bar (2–4 numbers near hero) — add once you have numbers worth showing
- [ ] Geospatial/domain specificity callout if hero copy tests well — easy add after initial feedback
- [ ] Anchor navigation with active state — add if section count grows beyond 4–5

### Future Consideration (v2+)

Features to defer until there is a validated reason to build them.

- [ ] Blog/writing section — defer until external writing is happening consistently and a platform is chosen
- [ ] Newsletter signup integration — defer until an email list strategy is defined
- [ ] Case study pages per project — defer until hiring or client conversion becomes the primary goal

## Feature Prioritization Matrix

| Feature | User Value | Implementation Cost | Priority |
|---------|------------|---------------------|----------|
| Identity-first hero redesign | HIGH | LOW | P1 |
| Courses section | HIGH | MEDIUM | P1 |
| Content channels section | HIGH | LOW | P1 |
| Visual design refresh | HIGH | MEDIUM | P1 |
| Work experience visual reskin | MEDIUM | LOW | P1 |
| Stats bar | MEDIUM | LOW | P2 |
| Anchor navigation with active state | MEDIUM | LOW | P2 |
| Personality-driven about blurb | HIGH | LOW | P1 (copywriting only) |
| Blog / article system | LOW | HIGH | P3 |
| Newsletter signup | LOW | LOW | P3 |
| Contact form | LOW | MEDIUM | P3 |

**Priority key:**
- P1: Must have for this milestone launch
- P2: Should have, add when core is stable
- P3: Nice to have, future milestone

## Competitor Feature Analysis

| Feature | johnrush.me | lvrpiz.com | Goyo's approach |
|---------|-------------|------------|-----------------|
| Hero framing | "Founder, 24 products, 200k followers" — achievement-first, stats in hero | Role + employer, minimal | Builder-first: "I build geospatial tools, web apps, and teach developers" |
| Visual style | Dark, monospace, dashed borders, matrix animation | Clean minimal, light | Clean minimal or dark minimal — avoid animation-heavy loading screens |
| Products/projects | Grid of all products with logos | Apps and tools grid | Projects section retained with card layout |
| Social proof | Stats in hero (users, products), best tweets section | LinkedIn/GitHub/X links | Stats bar (courses, subscribers) + social icon row |
| Content | Podcasts section with video gallery | Substack newsletter link | Courses section + content channels section |
| Navigation | Sidebar sticky nav with active state | Minimal header | Sticky header with section anchors |
| Courses / guides | "Buy Directory Guide" / "Founder Guide" cards with price | Not present | Course cards linking to external platform (no price on site) |
| Monetization signal | Explicit ($49, $99) | None | Implicit (link to course platform — let platform handle pricing) |

## Sources

- johnrush.me — direct site analysis (fetched 2026-03-12): sidebar navigation, dark monospace aesthetic, stats in hero, product grid, podcast section, guide purchase cards
- lvrpiz.com — direct site analysis (fetched 2026-03-12): minimal personal professional portfolio, social links, Substack reference
- [Web Developer Portfolio Examples — Alvaro Trigo Blog](https://alvarotrigo.com/blog/web-developer-portfolio-examples/): hero patterns, identity-first design, GitHub linking, content sections
- [Personal Brand Websites — Feather.so](https://feather.so/blog/personal-branding-websites): value proposition framing, strategic CTAs, educator vs developer patterns
- [Personal Brand Website Examples — Copyfol.io](https://blog.copyfol.io/personal-brand-website): authentic voice, niche focus, storytelling over credential listing
- [Developer Personal Branding Handbook — freeCodeCamp](https://www.freecodecamp.org/news/personal-branding-for-devs-handbook/): platform-specific strategies, GitHub as showroom, social link placement
- [Social Media Embedding Guide 2025 — Marketing Scoop](https://www.marketingscoop.com/marketing/the-ultimate-guide-to-embedding-social-media-on-your-website-in-2024/): why static links beat live embeds for performance and reliability

---
*Feature research for: Goyo Cancio personal brand website — developer + content creator + course seller*
*Researched: 2026-03-12*
