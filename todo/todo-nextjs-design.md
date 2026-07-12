---
Parent: "[[todo-master|Master ToDo]]"
status: active
---
---
# ROKT: Next.js Site Design & Scaffolding TODO

Reference: colors and page structure derived from `brain/rokt-home-page-mockup.svg` and live site at https://roots-of-knowledge.com/. Visual tone: warm, community-focused, approachable.

> **2026-07-06 redesign update:** Header, Footer, Home, and About were rebuilt from the Claude-Design handoff in `brain/redesign-handoff/` (supersedes the earlier hand-built versions). Checkboxes below are updated to match; some completed items were re-approached (e.g. active nav = underline not green pill; fonts = Lora + Source Sans 3). Fonts, `HoverLink` refactor, and Carol's real photo landed this session. See `MEMORY.md` (2026-07-06) and commits `91acb5f`/`099f6d2`/`8ec871b`. **Next page: Donate.**

---

## 0. Go-Live Roadmap (added 2026-07-06)

Ordered path to launching the redesigned site. Strategy: finish the core pages, soft-launch with only completed pages visible in nav, then finish the rest and unhide them.

### Build & fix (before soft launch)
- [x] Build the **Donate** page (see § 3g below) — last core page needed for launch ✅ 2026-07-11
- [x] Add Home "In Person" stock photo — Pexels #8342266 (tutor reading with boy + mom in a library, Geoff's pick) → `public/home-tutoring-in-person.jpg` ✅ 2026-07-11
- [x] Add Home "Virtual" stock photo — Pexels #5905688 (boy in live video session with tutor on laptop) → `public/home-tutoring-virtual.jpg` ✅ 2026-07-11
- [ ] QA: make sure **all buttons/links work** and go to the correct pages ⏫
- [ ] **Hide the Programs, Enroll, Impact, and Volunteer nav links** (Header § 2b) so the site can go live with only finished pages ⏫

### Soft launch
- [ ] Let **Carol review** the current version (https://roots-of-knowledge.pages.dev/) ⏫
- [ ] After Carol's review: decide which Donate payment elements stay visible (Stripe card section; Cash App/Venmo/PayPal/Square tap cards) and hide the unconfirmed ones — remove entries from `tapMethods` in `donate/DonateMethods.tsx` / drop `<CardGiving />` 🔼
- [ ] **Transfer the domain** (`roots-of-knowledge.com`) from WordPress.com to the Cloudflare Pages site ⏫ — see also `todo-nextjs-migration.md`
- [ ] **Let Carol know** the new redesign is ready/live 🔼

### After launch — finish remaining pages, then unhide their nav links
- [ ] Finish the **Programs** page (§ 3c) 🔼
- [ ] Finish the **Enroll** page (§ 3d) 🔼
- [ ] Finish the **Impact** page (§ 3e) 🔼
- [ ] Finish the **Volunteer** page (§ 3f) 🔽

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
- [x] ~~Centering behavior via `margin: auto` wrapper~~ — **removed 2026-07-06**: the vertical-centering wrapper only suited the old single-screen home; the redesigned multi-section pages flow from the top. `layout.tsx` now just `<main style={{ flex: 1 }}>`.
- [ ] Add metadata: `title`, `description`, `og:image` (Carol's logo from `docs/`) — partial: `/about` has `title`+`description` (2026-07-06); home/layout still the create-next-app placeholder, `og:image` TODO
- [ ] Create `code/app/layout.tsx.md` sidecar file

### 2b. Header (`code/components/Header.tsx`)
- [x] Background: `rokt-dark` (`#6B4A2B`) ✅ 2026-06-21
- [x] Logo: ROKT logo image copied to `code/public/`, displayed in header linking to `/` ✅ 2026-06-22
- [x] Nav links: About, Programs, Enroll, Impact, Volunteer, Donate — text `rokt-header-font` (= `rokt-light` #fdf6ec, named separately for flexibility) ✅ 2026-06-21
- [x] "Roots of Knowledge Tutoring" site title links to `/` ✅ 2026-06-21
- [x] Active page nav item: **underline** (`text-underline-offset: 4px`) ✅ 2026-07-06 — redesign replaced the old green-pill active state
- [x] Hover: **green background tint** `rgba(61,122,69,0.3)` ✅ 2026-07-06 — redesign replaced the old pop-out/scale animation
- [x] Sticky header (stays at top on scroll) ✅ 2026-06-21
- [x] "Donate" nav link: filled **green pill** CTA (`rokt-accent`, radius 999px) ✅ 2026-07-06
- [x] Logo lockup: two-line "Roots of Knowledge / TUTORING" wordmark (Lora + Source Sans 3); nav + Donate at 1.2rem ✅ 2026-07-06
- [ ] Mobile: hamburger menu (collapsible nav) — use `useState` for open/close — **still TODO** (nav doesn't yet collapse on narrow screens)
- [ ] Create `code/components/Header.tsx.md` sidecar file

### 2c. Footer (`code/components/Footer.tsx`)
- [x] Background: `rokt-dark` (`#6B4A2B`) ✅ 2026-06-21
- [x] Text color: `rokt-footer-font` (#fdf6ec, named separately from rokt-light for flexibility) ✅ 2026-06-21
- [x] Content: copyright line, contact email, Facebook + X placeholder icons ✅ 2026-06-21
- [ ] Nav echo: abbreviated set of links (About, Donate, Enroll) — deferred
- [x] Footer social icons: official brand marks — Facebook white "f" on `#1877F2`; **X white glyph on black** (X rebrand, replaces the old "Twitter blue #1DA1F2" plan) ✅ 2026-07-06
- [ ] Update social URLs when Carol confirms (still `href="#"` placeholders)
- [ ] Create `code/components/Footer.tsx.md` sidecar file

### 2d. Page Content Wrapper
- [ ] Decide: use a shared `<PageShell>` component or handle per-page with Tailwind `max-w-*` / `mx-auto` / `px-*` — **recommendation: shared component, one source of truth for content width**
- [ ] If using shared component: create `code/components/PageShell.tsx` + sidecar `.md`
- [ ] Standard content width: `max-w-5xl mx-auto px-6` (adjust once visual testing begins)

---

## 3. Pages

### 3a. Home (`code/app/page.tsx`)
- [x] Hero section: full logo centered, Lora subheadline, two pill CTAs (Get Help for Your Child → `/enroll`, Support Our Work → `/donate`) ✅ 2026-07-06 (rebuilt in redesign)
- [x] Mission band: eyebrow + Lora mission statement + "close gaps · confidence · empower families" line ✅ 2026-07-06
- [x] How We Work section: In Person + Virtual cards (striped photo *placeholders* until real photos), "See how our programs work" CTA ✅ 2026-07-06
- [x] Be Part of It section: three numbered cards → Enroll / Donate / Volunteer (design's "cards" variant) ✅ 2026-07-06
- [x] Swap How We Work striped photo placeholders for real photos — Pexels stock photos added (see § 0) ✅ 2026-07-11
- [ ] Create `code/app/page.tsx.md` sidecar file

### 3b. About (`code/app/about/page.tsx`) — ✅ built 2026-07-06
- [x] Intro band + Founder Story ("Our Story" ×4 paras) + Mission & Vision cards + Core Values 2×2 + CTA band ✅ 2026-07-06
- [x] Photo of Carol — she provided it → `public/carol-bluee.jpg` (sticky founder column, capped 320×400, face-focused `object-position`) ✅ 2026-07-06
- [ ] Swap in a higher-res / portrait-oriented photo of Carol if she sends one (current is 290×297, near-square — upscaled + side-cropped)
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

### 3g. Donate (`code/app/donate/page.tsx`) — ✅ built 2026-07-11; design spec in `brain/redesign-handoff/` (`Donate Page.dc.html` + README §5)
- [x] Heading: eyebrow "Support Our Work" + Lora H1 "Every gift helps a child find their words" (not "Donate" — per nav language rule in CLAUDE.md) ✅ 2026-07-11
- [x] Intro copy: handoff's final copy ("Your support puts a caring tutor and the right books…") ✅ 2026-07-11
- [x] Payment methods — all additive, none replace the others:
  - [x] Zelle (confirmed live) — dark card, phone + email + memo ✅ 2026-07-11
  - [x] Cash App (confirmed live) — "Give in a tap" card (coming-soon modal for now; note: it actually works via the Zelle phone number today — decide with Carol whether the tap card should show that instead) ✅ 2026-07-11
  - [x] Mailed check (confirmed live) — dark card, payable-to + call for address ✅ 2026-07-11
  - [x] Stripe card donations — `donate/CardGiving.tsx`, visible, opens coming-soon modal until the real checkout URL exists ✅ 2026-07-11
  - [x] Venmo / PayPal / Square — "Give in a tap" cards with PayIcon badges (`components/PayIcon.tsx`) + shared coming-soon modal (`donate/DonateMethods.tsx`), per Geoff 2026-07-11: build everything design-faithful now, curate visibility after Carol's demo ✅ 2026-07-11
- [x] Giving levels: one-time ($25, $50, $100, Other) and monthly ($30/mo, $60/mo, Other) — interactive `GiftChooser.tsx` with impact line per the handoff ✅ 2026-07-11
- [ ] Create `code/app/donate/page.tsx.md` sidecar file

---

## 4. Shared / Utility Components (plan ahead, build later)

- [ ] `code/components/Button.tsx` — reusable button (filled vs. outline variants, rokt-dark/rokt-light colors) + sidecar `.md`
- [ ] `code/components/Card.tsx` — reusable card shell used on Home "Be Part of It" and Programs page + sidecar `.md`
- [ ] `code/components/SectionHeading.tsx` — consistent `<h2>` styling across sections + sidecar `.md`

---

## 5. CSS / Styling Decisions (pending)

- [ ] Decide: component library or hand-built? (deferred from migration todo item 2) — recommended: hand-built with Tailwind for a site this size; revisit if forms become complex
- [x] Fonts: **Lora** (headings + header wordmark) + **Source Sans 3** (body/nav/buttons) via `next/font/google`, exposed as CSS vars `--font-lora` / `--font-source-sans` ✅ 2026-07-06 (per redesign handoff; replaces the earlier Georgia idea)
- [ ] Flip global `body` font-family to Source Sans 3 in `globals.css` (currently still Arial; home/about set it per-wrapper)
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
- [x] Move Carol's logo from `docs/` into `code/public/` when ready to use it in the app ✅ 2026-06-22
