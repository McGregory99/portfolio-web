# Goyo Cancio — Personal Website

## What This Is

A personal brand hub for Goyo Cancio, a software engineer specializing in Earth Observation and geospatial data who also creates developer content and sells courses. The site replaces a corporate-feeling portfolio with an identity-first experience that feels human and personal — closer to johnrush.me than a CV — while serving as a central hub linking to work, courses, and content across platforms.

## Core Value

Visitors immediately understand who Goyo is and what he builds — and can navigate to his courses, content, or hire him within seconds of landing.

## Requirements

### Validated

<!-- Already exists in current codebase -->

- ✓ Visitor can see profile/hero section with name, title, and social links — existing
- ✓ Visitor can read work experience in chronological order — existing
- ✓ Visitor can view portfolio projects with external links — existing
- ✓ Site is responsive and works on mobile — existing

### Active

<!-- New scope for this milestone -->

- [ ] Hero section uses builder-first identity framing ("I build geospatial tools, web apps, and teach developers online")
- [ ] Hero section feels personal and human, not corporate/CV-like
- [ ] Visitor can see a Courses section with course cards linking to external platform
- [ ] Visitor can find all content channels (YouTube, Instagram, TikTok, LinkedIn, X) aggregated in one section
- [ ] Design is visually refreshed — inspired by minimal, identity-first aesthetics of johnrush.me / lvrpiz.com
- [ ] Work experience section is retained but visually integrated into the new design language

### Out of Scope

- Course checkout / direct purchase on site — courses sold via external platform only
- Blog or written articles — not part of v1
- Authentication or user accounts — public content only
- i18n / multi-language — single language for now

## Context

- **Existing codebase:** Next.js 15.3.1 + React 19 + Tailwind CSS 4, deployed to Vercel. App Router pattern, all components in `app/components/`. Content is hardcoded in page.js as arrays.
- **Current problems:** Looks like a resume (too corporate), missing courses and content creator identity.
- **Inspiration:** johnrush.me (personal tone, identity-first hero), lvrpiz.com (minimal, clean)
- **Audience:** Recruiters, potential clients, and the developer community following his content
- **Content channels:** YouTube, LinkedIn, X (Twitter), Instagram, TikTok

## Constraints

- **Tech stack:** Continue with Next.js + Tailwind CSS — don't change the stack
- **Deployment:** Vercel — keep deployment-compatible
- **Courses:** External platform only (no self-hosted checkout)
- **Performance:** Fast load times — site must remain lightweight

## Key Decisions

| Decision | Rationale | Outcome |
|----------|-----------|---------|
| Keep existing tech stack (Next.js + Tailwind) | Brownfield — working stack, deployed to Vercel | — Pending |
| Builder-first tagline in hero | User chose this framing — more personal than role-first | — Pending |
| Courses link to external platform | Avoid checkout complexity in v1 | — Pending |

---
*Last updated: 2026-03-12 after initialization*
