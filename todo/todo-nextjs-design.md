---
Parent: "[[todo-master|Master ToDo]]"
status: active
---
---
# ROKT: Next.js Site Design & Scaffolding TODO

Reference: colors and page structure derived from `brain/rokt-home-page-mockup.svg` and live site at https://roots-of-knowledge.com/. Visual tone: warm, community-focused, approachable.

---

## 1. Color System & Design Tokens

Note: project uses Tailwind v4 — color tokens go in `code/app/globals.css` via `@theme`, not `tailwind.config.ts`.

- [x] Add custom color tokens to `code/app/globals.css` inside `@theme` block ✅ 2026-06-21
  - [x] `rokt-dark`: `#6b4a2b` — deep brown (header bg, dark text on light) ✅ 2026-06-21
  - [x] `rokt-card`: `#9f7740` — warm sienna (card/box backgrounds) ✅ 2026-06-21
  - [x] `rokt-mid`: `#c58f41` — golden amber (hero/page background, accent) ✅ 2026-06-21
  - [x] `rokt-light`: `#fdf6ec` — warm cream (text on dark, light surfaces) ✅ 2026-06-21
  - [x] `rokt-accent`: `#3d7a45` — brand green (Donate button, CTAs, hover states, link underlines, focus rings) ✅ 2026-06-21
- [x] Set `body` base background to `rokt-mid`, text to `rokt-light` in globals.css ✅ 2026-06-21
- [x] Document color decisions in `brain/design-tokens.md` (why each color, where it's used) ✅ 2026-06-21
- [x] Verify colors render correctly by running `npm run dev` and checking a test page ✅ 2026-06-21

---

## 2. Global Layout

### 2a. Layout Wrapper (`code/app/layout.tsx`)
- [x] Set `<html>` background to `rokt-mid` (golden amber) as the base page color ✅ 2026-06-21
- [x] Set default text color to `rokt-light` for dark-background sections ✅ 2026-06-21
- [x] Import and render `<Header>` and `<Footer>` inside the root layout ✅ 2026-06-21
- [x] Centering behavior: short pages center vertically between header/footer; tall pages align top and scroll — handled via `margin: auto` wrapper + `flex: 1` chain ✅ 2026-06-21
- [ ] Add metadata: `title`, `description`, `og:image` (Carol's logo from `docs/`)
- [ ] Create `code/app/layout.tsx.md` sidecar file

### 2b. Header (`code/components/Header.tsx`)
- [x] Background: `rokt-dark` (`#6B4A2B`) ✅ 2026-06-21
- [ ] Logo: ROKT logo image (from `docs/`) — link wraps logo, goes to `/` (text placeholder for now)
- [x] Nav links: About, Programs, Enroll, Impact, Volunteer, Donate — text `rokt-header-font` (= `rokt-light` #fdf6ec, named separately for flexibility) ✅ 2026-06-21
- [x] "Roots of Knowledge Tutoring" site title links to `/` ✅ 2026-06-21
- [x] Active page nav item: `rokt-accent` green background pill ✅ 2026-06-21
- [x] Hover: pop-out animation (translateY -3px + scale 1.06 + shadow) ✅ 2026-06-21
- [x] Sticky header (stays at top on scroll) ✅ 2026-06-21
- [ ] "Donate" nav link: consider filled button treatment (currently plain link matching live site — revisit)
- [ ] Mobile: hamburger menu (collapsible nav) — use `useState` for open/close
- [ ] Create `code/components/Header.tsx.md` sidecar file

### 2c. Footer (`code/components/Footer.tsx`)
- [x] Background: `rokt-dark` (`#6B4A2B`) ✅ 2026-06-21
- [x] Text color: `rokt-footer-font` (#fdf6ec, named separately from rokt-light for flexibility) ✅ 2026-06-21
- [x] Content: copyright line, contact email, Facebook + Twitter placeholder icons ✅ 2026-06-21
- [ ] Nav echo: abbreviated set of links (About, Donate, Enroll) — deferred
- [ ] Fix footer social icons: Facebook icon → blue (`#1877F2`), Twitter/X icon → blue (`#1DA1F2`); wire up real URLs when Carol confirms (placeholder `#` for now)
- [ ] Update social URLs when Carol confirms
- [ ] Create `code/components/Footer.tsx.md` sidecar file

### 2d. Page Content Wrapper
- [ ] Decide: use a shared `<PageShell>` component or handle per-page with Tailwind `max-w-*` / `mx-auto` / `px-*` — **recommendation: shared component, one source of truth for content width**
- [ ] If using shared component: create `code/components/PageShell.tsx` + sidecar `.md`
- [ ] Standard content width: `max-w-5xl mx-auto px-6` (adjust once visual testing begins)

---

## 3. Pages

### 3a. Home (`code/app/page.tsx`)
- [ ] Hero section: logo centered, headline "Tutoring Sprinkled With Love" (italic serif), subheadline, two CTA buttons (Get Help → `/enroll`, Support Our Work → `/donate`)
- [ ] Mission section: tinted band, 3–4 sentence mission statement
- [ ] How We Work section: brief description of in-person + virtual tutoring
- [ ] Be Part of It section: three audience cards (Get Help for Your Child → Enroll, Volunteer → Volunteer, Support Our Work → Donate)
- [ ] Create `code/app/page.tsx.md` sidecar file

### 3b. About (`code/app/about/page.tsx`)
- [ ] Sections: Founding Story (Carol's background), Mission Statement, Vision Statement, Core Values (4 principles)
- [ ] Optional: photo of Carol (pending Carol providing one)
- [ ] Create `code/app/about/page.tsx.md` sidecar file

### 3c. Programs (`code/app/programs/page.tsx`)
- [ ] Content: describe tutoring programs — grades K–5, reading focus, evidence-based methods, culturally responsive
- [ ] Format: likely cards or a feature list per program type (in-person / virtual / one-on-one / small group)
- [ ] Create `code/app/programs/page.tsx.md` sidecar file

### 3d. Enroll (`code/app/enroll/page.tsx`)
- [ ] Content: enrollment instructions, eligibility (K–5, LA County underserved communities, free of charge)
- [ ] Action: contact form or link to email (`rootsofknowledgetutor@gmail.com`) — TBD which approach Carol prefers
- [ ] Create `code/app/enroll/page.tsx.md` sidecar file

### 3e. Impact (`code/app/impact/page.tsx`)
- [ ] Content: stats, testimonials, outcomes — placeholder until Carol provides real data
- [ ] Create `code/app/impact/page.tsx.md` sidecar file

### 3f. Volunteer (`code/app/volunteer/page.tsx`)
- [ ] Content: how to volunteer, what tutors do, requirements (if any)
- [ ] Action: contact form or email link
- [ ] Create `code/app/volunteer/page.tsx.md` sidecar file

### 3g. Donate (`code/app/donate/page.tsx`)
- [ ] Heading: "Support Our Work" (not "Donate" — per nav language rule in CLAUDE.md)
- [ ] Intro copy: "Every child deserves to read with confidence…"
- [ ] Payment methods — all additive, none replace the others:
  - [ ] Zelle (confirmed live)
  - [ ] Cash App (confirmed live)
  - [ ] Mailed check (confirmed live)
  - [ ] Stripe card donations — placeholder only until Carol confirms
  - [ ] Venmo — placeholder until Carol provides handle
- [ ] Giving levels: one-time ($25, $50, $100, custom) and monthly ($30/mo, $60/mo)
- [ ] Create `code/app/donate/page.tsx.md` sidecar file

---

## 4. Shared / Utility Components (plan ahead, build later)

- [ ] `code/components/Button.tsx` — reusable button (filled vs. outline variants, rokt-dark/rokt-light colors) + sidecar `.md`
- [ ] `code/components/Card.tsx` — reusable card shell used on Home "Be Part of It" and Programs page + sidecar `.md`
- [ ] `code/components/SectionHeading.tsx` — consistent `<h2>` styling across sections + sidecar `.md`

---

## 5. CSS / Styling Decisions (pending)

- [ ] Decide: component library or hand-built? (deferred from migration todo item 2) — recommended: hand-built with Tailwind for a site this size; revisit if forms become complex
- [ ] Decide: serif font for headings (the mockup uses Georgia) — add via `next/font` or Google Fonts
- [ ] Add font decision to `brain/design-tokens.md`

---

## 6. Sidecar `.md` Files — Remaining Code Files

- [ ] `code/app/globals.css.md`
- [ ] `code/app/layout.tsx.md` (listed above but tracked here for completeness)
- [ ] `code/app/globals.css.md` (note: Tailwind v4 — tokens live here, not tailwind.config.ts)
- [ ] `code/next.config.ts.md` (note: static export config lives here)
- [ ] Go through each sidecar `.md` file one by one and fill in purpose, key decisions, and any gotchas

---

## 7. Pre-Build Checklist (before coding any component)

- [x] Confirm `code/next.config.ts` has `output: "export"` set ✅ 2026-06-21
- [x] Confirm `npm run build` produces `out/` without errors ✅ 2026-06-21 — clean build, `index.html` confirmed in `out/`
- [x] Agree on folder structure (`app/`, `components/`, `public/`) — confirmed via `create-next-app` defaults ✅ 2026-06-21
- [ ] Move Carol's logo from `docs/` into `code/public/` when ready to use it in the app
