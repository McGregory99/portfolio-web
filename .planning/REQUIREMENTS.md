# Requirements: Goyo Cancio Personal Brand Hub

**Defined:** 2026-03-12
**Core Value:** Visitors immediately understand who Goyo is and what he builds — and can navigate to his courses, content, or hire him within seconds of landing.

## v1 Requirements

### Hero

- [ ] **HERO-01**: Visitor sees a builder-first identity statement ("I build geospatial tools, web apps, and teach developers online") — not a job title
- [ ] **HERO-02**: Visitor sees Goyo's profile photo in the hero section
- [ ] **HERO-03**: Visitor can access social links (GitHub, LinkedIn, X, YouTube) directly from the hero section
- [ ] **HERO-04**: Page content animates in with a staggered entrance effect on load

### Design & Information Architecture

- [ ] **DSGN-01**: Page sections appear in order: Hero → Courses → Channels → Experience → Projects
- [ ] **DSGN-02**: All sections follow a consistent minimal identity-first visual language (inspired by johnrush.me / lvrpiz.com)
- [ ] **DSGN-03**: Site is fully responsive and usable on mobile (375px viewport minimum)

### Courses

- [ ] **COUR-01**: Visitor can browse a courses section with one card per course, each linking to Gumroad
- [ ] **COUR-02**: Each course card displays a thumbnail image

### Content Channels

- [ ] **CHAN-01**: Visitor can find a dedicated content channels section listing YouTube, TikTok, Instagram, LinkedIn, and X with links (not just footer icons)

### Experience

- [ ] **EXPR-01**: Visitor can read Goyo's work experience in a section visually reskinned to match the new design language

### Projects

- [ ] **PROJ-01**: Visitor can browse personal projects in a section visually reskinned to match the new design language

### Internationalisation

- [ ] **I18N-01**: Visitor can switch the site language between Spanish (default) and English using a toggle button in the header

## v2 Requirements

### Growth / Stats

- **GRWT-01**: Stats bar in hero showing key numbers (courses published, YouTube subscribers, etc.)
- **GRWT-02**: Newsletter signup / lead capture

### Content

- **CONT-01**: Blog / written articles system
- **CONT-02**: Featured YouTube video embed in the channels section

### Contact

- **CTCT-01**: Contact form with spam protection

## Out of Scope

| Feature | Reason |
|---------|--------|
| Live social feed embeds | API fragility, layout shift, maintenance cost — static links are better |
| Course checkout on site | Courses sold on Gumroad only; no payment infra in scope |
| Separate `/en` route for i18n | Language switcher button is simpler and sufficient for v1 |
| Skills progress bars | Known recruiter red flag; adds no credibility signal |
| Animated loading screen | Friction before brand trust is established |

## Traceability

Which phases cover which requirements. Updated during roadmap creation.

| Requirement | Phase | Status |
|-------------|-------|--------|
| HERO-01 | — | Pending |
| HERO-02 | — | Pending |
| HERO-03 | — | Pending |
| HERO-04 | — | Pending |
| DSGN-01 | — | Pending |
| DSGN-02 | — | Pending |
| DSGN-03 | — | Pending |
| COUR-01 | — | Pending |
| COUR-02 | — | Pending |
| CHAN-01 | — | Pending |
| EXPR-01 | — | Pending |
| PROJ-01 | — | Pending |
| I18N-01 | — | Pending |

**Coverage:**
- v1 requirements: 13 total
- Mapped to phases: 0
- Unmapped: 13 ⚠️

---
*Requirements defined: 2026-03-12*
*Last updated: 2026-03-12 after initial definition*
