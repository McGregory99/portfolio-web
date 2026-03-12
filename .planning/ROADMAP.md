# Roadmap: Goyo Cancio — Personal Brand Hub

## Overview

This milestone transforms an existing Next.js 15 portfolio from a credential-first CV site into an identity-first personal brand hub. The work proceeds in four phases: establish the visual language and data foundation before touching components, redesign the hero as the visual reference point, build the two net-new sections (courses and channels), then reskin the existing sections and add the language switcher. Each phase delivers a coherent, independently verifiable state of the site.

## Phases

**Phase Numbering:**
- Integer phases (1, 2, 3): Planned milestone work
- Decimal phases (2.1, 2.2): Urgent insertions (marked with INSERTED)

- [ ] **Phase 1: Foundation** - Establish visual language, information architecture, and the data layer (lib/) that all components depend on
- [ ] **Phase 2: Hero Redesign** - Replace the corporate hero with an identity-first, animated hero section
- [ ] **Phase 3: New Sections** - Build the Courses and Content Channels sections from scratch
- [ ] **Phase 4: Polish & i18n** - Reskin existing Experience and Projects sections and add the language switcher

## Phase Details

### Phase 1: Foundation
**Goal**: The design language is decided, the page section order is locked, and all content data lives in lib/ — ready for components to be built against
**Depends on**: Nothing (first phase)
**Requirements**: DSGN-01, DSGN-02, DSGN-03
**Success Criteria** (what must be TRUE):
  1. Page sections render in order: Hero → Courses → Channels → Experience → Projects
  2. A consistent visual language (typography, color palette, spacing scale) is applied across the page — no section looks like a different site
  3. Site is fully usable on a 375px mobile viewport with no horizontal scroll or clipped content
  4. All content (profile, courses, channels, experience) is sourced from lib/ files — nothing is hardcoded inside a component
**Plans**: TBD

### Phase 2: Hero Redesign
**Goal**: Visitors land and immediately understand who Goyo is and what he builds — with a human, identity-first hero that replaces the corporate CV framing
**Depends on**: Phase 1
**Requirements**: HERO-01, HERO-02, HERO-03, HERO-04
**Success Criteria** (what must be TRUE):
  1. The hero headline identifies Goyo as a builder (geospatial tools, web apps, teaching developers) — not a job title or employer
  2. Goyo's profile photo is visible in the hero section
  3. Social links (GitHub, LinkedIn, X, YouTube) are clickable directly from the hero
  4. Page content animates in with a staggered entrance effect when the page loads
**Plans**: TBD

### Phase 3: New Sections
**Goal**: Visitors can discover and access Goyo's courses and all content channels from dedicated sections — the creator identity is explicit, not buried
**Depends on**: Phase 2
**Requirements**: COUR-01, COUR-02, CHAN-01
**Success Criteria** (what must be TRUE):
  1. Visitor can browse a courses section showing one card per course, each with a thumbnail image and a link that opens the external platform (Gumroad)
  2. Visitor can find a dedicated channels section listing YouTube, TikTok, Instagram, LinkedIn, and X — each as a labeled, clickable link (not just footer icons)
  3. Both sections match the visual language established in Phase 1
**Plans**: TBD

### Phase 4: Polish & i18n
**Goal**: The existing Experience and Projects sections feel native to the new design, and visitors can switch the site language between Spanish and English
**Depends on**: Phase 3
**Requirements**: EXPR-01, PROJ-01, I18N-01
**Success Criteria** (what must be TRUE):
  1. The Work Experience section is visually indistinguishable in style from the Courses and Channels sections — no legacy CV styling remains
  2. The Projects section matches the new design language with consistent card/item styling
  3. A language toggle button is visible in the header — clicking it switches all site copy between Spanish (default) and English without a page reload
**Plans**: TBD

## Progress

**Execution Order:**
Phases execute in numeric order: 1 → 2 → 3 → 4

| Phase | Plans Complete | Status | Completed |
|-------|----------------|--------|-----------|
| 1. Foundation | 0/TBD | Not started | - |
| 2. Hero Redesign | 0/TBD | Not started | - |
| 3. New Sections | 0/TBD | Not started | - |
| 4. Polish & i18n | 0/TBD | Not started | - |
