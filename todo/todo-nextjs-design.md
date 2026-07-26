---
Parent: "[[todo-master|Master ToDo]]"
status: active
---
---
# ROKT: Next.js Site Design & Scaffolding TODO

Reference: colors and page structure derived from `brain/rokt-home-page-mockup.svg` and live site at https://roots-of-knowledge.com/. Visual tone: warm, community-focused, approachable.

> **2026-07-06 redesign update:** Header, Footer, Home, and About were rebuilt from the Claude-Design handoff in `brain/redesign-handoff/` (supersedes the earlier hand-built versions). Checkboxes below are updated to match; some completed items were re-approached (e.g. active nav = underline not green pill; fonts = Lora + Source Sans 3). Fonts, `HoverLink` refactor, and Carol's real photo landed this session. See `MEMORY.md` (2026-07-06) and commits `91acb5f`/`099f6d2`/`8ec871b`.

> **2026-07-23 / 2026-07-26 — Carol's feedback rounds 1 and 2** (`Webchanges.docx` + her emailed answers), commits `9b05ded` and `b38ca6b`. Four things to know before editing anything below:
> - **`/donate` is now `/sponsorship`** — route renamed, all references in this file updated. ROKT is an LLC, so donation language became sponsorship language site-wide; the **nav language rule in `CLAUDE.md` is superseded**. Old links are covered by a 301 in `code/public/_redirects` (Next's `redirects()` does nothing in a static export — it must live at the Cloudflare level).
> - **Eyebrow labels are now shared** in `code/lib/typography.ts` at `1.25rem` (was `0.85rem`, copy-pasted into six files). Carol's "headers should be larger" note was about these labels, not the Lora headings. **Don't redeclare `eyebrow` locally — import it.**
> - **No user-visible gift/give/donation wording anywhere.** Carol: "the language should be consistent throughout the website." **Two deliberate exceptions — leave them alone:** the Home *Virtual* card's "sessions **give** your child the same caring, focused instruction" (ordinary sense of the word, not contributing), and the volunteer callout "Share your time, not just a sponsorship" (about time, not money).
> - **"Free" is always qualified** as "free to qualifying families" wherever the site is offering tutoring to a prospective parent — children are vetted and selected by ROKT.
> See `MEMORY.md` (2026-07-23, 2026-07-26) for the full breakdown.

---

## 0. Go-Live Roadmap (added 2026-07-06)

Ordered path to launching the redesigned site. **Strategy change (2026-07-12):** instead of hiding unfinished pages from nav, all 5 nav pages are live — Enroll/Impact/Volunteer ship as **contact-first placeholders** (`components/PlaceholderPage.tsx`) so every nav link and CTA resolves to a real page with working email/phone contact. No dead links, no "Coming Soon" stubs. Full designs for those three come after launch.

### Build & fix (before soft launch)
- [x] Build the **Donate** page (see § 3g below) — last core page needed for launch ✅ 2026-07-11
- [x] Add Home "In Person" stock photo — Pexels #8342266 (tutor reading with boy + mom in a library, Geoff's pick) → `public/home-tutoring-in-person.jpg` ✅ 2026-07-11
- [x] Add Home "Virtual" stock photo — Pexels #5905688 (boy in live video session with tutor on laptop) → `public/home-tutoring-virtual.jpg` ✅ 2026-07-11
- [x] **Placeholder pages for Enroll / Impact / Volunteer** — shared `PlaceholderPage` component: intro + "Reach out" card with Email Us (mailto + prefilled subject) and Call buttons ✅ 2026-07-12. Resolves the previously-accepted `/enroll` and `/volunteer` dead links — those CTAs now land on real contact pages.
- [x] **All nav links live** (Header § 2b) — reverted the hide-the-links plan; Enroll/Impact/Volunteer are placeholders, not hidden ✅ 2026-07-12
- [ ] QA: with the placeholders in place there are **no known dead links** — re-verify all buttons/links resolve correctly before launch ⏫
- [x] Commit + push this session's work (Programs, placeholders, footer popup, Donate callout) — commit `bd24b72`, pushed to `main`; Cloudflare auto-deployed live to https://roots-of-knowledge.pages.dev/ ✅ 2026-07-12. (Push also swept up 3 earlier local-only commits: `06f7a25` Donate, `7b6877c` photos, `37f82bd` divider.)

### Carol feedback round 1 (2026-07-23)
- [x] Implement everything in `Webchanges.docx` — Home, About, Programs, Enroll, Impact/Volunteer header sizes, and the donation → sponsorship rename ✅ 2026-07-23 (commit `9b05ded`)
- [x] Push to `main` ✅ 2026-07-23 — Cloudflare auto-deployed to https://roots-of-knowledge.pages.dev/
- [x] **Reply to Carol** ✅ 2026-07-23 — covered the `.pages.dev` vs `roots-of-knowledge.com` distinction, offered the domain cutover, and asked three questions
- [ ] Re-run the dead-link QA below now that `/donate` → `/sponsorship` 🔼

### Carol feedback round 2 (2026-07-26) — commit `b38ca6b`
Her answers to the three questions from the round-1 reply:
- [x] **"The home page should match"** — Home hero, mission band, and enroll card now say "free to qualifying families" / "reach out to see if your child qualifies", matching Programs and Enroll. Also applied to the Programs and Enroll meta descriptions ✅ 2026-07-26
- [x] **"The language should be consistent throughout the website"** — all ~39 gift/give/giving instances reworded to sponsorship language ✅ 2026-07-26. Supersedes the "decide with Carol" item in §3g.
- [x] Fixed home page metadata, which was still `title: "Create Next App"` / `description: "Generated by create next app"` in `app/layout.tsx` — that *was* the home page's browser tab and Google result ✅ 2026-07-26 (closes the home half of the §2a metadata item)
- [x] Fixed a pre-existing JSX whitespace bug in the coming-soon modal ("mailed check**—** see" with no space). **JSX drops the space between `</strong>` and a following `&mdash;`** — the same pattern may exist elsewhere ✅ 2026-07-26
- [ ] **Unanswered by Carol:** should the live WordPress site's "Donate" wording be updated in the meantime? Likely moot if the cutover happens soon — see `todo-phase-a-website.md` 🔽
- [ ] **Visual check:** the Home hero grew from 2 lines to 3 with the added "— free to qualifying families", leaving the CTA buttons only **22px** above the fold at a 720px-tall viewport. Not broken, but on a shorter laptop window "Get Help for Your Child" could drop below the fold 🔼

### ⚠️ Handoff to Carol (opened 2026-07-26)
Carol: *"After you deploy the changes, I am now in the position to takeover."* **She is expecting WordPress-style editing, which this site does not have** — no admin login, no visual editor; it's a Next.js codebase in GitHub deploying through Cloudflare. Geoff moved this to a phone call rather than explaining in writing.
- [ ] **Call Carol to scope what "take over" means** ⏫ — how hands-on does she actually want to be? Editing copy herself, or requesting changes?
- [ ] **Decide and install a Git-based CMS (Decap or TinaCMS)** ⏫ — always the planned answer at handoff (see `CLAUDE.md` Phase B); now urgent rather than theoretical. Gives Carol a login and a visual editor that commits to the repo.
- [ ] Write a short plain-English guide for whatever she ends up using 🔼
- [ ] Decide what happens to the Cloudflare account — it is already under **Carol's email** (`Rootsofknowledgetutor@gmail.com`, see `MEMORY.md` 2026-07-06), which helps; the GitHub repo is under Geoff's `sivhold` account, which does not 🔼

### Soft launch
- [ ] Let **Carol review** the current version (https://roots-of-knowledge.pages.dev/) — **review email drafted 2026-07-12** (asks her to review + note feedback; proposes a Mon/Wed call, Geoff available after 3pm PT). Pending: Geoff sends it → Carol reviews → feedback. This email also covers the "let Carol know it's ready" item below. ⏫ — **partially overtaken 2026-07-23:** Carol has already given written feedback (`Webchanges.docx`), so this is now about the *next* review round.
- [ ] After Carol's review: decide which Donate payment elements stay visible (Stripe card section; Cash App/Venmo/PayPal/Square tap cards) and hide the unconfirmed ones — remove entries from `tapMethods` in `sponsorship/DonateMethods.tsx` / drop `<CardGiving />` 🔼
- [ ] **Transfer the domain** (`roots-of-knowledge.com`) from WordPress.com to the Cloudflare Pages site ⏫ — see also `todo-nextjs-migration.md`. **Proposed to Carol in the 2026-07-12 review email** ("switch it over once you're happy with it") — pending her approval after review.
- [x] **Let Carol know** the new redesign is ready/live ✅ 2026-07-12 — folded into the review email above (drafted; send pending)

### After launch — replace the 3 placeholders with proper full-design pages
Each of Enroll / Impact / Volunteer currently renders the shared `PlaceholderPage` (contact-first). Replace with a real design (drop the `PlaceholderPage` import in that route's `page.tsx`).
- [x] Finish the **Programs** page (§ 3c) ✅ 2026-07-12 (built pre-launch; nav link live)
- [ ] Finish the **Enroll** page with a proper design (§ 3d) 🔼 — replace placeholder; decide form vs. email (see `docs/rokt-regform.docx` for source material)
- [ ] Finish the **Impact** page with a proper design (§ 3e) 🔼 — replace placeholder; **blocked on Carol** for real stats/testimonials/outcomes
- [ ] Finish the **Volunteer** page with a proper design (§ 3f) 🔽 — replace placeholder; tutor role details + requirements

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
- [ ] Add metadata: `title`, `description`, `og:image` (Carol's logo from `docs/`) — **`title`/`description` now done on every route** (`/about` 2026-07-06; the rest through 2026-07-12; **layout/home 2026-07-26**, replacing the create-next-app placeholder that was serving as the home page's tab title and Google result). **`og:image` still TODO** — links shared to Facebook/text still preview with no image 🔼
- [ ] Create `code/app/layout.tsx.md` sidecar file

### 2b. Header (`code/components/Header.tsx`)
- [x] Background: `rokt-dark` (`#6B4A2B`) ✅ 2026-06-21
- [x] Logo: ROKT logo image copied to `code/public/`, displayed in header linking to `/` ✅ 2026-06-22
- [x] Nav links: About, Programs, Enroll, Impact, Volunteer, **Sponsorship** — text `rokt-header-font` (= `rokt-light` #fdf6ec, named separately for flexibility) ✅ 2026-06-21; green pill relabelled Donate → Sponsorship and repointed to `/sponsorship` ✅ 2026-07-23
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
- [x] Social icons open a **coming-soon popup** instead of dead `href="#"` links — Footer is now a client component; icons are `<button>`s that open a per-network modal ("We're not on Facebook/X quite yet") pointing to the contact email; same scrim/card/Escape-dismiss pattern as the Donate modal ✅ 2026-07-12
- [ ] **Make the Facebook + X links work as real links** ⏫ — once Carol provides the real URLs, replace the `<button>` + modal in `Footer.tsx` with plain `<a href>` links (open in new tab) and delete the popup
- [ ] Create `code/components/Footer.tsx.md` sidecar file

### 2d. Page Content Wrapper
- [ ] Decide: use a shared `<PageShell>` component or handle per-page with Tailwind `max-w-*` / `mx-auto` / `px-*` — **recommendation: shared component, one source of truth for content width**
- [ ] If using shared component: create `code/components/PageShell.tsx` + sidecar `.md`
- [ ] Standard content width: `max-w-5xl mx-auto px-6` (adjust once visual testing begins)

---

## 3. Pages

### 3a. Home (`code/app/page.tsx`)
- [x] Hero section: full logo centered, Lora subheadline, two pill CTAs (Get Help for Your Child → `/enroll`, Support Our Work → `/sponsorship`) ✅ 2026-07-06 (rebuilt in redesign)
- [x] Mission band: eyebrow + Lora mission statement + "close gaps · confidence · empower families" line ✅ 2026-07-06
- [x] How We Work section: In Person + Virtual cards (striped photo *placeholders* until real photos), "See how our programs work" CTA ✅ 2026-07-06
- [x] Be Part of It section: three numbered cards → Enroll / Donate / Volunteer (design's "cards" variant) ✅ 2026-07-06
- [x] Swap How We Work striped photo placeholders for real photos — Pexels stock photos added (see § 0) ✅ 2026-07-11
- [x] **Carol 2026-07-23:** removed "Choose what fits your family best…" from How We Work (ROKT decides the format per student, not the family); "Be Part of It" card 2 relabelled Donate → **Sponsorship** ✅ 2026-07-23
- [x] **Fix (2026-07-23):** How We Work headline was orphaning the word "are" — needs ~782px on one line but its block was capped at 720px. Widened **that block only** to 800px + `text-wrap: balance`. Note this is a one-off; every other section on the page uses 720px ✅ 2026-07-23
- [ ] **Visual check needed:** with Carol's sentence removed, the How We Work block is now headline-only above the three cards — no body copy. Confirm it doesn't read as too bare, or ask Carol for replacement copy that keeps the agency with ROKT 🔽
- [x] **Home "free" language now qualified** ✅ 2026-07-26 — Carol: "the home page should match." Hero reads "…across Los Angeles County &mdash; free to qualifying families"; mission band and enroll card follow; enroll card CTA copy changed from "Reserve your child's spot today" to "Reach out to see if your child qualifies."
- [ ] Create `code/app/page.tsx.md` sidecar file

### 3b. About (`code/app/about/page.tsx`) — ✅ built 2026-07-06
- [x] Intro band + Founder Story ("Our Story" ×4 paras) + Mission & Vision cards + Core Values 2×2 + CTA band ✅ 2026-07-06
- [x] Photo of Carol — she provided it → `public/carol-bluee.jpg` (sticky founder column, capped 320×400, face-focused `object-position`) ✅ 2026-07-06
- [ ] Swap in a higher-res / portrait-oriented photo of Carol if she sends one (current is 290×297, near-square — upscaled + side-cropped)
- [x] **Carol 2026-07-23:** grammar fix in the mission card ("culturally responsive, **and** high-quality tutoring"); removed the intro headline "Roots strong enough to hold every reader"; restored her verbatim "Statistics show that many students…" sentence — this **replaced** the existing paraphrase of it rather than being appended, since both would have said the same thing back to back ✅ 2026-07-23
- [x] **"Our Story" promoted `h2` → `h1`** — removing Carol's intro headline left the page with no `h1` at all, which hurts SEO and screen-reader navigation. Styling is inline so nothing moved visually ✅ 2026-07-23
- [ ] **Visual check needed:** the intro band is now just the eyebrow + a one-sentence blurb (~155px tall), with padding that was tuned for a 3rem headline sitting between them. May want more breathing room 🔽
- [ ] Create `code/app/about/page.tsx.md` sidecar file

### 3c. Programs (`code/app/programs/page.tsx`) — ✅ built 2026-07-12
- [x] Content: describe tutoring programs — grades K–5, reading focus, evidence-based methods, culturally responsive ✅ 2026-07-12 — copy adapted from Carol's flyer services list (`brain/page-designs-and-copy.md` § Source Material); flyer's "small-group and one-on-one tutoring" item lives in the formats section, not the services grid, to avoid repeating it
- [x] Format: 4 sections — gradient intro band · "What We Teach" (4 sienna cards on amber) · "How Tutoring Happens" (4 white format cards: In Person / Virtual / Small Group / One-on-One) · dark CTA band (Enroll Your Child → `/enroll` + Support Our Work → `/sponsorship`) ✅ 2026-07-12
- [x] **Carol 2026-07-23:** "always free for families" → "**free to qualifying families**" — most children will be vetted and chosen by ROKT ✅ 2026-07-23
- [ ] Create `code/app/programs/page.tsx.md` sidecar file

### 3d. Enroll (`code/app/enroll/page.tsx`) — ⏳ placeholder shipped 2026-07-12
- [x] Contact-first placeholder via `PlaceholderPage` (title "Let's get your child started", Email Us + Call buttons) ✅ 2026-07-12
- [ ] **Replace placeholder with proper design** 🔼 — enrollment instructions, eligibility (K–5, LA County underserved communities, free of charge)
- [x] **Carol 2026-07-23:** blurb now ends "reach out today **to see if your child qualifies**" (her struck clause "and we'll get your child on the path to confident reading" removed) ✅ 2026-07-23
- [ ] Action: contact form or link to email (`rootsofknowledgetutor@gmail.com`) — TBD which approach Carol prefers
- [ ] Create `code/app/enroll/page.tsx.md` sidecar file

### 3e. Impact (`code/app/impact/page.tsx`) — ⏳ placeholder shipped 2026-07-12
- [x] Contact-first placeholder via `PlaceholderPage` (title "Young readers, growing every week") ✅ 2026-07-12
- [ ] **Replace placeholder with proper design** 🔼 — stats, testimonials, outcomes; **blocked on Carol** for real data
- [ ] Create `code/app/impact/page.tsx.md` sidecar file

### 3f. Volunteer (`code/app/volunteer/page.tsx`) — ⏳ placeholder shipped 2026-07-12
- [x] Contact-first placeholder via `PlaceholderPage` (title "Become a tutor. Change a story.") ✅ 2026-07-12
- [ ] **Replace placeholder with proper design** 🔽 — how to volunteer, what tutors do, requirements (if any)
- [ ] Action: contact form or email link
- [ ] Create `code/app/volunteer/page.tsx.md` sidecar file

### 3g. Sponsorship (`code/app/sponsorship/page.tsx`) — ✅ built 2026-07-11 as Donate; **renamed to Sponsorship 2026-07-23**; design spec in `brain/redesign-handoff/` (`Donate Page.dc.html` + README §5)
- [x] Heading: eyebrow "Support Our Work" + Lora H1 "Every gift helps a child find their words" ✅ 2026-07-11
- [x] Intro copy: handoff's final copy ("Your support puts a caring tutor and the right books…") ✅ 2026-07-11
- [x] Payment methods — all additive, none replace the others:
  - [x] Zelle (confirmed live) — dark card, phone + email + memo ✅ 2026-07-11
  - [x] Cash App (confirmed live) — "Give in a tap" card (coming-soon modal for now; note: it actually works via the Zelle phone number today — decide with Carol whether the tap card should show that instead) ✅ 2026-07-11
  - [x] Mailed check (confirmed live) — dark card, payable-to + call for address ✅ 2026-07-11
  - [x] Stripe card donations — `sponsorship/CardGiving.tsx`, visible, opens coming-soon modal until the real checkout URL exists ✅ 2026-07-11
  - [x] Venmo / PayPal / Square — "Give in a tap" cards with PayIcon badges (`components/PayIcon.tsx`) + shared coming-soon modal (`sponsorship/DonateMethods.tsx`), per Geoff 2026-07-11: build everything design-faithful now, curate visibility after Carol's demo ✅ 2026-07-11
- [ ] **Make the credit-card button + the 4 pay-app buttons actually work** ⏫ — right now the Stripe "Donate with Card" button (`CardGiving.tsx`) and all 4 tap cards (Cash App / Venmo / PayPal / Square in `DonateMethods.tsx`) only open the coming-soon modal. Wire each confirmed method to its real destination (Stripe Payment Link; each app's real handle/deep link) once Carol provides them, and drop the modal for those. Depends on the "which methods stay visible" decision below + Carol's confirmations in "Waiting on Carol."
- [x] Giving levels: one-time ($25, $50, $100, Other) and monthly ($30/mo, $60/mo, Other) — interactive `GiftChooser.tsx` with impact line per the handoff ✅ 2026-07-11
- [x] Volunteer callout — amber closing band ("Give your time, not just a gift" → "Become a Tutor" button → `/volunteer`) ✅ 2026-07-12. **Decision (Geoff, 2026-07-12): "Support Our Work" spans giving money AND time.** Chose Option A: keep "Support Our Work" buttons → `/sponsorship`, and let the Donate page carry the volunteer path via this callout. (Options B "relabel buttons Donate + add Volunteer button" and C "/support hub page" were considered and declined.) Button 404s until `/volunteer` ships — swap is trivial, tracked in the QA note in §0.
- [ ] Create `code/app/sponsorship/page.tsx.md` sidecar file
- [x] **"gift"/"give" → sponsorship language** ✅ 2026-07-26 — Carol confirmed "the language should be consistent throughout the website." H1 is now "Every sponsorship helps a child find their words"; eyebrows are Choose your sponsorship / Ways to sponsor / Sponsor in a tap; toggle reads "One-time sponsorship"; impact lines, tap cards, and the modal all follow. The volunteer callout stays "Share your time, not just a sponsorship" (time, not money).
- [ ] **Rename the internal Donate-era identifiers** 🔽 — `DonateMethods.tsx`, `GiftChooser.tsx`, `CardGiving.tsx`, the `Donate()` function, and the `gift*` state variables in `GiftChooser` all still use the old vocabulary inside `app/sponsorship/`. Invisible to users (all user-facing copy is sponsorship language as of 2026-07-26); cosmetic cleanup for the portfolio repo.

---

## 4. Shared / Utility Components (plan ahead, build later)

- [x] `code/components/PlaceholderPage.tsx` — contact-first shell for Enroll/Impact/Volunteer until they get full designs (props: eyebrow, title, blurb, contactPrompt, emailSubject) ✅ 2026-07-12 — sidecar `.md` still TODO
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
