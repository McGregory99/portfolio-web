# Stack Research

**Domain:** Personal brand hub / developer portfolio — Next.js 15 enhancement
**Researched:** 2026-03-12
**Confidence:** MEDIUM-HIGH (core libraries verified via official sources; social media embedding approach has known caveats noted below)

---

## Existing Stack (Do Not Change)

| Technology | Version | Status |
|------------|---------|--------|
| Next.js | 15.3.1 | Keep — App Router, Turbopack dev |
| React | 19.0.0 | Keep |
| Tailwind CSS | 4 | Keep |
| Vercel | — | Keep — deployment target |

All additions below are additive. Nothing in the existing stack should be replaced.

---

## Recommended Additions

### Animation

| Library | Version | Purpose | Why Recommended | Confidence |
|---------|---------|---------|-----------------|------------|
| motion | ^12.x (latest) | Page section entrance animations, scroll-triggered reveals, hover micro-interactions on cards | Framer Motion was rebranded to Motion in late 2024. Version 12+ is fully React 19 compatible and explicitly tested with Next.js 15. Uses `motion/react-client` import for App Router to minimize client JS. 4KB base bundle. Dominant in the React portfolio space — the de-facto choice for declarative animation. | HIGH |

**Install:**
```bash
npm install motion
```

**App Router import pattern:**
```js
// For server component files that import motion
import * as motion from "motion/react-client"

// For files already marked "use client"
import { motion } from "motion/react"
```

**Do NOT use:** `framer-motion` package for new code. The `motion` package is the successor. The API is identical — just swap the import. Existing `framer-motion` installs continue to work but new projects should use `motion`.

---

### Social Media / Content Channel Aggregation

The goal is to show Goyo's presence across YouTube, Instagram, TikTok, LinkedIn, and X. There are two sub-problems:

1. **Profile/channel links** — simple cards with icons and handles (no library needed)
2. **Embedded posts or latest content** — requires external service or native embeds

#### For Channel Link Cards (table stakes, no extra library)

Use Lucide React for social media icons + Tailwind CSS card components. This covers the "all channels in one section" requirement with zero overhead.

| Library | Version | Purpose | Why | Confidence |
|---------|---------|---------|-----|------------|
| lucide-react | ^0.475+ (latest) | Social media platform icons, UI icons | 1000+ icons, stroke-based minimal aesthetic, actively maintained, full tree-shaking, React 19 compatible. Matches the minimal identity-first aesthetic better than Heroicons (which skews toward Tailwind SaaS UI). Zero runtime, SVGs only. | HIGH |

**Install:**
```bash
npm install lucide-react
```

Note: Lucide does not have all social brand icons (TikTok, Instagram). For those, keep the existing `/public/social/*.svg` files already in the project and use Next.js `Image` or inline SVG. Lucide covers GitHub, LinkedIn, X/Twitter, YouTube, and generic icons.

#### For Embedding Latest Content (optional enhancement — defer to later phase)

**Option A — `react-social-media-embed` (LOW confidence for React 19):**
Version 2.5.18, last published ~1 year ago. Peer dependencies declare React 18 compatibility only. Installs with `--legacy-peer-deps` but this bypasses React 19 compatibility checks. The library is not actively maintained for React 19. Risk of subtle rendering bugs.

**Recommendation: Do not use `react-social-media-embed` with React 19 without validation.** It works via `--legacy-peer-deps` but carries maintenance risk.

**Option B — `@next/third-parties` YouTubeEmbed (HIGH confidence for YouTube only):**
Official Next.js package maintained by Vercel. Uses `lite-youtube-embed` under the hood for fast loading. Covers YouTube only. Stable and officially supported.

```bash
npm install @next/third-parties
```

```js
import { YouTubeEmbed } from '@next/third-parties/google'
```

**Option C — Native platform embeds via iframe/oEmbed (no dependency, MEDIUM confidence):**
YouTube, Instagram, and TikTok all provide official oEmbed endpoints and `<iframe>` embed codes. A Next.js Server Component can fetch oEmbed data from `https://www.youtube.com/oembed?url=...&format=json` and render the iframe server-side. Zero client JS, no library dependency, always current with platform changes.

**Recommended approach for this milestone:** Start with Option B (`@next/third-parties`) for YouTube, and use native platform iframe snippets for Instagram/TikTok. Skip `react-social-media-embed` entirely. Full social media feed aggregation (SaaS services like EmbedSocial, Flockler) is out of scope for this milestone — adds cost and third-party script weight.

---

### Icons

| Library | Version | Purpose | Why | Confidence |
|---------|---------|---------|-----|------------|
| lucide-react | ^0.475+ | UI icons (arrows, external links, course badges, section icons) | See above. Minimal stroke style matches identity-first aesthetic. Already the community standard for Next.js + Tailwind projects. Pairs naturally with Tailwind 4's utility-first approach. | HIGH |

Keep existing `/public/social/*.svg` files for brand icons not in Lucide (TikTok logo, Instagram logo).

---

### Component System

**No new component library recommended.**

shadcn/ui is compatible with Tailwind CSS 4 and Next.js 15 (all components updated for React 19 as of 2025). However, it is not recommended for this project because:

1. The portfolio is a single-page site with a small, custom component surface. shadcn/ui is optimized for multi-page apps with forms, tables, dialogs.
2. Installing shadcn/ui creates a `components/ui/` directory pattern that conflicts with the existing `app/components/` project structure.
3. The minimal identity-first aesthetic (johnrush.me, lvrpiz.com reference) is better served by bespoke Tailwind components than a pre-baked component library.

**Use Tailwind CSS 4 utility classes directly for all course cards, channel cards, and section layouts.** The existing pattern of inline Tailwind in JSX should continue.

---

### Design Tokens / Fonts

No new font library needed. The existing stack already uses `next/font/google` with `Inter` (variable) and `Geist Mono`.

**Consider:** If the hero redesign requires a more distinctive display font, add it through `next/font/google` — no additional package needed. The `next/font` system handles optimization automatically.

---

## Installation Summary

```bash
# Animation (required)
npm install motion

# YouTube embed — official Next.js optimized (required if embedding video)
npm install @next/third-parties

# Icons (required)
npm install lucide-react
```

All three packages are compatible with the existing stack. No `--legacy-peer-deps` required.

---

## Alternatives Considered

| Recommended | Alternative | Why Not |
|-------------|-------------|---------|
| `motion` (v12+) | `framer-motion` (legacy package name) | Same library, `motion` is the current package name. Both work, but `motion` is what new projects should use. |
| `motion` (v12+) | GSAP | GSAP is more powerful but requires a commercial license for many plugins. Overkill for portfolio entrance animations. Much larger API surface. |
| `motion` (v12+) | CSS transitions only | Viable for simple hover states. Falls short for scroll-triggered entrance animations without additional code. Motion adds minimal bundle weight for a meaningful DX improvement. |
| Lucide React | Heroicons | Heroicons has 316 icons (smaller set), designed for Tailwind SaaS UI patterns. Lucide has 1000+ icons and a cleaner stroke aesthetic for minimal personal sites. Both are fine choices. |
| Bespoke Tailwind components | shadcn/ui | shadcn/ui is valuable for app-scale component systems. This site has ~5 distinct component types. The overhead isn't justified. |
| `@next/third-parties` YouTubeEmbed | `react-social-media-embed` | `react-social-media-embed` is unmaintained for React 19. `@next/third-parties` is Vercel-official. |
| Platform iframe embeds | EmbedSocial / Flockler | Paid SaaS aggregation adds cost and third-party script weight. Platform embeds are free, zero-dependency, and sufficient for a personal brand hub. |
| Lucide React + inline SVGs | `react-icons` | `react-icons` bundles all icon sets together (poor tree-shaking historically). Lucide is purpose-built for the icon style this project needs. |

---

## What NOT to Use

| Avoid | Why | Use Instead |
|-------|-----|-------------|
| `react-social-media-embed` | Last published ~1 year ago, React 18 peer deps only. Not maintained for React 19. Installs only via `--legacy-peer-deps`. | `@next/third-parties` for YouTube; native iframe for Instagram/TikTok |
| Aceternity UI / Magic UI | These are copy-paste animation component libraries that embed Framer Motion deeply into opinionated components. They add visual complexity (particle effects, spotlight cards) that conflict with the minimal identity-first aesthetic target. Hard to override. | `motion` + bespoke Tailwind components |
| `@tailwindcss/typography` plugin | Not needed — no blog or long-form prose content in scope for this milestone. | — |
| Any CSS-in-JS library (styled-components, emotion) | Conflicts with Tailwind CSS 4's CSS-first approach. Tailwind 4 moved away from JS config entirely. | Tailwind utility classes + CSS custom properties |
| `react-icons` | Inconsistent tree-shaking, multiple bundled icon sets. | `lucide-react` for UI icons + inline SVG for brand icons |

---

## Version Compatibility

| Package | Compatible With | Notes |
|---------|-----------------|-------|
| `motion` ^12.x | React 19.0.0, Next.js 15.x | Use `motion/react-client` import in Server Component files; `motion/react` in `"use client"` files |
| `lucide-react` ^0.475+ | React 19, Next.js 15 | SVG-only, no runtime. No compatibility issues. |
| `@next/third-parties` latest | Next.js 15 (official package) | Maintained by Vercel alongside Next.js. Version stays aligned with Next.js releases. |
| `tailwindcss` 4 | All above packages | Tailwind 4 is CSS-first — all packages above are UI-agnostic and do not conflict. |

---

## Stack Patterns by Feature Area

**Course showcase cards:**
- Bespoke Tailwind components (grid layout, card hover with `motion` `whileHover`)
- No external library beyond Motion for hover micro-interactions
- `lucide-react` for external link icon, course badge icons

**Content channel section:**
- Channel link cards: bespoke Tailwind + `lucide-react` icons + inline SVGs for TikTok/Instagram brands
- YouTube video embed: `@next/third-parties` `YouTubeEmbed` component
- Instagram / TikTok: native platform `<blockquote>` / `<iframe>` embeds if needed (defer if not MVP)

**Hero redesign:**
- `motion` for staggered entrance animation on headline + tagline + CTA
- `"use client"` directive on Hero component (Motion requires client context)
- Keep font setup as-is via `next/font/google`

**Work experience section (retained):**
- No additional libraries. Tailwind CSS only. Possibly scroll-triggered reveal via `motion`.

---

## Sources

- [Motion for React — Official Docs](https://motion.dev/docs/react) — package identity, React 19 support, App Router import pattern (MEDIUM — page rendered as CSS by WebFetch, info from search corroboration)
- [Motion / Framer Motion Upgrade Guide](https://motion.dev/docs/react-upgrade-guide) — `motion/react` import path confirmed (MEDIUM)
- [framer-motion npm page](https://www.npmjs.com/package/framer-motion) — version 12.35.2 latest, confirmed React 19 support (HIGH via npm registry)
- [React 19 Compatibility Issue — Motion GitHub #2668](https://github.com/motiondivision/motion/issues/2668) — React 19 issue tracked and resolved in v12 (MEDIUM)
- [shadcn/ui — Tailwind v4 Docs](https://ui.shadcn.com/docs/tailwind-v4) — confirmed all components updated for Tailwind v4 + React 19 (HIGH)
- [@next/third-parties — Next.js Official Docs](https://nextjs.org/docs/app/guides/third-party-libraries) — `YouTubeEmbed` confirmed official, uses `lite-youtube-embed` (HIGH)
- [react-social-media-embed GitHub](https://github.com/justinmahar/react-social-media-embed) — last publish ~1 year ago, React 18 peer deps (HIGH — package state verified)
- [Lucide React — Official Site](https://lucide.dev/guide/packages/lucide-react) — React-specific package, tree-shaking, React 19 compatible (HIGH)
- [reactlibraries.com — Framer Motion vs Motion One 2025](https://reactlibraries.com/blog/framer-motion-vs-motion-one-mobile-animation-performance-in-2025) — bundle size comparison (MEDIUM)
- WebSearch: shadcn/ui + Tailwind 4 compatibility — multiple community sources agree on full support (MEDIUM)

---

*Stack research for: Goyo Cancio personal brand hub — Next.js 15 enhancement milestone*
*Researched: 2026-03-12*
