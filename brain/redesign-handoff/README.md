# Handoff: ROKT Header, Footer, Home, About Us & Donate Redesign

## Overview
This package hands off redesigned Header, Footer, Home, About Us, and Donate
experiences for the Roots of Knowledge Tutoring (ROKT) website, plus the
payment-method icon badges used on the Donate page. It replaces the current,
much simpler `Header.tsx` / `Footer.tsx` / `app/page.tsx` in the Next.js
codebase (`ROKT/code`) with the fuller designs described below, and adds new
`/about` and `/donate` routes that don't exist in the codebase yet.

## About the Design Files
The `.dc.html` files bundled in this folder are **design references built in
an internal prototyping tool** — not production code to copy line-for-line.
They render as plain HTML/CSS/inline-JS and use a custom templating syntax
(`{{ }}` holes, `<sc-if>`, `<sc-for>`, `<dc-import>`) that **does not exist in
a normal browser or in Next.js** — don't try to import or interpret those tags
literally. Treat them purely as a visual and behavioral spec.

**Task:** recreate these designs as real Next.js App Router components in
`ROKT/code`, using the project's existing conventions:
- Functional components, inline `style={{ }}` objects (see current
  `Header.tsx`/`Footer.tsx`) — the codebase does not use Tailwind classes for
  layout, only the CSS custom properties defined in `globals.css`.
- `next/image` for images, `next/link` for internal navigation,
  `usePathname()` (client component) for active-nav-link state — same pattern
  already used in `Header.tsx`.
- Colors must reference the existing CSS variables in
  `app/globals.css` (`var(--color-rokt-dark)` etc.), **not** hardcoded hex —
  the token names already match the palette below.
- New pages go in `app/about/page.tsx` and `app/donate/page.tsx`.
- Read `node_modules/next/dist/docs/` before writing — per `AGENTS.md`, this
  project's Next.js version has breaking API changes from training data.

## Fidelity
**High-fidelity.** Colors, type, spacing, and copy are final. Photo areas are
placeholders (striped pattern + monospace caption) — swap in real photos when
available; don't ship the striped placeholder to production.

---

## Design Tokens

### Colors
All already defined as CSS variables in `app/globals.css` — reuse them, don't
add new hex values.

| Token | Hex | Role |
|---|---|---|
| `--color-rokt-dark` | `#6b4a2b` | Header bg, footer bg, Core Values band, Zelle/Check cards |
| `--color-rokt-card` | `#9f7740` | Card backgrounds on amber bands (Mission/Vision, Be Part of It) |
| `--color-rokt-mid` | `#c58f41` | Mission band bg, Mission & Vision band bg |
| `--color-rokt-light` | `#fdf6ec` | Text on dark/amber, light section backgrounds |
| `--color-rokt-accent` | `#3d7a45` | CTA buttons, active nav pill, links, selected states, checkmarks |
| `--color-rokt-header-font` / `--color-rokt-footer-font` | `#fdf6ec` | Header/footer text (aliases of light) |

Additional hex values used only in these designs (not yet tokenized — consider
adding to `globals.css` if the developer agrees):
- `#4a3318` — dark heading text on cream backgrounds
- `#5a4a32` / `#5a3d1e` — body/secondary text on cream backgrounds
- `#3b2a14` — default body text color
- `#ead9bb` / `#e2d6bd` — hairline borders on cream
- `#f0e2c6` — pill-toggle track background (Donate page)
- Hero/intro gradient: `linear-gradient(180deg, #fdf6ec 0%, #f6e8cd 55%, #efdcb6 100%)`

### Typography
Two Google Fonts, loaded via `next/font/google` (the codebase currently only
uses Arial — add these):
- **Headings:** `Lora` — weights 500, 600, 700, plus italic 500. Serif, used
  for all `h1`/`h2`/`h3` and pull-quote style copy.
- **Body:** `Source Sans 3` — weights 400, 500, 600, 700. Used for all body
  copy, nav, and buttons.
- Fallback stack: `Georgia, serif` for Lora; `Arial, Helvetica, sans-serif`
  for Source Sans 3.

### Spacing / Shape
- Page max-width: `1280px` (header/nav), `1100px`–`1200px` (content sections).
- Section vertical padding: `4.5–5.5rem` desktop, side padding `2rem`.
- Card radius: `16px`. Pill buttons/badges: `999px` radius.
- Card shadow: `0 8–14px 24–32px rgba(107,74,43,0.08–0.18)` (warm brown, low
  opacity) — heavier `rgba(0,0,0,0.16–0.18)` shadow on cards sitting on the
  amber/dark bands.

---

## 1. Header

**File reference:** header markup is identical across `Home Page
Mockup.dc.html`, `About.dc.html`, and `Donate Page.dc.html` — see the
`<header>` block in any of them (line ~20 in each).

**Layout:** sticky (`position: sticky; top:0; z-index:50`), full-width bar,
background `--color-rokt-dark`, text `--color-rokt-header-font`. Inner
content max-width `1280px`, centered, `0 2rem` horizontal padding, `88px`
fixed height, flex row, `space-between`.

**Left — logo lockup:** links to `/`. Flex row, `gap: 0.85rem`, vertically
centered.
- Logo image `rokt-logo-full.png`, height `62px`, `object-fit: contain`.
- Wordmark next to it, two lines: "Roots of Knowledge" (Lora, 600, `1.25rem`,
  letter-spacing `0.02em`) then "TUTORING" (Source Sans 3, `0.8rem`,
  uppercase, letter-spacing `0.18em`, opacity `0.8`).

**Right — nav:** flex row, `gap: 0.4rem`, items vertically centered.
- Each link: `#fdf6ec`, `1.05rem`, padding `0.45rem 0.9rem`, radius `6px`.
- Hover: `background: rgba(61,122,69,0.3)`.
- **Active page** gets `text-decoration: underline; text-underline-offset:
  4px` instead of a hover background (see `About.dc.html`'s About link) — this
  replaces the current codebase's solid-accent-pill active state; use
  whichever the developer prefers but be consistent site-wide.
- **Donate** is visually distinct: pill shape (radius `999px`), background
  `--color-rokt-accent`, font-weight 600, `margin-left: 0.5rem`, extra
  horizontal padding `1.3rem`. Hover darkens to `#34693c`.
- Nav order: About · Programs · Enroll · Impact · Volunteer · **Donate**.

---

## 2. Footer

**File reference:** identical `<footer>` block across all three pages (bottom
of each file).

**Layout:** full-width bar, background `--color-rokt-dark`, text
`--color-rokt-footer-font`, padding `2.25rem 2rem`. Inner content max-width
`1200px`, centered, flex row, centered + wrapped, `gap: 1rem`, font-size
`1.05rem`.

**Content, left to right:**
1. `© 2026 Roots of Knowledge Tutoring.`
2. `•` separator at `opacity: 0.5`
3. `Contact: rootsofknowledgetutor@gmail.com` — the email is a `mailto:` link,
   underlined, `text-underline-offset: 3px`.

Note: the current `Footer.tsx` in the codebase also renders Facebook/X social
icons after a second `•` separator — those were **intentionally dropped** in
this redesign since real social URLs are still pending from Carol. Decide
with the developer whether to keep them (as `href="#"` placeholders) or
remove until real links exist.

---

## 3. Home Page

**File:** `Home Page Mockup.dc.html`. Route: `/` (replaces current
`app/page.tsx`).

Five stacked full-width sections, all `max-width` inner-content wrappers
centered:

1. **Hero** — gradient bg (see tokens above), centered column, `gap: 1.5rem`,
   padding `3rem 2rem 4rem`. Contents: full ROKT logo image (`340px` wide,
   centered), Lora `1.7rem` subheadline ("Free, culturally responsive reading
   instruction for children in underserved communities across Los Angeles
   County."), two pill CTAs side by side: solid green "Get Help for Your
   Child" → `/enroll`, outlined brown "Support Our Work" → `/donate`.

2. **Mission band** (toggleable section — see below) — background
   `--color-rokt-mid`, text `--color-rokt-light`, centered, padding `4rem
   2rem`, max-width `860px`. Eyebrow label "OUR MISSION" (uppercase,
   letter-spacing `0.22em`), Lora `1.85rem` mission paragraph, bold
   mid-weight line "We close literacy gaps · We strengthen academic
   confidence · We empower families".

3. **How We Work** — cream bg, padding `5rem 2rem`, max-width `1100px`.
   Centered intro (eyebrow + Lora `2.4rem` H2 "Tutoring that meets families
   where they are" + supporting paragraph), then a 2-column grid of two white
   cards (radius `16px`, border `1px solid #ead9bb`, shadow): "In Person" and
   "Virtual", each with a `200px`-tall striped photo placeholder on top and a
   Lora `1.55rem` heading (green, `#3d7a45`) + paragraph below. Closing
   centered CTA pill "See how our programs work →" (dark brown bg `#5a3d1e`).

4. **Be Part of It** — dark brown bg (`--color-rokt-dark`), cream text,
   padding `5rem 2rem`, max-width `1100px`. Centered intro (Lora `2.6rem` H2 +
   supporting line). Body has **two interchangeable layouts** driven by a
   prop (`bePartStyle`: `cards` | `buttons` — default `cards`):
   - *Cards* (default): 3-column grid, each card bg `--color-rokt-card`,
     radius `16px`, padding `2.25rem 1.85rem`, containing a numbered badge
     (1/2/3), Lora `1.5rem` heading, paragraph, and a green pill CTA button.
     Cards: "Enroll Your Child" → `/enroll`, "Donate" → `/donate`,
     "Volunteer" → `/volunteer`.
   - *Buttons*: 3 large equal-width pill buttons in a row, green bg, bold
     `1.3rem` text, same three destinations, no supporting copy.

5. **Footer** — see Footer section above.

**Behavioral notes:**
- Mission band visibility is toggleable (`showMission` boolean, default on).
- "How We Work" photo placeholders are toggleable (`showPhotos` boolean,
  default on) — turn off once real photos replace them, or keep the toggle
  as a dev convenience.
- Reproduce the `bePartStyle` cards/buttons variation as a simple prop or
  just ship the "cards" variant if the developer doesn't need the toggle.

---

## 4. About Us Page

**File:** `About.dc.html`. Route: `/about` (new page).

Six stacked sections, header/footer identical to above:

1. **Intro band** — same gradient as Home hero, padding `4.5rem 2rem 3.5rem`,
   centered, max-width `760px`. Eyebrow "ABOUT US", Lora `3rem` H1 "Roots
   strong enough to hold every reader", Lora italic-weight `1.35rem`
   supporting line.

2. **Founder Story** — cream bg, padding `5rem 2rem`, max-width `1100px`,
   2-column grid (`0.85fr / 1.15fr`, `gap: 3.5rem`).
   - Left (sticky, `top: 110px`): `4:5` aspect-ratio photo placeholder card
     (radius `16px`, shadow), then founder name "Carol Bluee" (Lora, 600,
     `1.2rem`) + title "Founder, Roots of Knowledge Tutoring" (`1rem`,
     opacity `0.85`) below it. Toggleable via `showFounderPhoto`.
   - Right: Lora `2.1rem` H2 "Our Story" + four body paragraphs
     (`1.15rem`, line-height `1.75`) — exact copy pulled from the live
     WordPress About page (see full text in the source file; do not
     paraphrase).

3. **Mission & Vision** — background `--color-rokt-mid`, padding `5rem 2rem`,
   max-width `1100px`, 2-column grid, `gap: 2rem`. Two equal cards, bg
   `--color-rokt-card`, radius `16px`, padding `2.75rem 2.5rem`: "OUR
   MISSION" / "OUR VISION" eyebrows + Lora `1.5rem` statement text (verbatim
   mission/vision copy from the live site).

4. **Core Values** — dark brown bg (`--color-rokt-dark`), cream text, padding
   `5.5rem 2rem`, max-width `1100px`. Centered intro (eyebrow "WHAT WE STAND
   FOR" in light green `#8fd39a` + Lora `2.4rem` H2 "Our Core Values"). Below:
   2×2 grid (`gap: 2rem 2.5rem`) of value rows — each a green circular
   checkmark badge (`36px`, bg `--color-rokt-accent`) + text with a bold Lora
   lead-in phrase. Four values verbatim from the live site: Equity and access
   in education; Cultural pride and representation; Community partnership and
   trust; Academic excellence and accountability.

5. **CTA band** (toggleable, `showCta`) — cream bg, padding `4.5rem 2rem`,
   centered, max-width `820px`. Lora `2rem` line "Every confident young
   reader is the work of a whole community." + the same two CTA pills as the
   Home hero (Enroll / Donate).

6. **Footer** — identical to Home.

---

## 5. Donate Page

**File:** `Donate Page.dc.html`. Route: `/donate` (new page). This is the
most interactive of the three — it has real client-side state.

**Sections top to bottom:**

1. **Intro band** — same gradient treatment, centered, max-width `740px`.
   Eyebrow "SUPPORT OUR WORK", Lora `3rem` H1 "Every gift helps a child find
   their words", Lora `1.35rem` supporting paragraph.

2. **Choose your gift** — centered intro (eyebrow + Lora `2.1rem` H2 "Pick an
   amount to get started" + paragraph), then, max-width `720px`:
   - **One-time / Monthly toggle** — pill-track switch (bg `#f0e2c6`, radius
     `999px`, padding `0.4rem`), two segments; active segment gets green
     bg + shadow, inactive is transparent brown text. Switching resets the
     selected amount.
   - **Amount chips** — row of 4 equal-width buttons (radius `16px`, min-height
     `76px`): dollar amount (bold `1.5rem`) + short descriptor. One-time set:
     $25, $50, $100, Other. Monthly set: $30/mo ("sponsors one child"), $60/mo
     ("sponsors two children"), Other. Selected chip: green bg/border + strong
     shadow. Idle chip: white bg, `#ead9bb` border, lifts 2px on hover.
   - **Impact line** below the chips (min-height `2.5rem` so layout doesn't
     jump): before a selection, muted prompt text; after selecting, a
     sentence naming the concrete impact of that amount (e.g. "Your $50 gift
     covers a month of learning materials for a young reader."), plus a green
     "Now choose how to send it ↓" cue.

3. **Give by card** — centered, max-width `520px`. One large green pill button
   "Donate with Credit Card" (icon + label), row of accepted-network badges
   below it (Visa, Mastercard, Amex, Apple Pay, Google Pay — small white
   rounded-rect chips), and a "Powered by Stripe" caption (Stripe's brand
   purple `#635BFF` on the wordmark only).

4. **Divider** — "or give another way" centered between two hairlines.

5. **Ways to give** — centered intro ("WAYS TO GIVE" + Lora `2rem` H2 "Give by
   Zelle or a mailed check"), then a 2-column grid of dark-brown cards
   (`--color-rokt-dark` bg, cream text, radius `16px`, padding `2rem 1.9rem`):
   - **Zelle** card: phone `310-597-3810` and email
     `rootsofknowledgetutor@gmail.com` as labeled rows, plus a memo note.
   - **Check by Mail** card: payable-to name, and a line to call for the
     mailing address.

6. **Give in a tap** — centered intro ("GIVE IN A TAP" + Lora `2rem` H2), then
   a 2×2 grid of clickable white cards (radius `16px`, border, shadow, lifts
   on hover) each pairing a `72px` **PayIcon** badge (see below) with the
   method name (Lora `1.45rem`) and a green "Tap to give →" line. Methods:
   Cash App, Venmo, PayPal, Square.

7. **Footer** — identical to Home/About.

8. **Coming-soon modal** — clicking any digital-payment card (Cash App,
   Venmo, PayPal, Square, or the credit-card button) opens a centered modal
   (dark scrim backdrop, `rgba(59,42,20,0.55)` + blur) with a `20px`-radius
   cream card: the method's PayIcon badge at `76px`, Lora `1.6rem` heading
   "{Method} is coming soon", explanatory copy pointing back to Zelle/check,
   and a green "Got it" button that closes it. This is a **placeholder UX**
   until real payment integrations (Stripe, Cash App, etc.) are wired up —
   the developer should decide whether to keep this modal pattern or replace
   individual methods with real links/checkout flows as they're implemented.

**State/behavior to reproduce:**
- `giftMode`: `'once' | 'monthly'` — toggled by the pill switch, resets the
  selected amount on change.
- `amount`: currently selected chip id (or `null`). Drives the impact-line
  copy and the "now choose how to send it" cue.
- `modal`: currently open payment method (or `null`) — opened by clicking any
  digital method card or the credit-card button; closed by clicking outside
  the card, clicking "Got it", or (recommended) Escape.
- Optional dev props seen in the mockup: `defaultTab` (`once`/`monthly`) and
  `showMonthly` (hide the toggle entirely, e.g. if monthly giving isn't ready)
  — reproduce as component props/flags if useful, otherwise hardcode.

### PayIcon (payment badges)

**File:** `PayIcon.dc.html`. **There is no bitmap/PNG asset for these** — each
badge is a small inline SVG generated by this component, keyed by a `method`
prop. Recreate as a single small component (or a lookup object of SVGs) with
five variants, each a `100×100` rounded-square (`radius 24`) badge:
- **`cashapp`** — green `#00D64F` bg, white bold `$` glyph.
- **`venmo`** — blue `#008CFF` bg, white "venmo" wordmark text.
- **`paypal`** — white bg with `#e7e0d2` border, overlapping italic serif
  "P"s in PayPal blue (`#003087`) and light blue (`#0091DE`).
- **`square`** — black bg, white rounded-square outline glyph.
- **`card`** (used for the credit-card modal only) — green bg with a simple
  card glyph (two horizontal bars + a small chip rectangle).

Render at `72px` on the "Give in a tap" cards and `76px` inside the
coming-soon modal.

---

## Assets
- `assets/rokt-logo-full.png` — the ROKT logo used in the header lockup and
  Home hero (copied into this folder). The codebase's existing equivalent is
  `public/full-logo-trimmed.jpg` / `public/fulllogo-transparent-trimmed-bg.png`
  — use whichever transparent version renders best against the dark header
  and the gradient hero.
- Photo placeholders (repeating diagonal stripe pattern + monospace caption)
  on the Home "How We Work" cards and the About founder photo are **stand-ins
  only** — replace with real photography when available.
- PayIcon badges are generated inline (see above) — no image files to copy.

## Files
- `Header + Footer reference — see Home Page Mockup.dc.html`
- `Home Page Mockup.dc.html` — Home page design reference
- `About.dc.html` — About Us page design reference
- `Donate Page.dc.html` — Donate page design reference
- `PayIcon.dc.html` — payment badge icons, imported by the Donate page design
- `assets/rokt-logo-full.png` — logo asset

Cross-reference against the live codebase while implementing:
- `ROKT/code/components/Header.tsx` / `Footer.tsx` — current (simpler)
  implementations to replace
- `ROKT/code/app/page.tsx` — current Home page to replace
- `ROKT/code/app/globals.css` — color tokens (already match this design)
- `ROKT/code/AGENTS.md` — Next.js version-specific rules to follow
