# Project Skill File

## Project Overview

This is Eshan Bhimani's personal portfolio website built with Next.js, showcasing his work as a CS student at Georgia Tech. It solves the problem of having a polished, professional online presence that goes beyond a resume — featuring detailed project deep dives with engineering challenges, code snippets, and performance metrics. The core workflow is a static-first site where visitors can browse projects, read about Eshan's background, view his resume, and reach out via contact links. All content is config-driven from a single constants file, making updates fast and consistent across the site.

## Tech Stack

- **Frontend:** Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS v4, Framer Motion
- **Backend:** None — fully static/SSG, no server-side data fetching or API routes
- **Database:** None
- **Auth:** None
- **AI:** None
- **Deployment:** Standalone Next.js output (containerized); Turbopack for dev builds
- **Testing:** None configured

## Architecture

### Frontend Flow
- Root layout (`src/app/layout.tsx`) wraps all pages with `<Navbar>` and `<Footer>`
- Each route is a server component page file under `src/app/<route>/page.tsx`
- `SectionReveal` wraps content blocks to trigger scroll-based fade-up animations via Intersection Observer
- `AnimatedGrid` is a fixed background layer rendered site-wide with aurora streaks, radial grid, and noise grain

### Backend Flow
- No backend. All data is static, sourced from `src/lib/constants.ts`

### Database Flow
- No database. Project data, nav links, social links, resume details are all hardcoded in `constants.ts`

### Third-Party Integrations
- Google Fonts (Inter + JetBrains Mono) loaded via CSS `@import`
- External links to GitHub, LinkedIn, X (Twitter), and live project URLs

### Background Jobs / Async Workflows
- None

## Folder Structure

- `src/app/`: Next.js App Router pages and root layout
- `src/app/page.tsx`: Home page — hero, education timeline, about preview, featured projects, contact CTA
- `src/app/about/page.tsx`: Full biography and philosophy
- `src/app/projects/page.tsx`: Full project grid with deep dive modals
- `src/app/resume/page.tsx`: Education, work experience, skills
- `src/app/contact/page.tsx`: Email CTA and social links
- `src/app/globals.css`: Tailwind import, CSS variable theme (colors, fonts), scrollbar and selection styles
- `src/components/`: Reusable UI components (Navbar, Footer, ProjectCard, ProjectDeepDive, SectionReveal, AnimatedGrid)
- `src/components/ui/`: Presentational components specific to sections or visual effects
- `src/lib/constants.ts`: **Single source of truth** — all nav links, social links, and full project data including deep dive content, metrics, challenges, and code snippets

## Commands

### Development

```bash
npm run dev        # Start dev server with Turbopack at localhost:3000
npm run build      # Production build (standalone output)
npm run start      # Run production build locally
npm run lint       # Run Next.js ESLint
```

## Key Conventions

- **All content lives in `src/lib/constants.ts`** — never hardcode project titles, links, or descriptions inside page/component files
- **`SectionReveal`** should wrap any new content block that needs scroll-triggered animation; accepts `delay` prop for stagger effects
- **`ProjectCard` + `ProjectDeepDive`** use Framer Motion `layoutId` for shared element transitions — always pass a unique stable `id` per project
- **Color palette** uses CSS variables defined in `globals.css`; prefer `var(--color-*)` over raw hex values in new components
- **Georgia Tech gold** is `#B3A369` — used for current-status highlights and education accents
- **JetBrains Mono** (`font-mono`) is used for code blocks, tags, and technical labels
- **No backend, no auth, no DB** — keep the site static; avoid adding server actions or API routes unless the scope changes significantly

## Self-Improvement Rule

Whenever you make progress, fix a bug, discover an architectural detail, or receive a correction, update this file.

- If a lesson applies globally, update this file.
- If a lesson applies to a specific directory, add a `skills.md` there.
- If a lesson applies to a reusable workflow, update the relevant global skill.
- Write specific rules, not vague reminders.
