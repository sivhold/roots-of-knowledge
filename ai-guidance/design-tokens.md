# ROKT Design Tokens

Decisions made 2026-06-21. All color tokens live in `code/app/globals.css` inside the Tailwind v4 `@theme` block (not `tailwind.config.ts`).

---

## Color palette

### rokt-dark — `#6b4a2b` — Deep brown
- **Where used:** Header background, footer background
- **Why:** Anchors the page top and bottom with a grounded, earthy tone. Derived from the brown in the ROKT logo wordmark.

### rokt-card — `#9f7740` — Warm sienna
- **Where used:** Card and box backgrounds (e.g. "Be Part of It" section cards)
- **Why:** Mid-range warm tone that sits between the dark header and the amber hero — gives cards visual depth without introducing a new hue.

### rokt-mid — `#c58f41` — Golden amber
- **Where used:** Hero section background, mission band, page body base color
- **Why:** The dominant page tone — warm, inviting, evokes sunlight and growth. Also used as the `body` background in `globals.css`.

### rokt-light — `#fdf6ec` — Warm cream
- **Where used:** All text on dark/amber backgrounds; light surface sections (e.g. the cards section bg)
- **Why:** Softer than pure white — stays in the warm family and reduces eye strain against the amber and brown tones.

### rokt-header-font — `#fdf6ec` — Header nav text
- **Where used:** Header nav link text and site title text
- **Why:** Same value as `rokt-light` but named separately so header font color can be changed independently later without touching every surface that uses `rokt-light`.

### rokt-footer-font — `#fdf6ec` — Footer text
- **Where used:** Footer text, email link, social icon color
- **Why:** Same value as `rokt-light` and `rokt-header-font`, named separately so footer text color can be adjusted independently.

### rokt-accent — `#3d7a45` — Brand green
- **Where used:** "Donate" nav button fill, primary CTA button fills, hover state on nav links, text link underlines, focus rings on form inputs, checkmarks/success states
- **Why:** The only cool tone in the palette — creates natural focal points without competing with the browns and ambers. Sourced directly from Carol's existing brand materials (the green used in the flyer's section headers, icons, and callout boxes). Also appears as a muted olive in the logo underline/wordmark, confirming it's an established ROKT brand color. Complements the warm amber/brown family as a natural near-complement.

---

## Font (pending decision)

- Headings: Georgia or a serif via `next/font` / Google Fonts — now Lora (headings) + Source Sans 3 (body), see `how-the-site-works.md`
- Body: Arial / Helvetica (current placeholder in `globals.css`)

---

## Color usage summary

| Token | Hex | Role |
|---|---|---|
| rokt-dark | #6b4a2b | Header bg, footer bg |
| rokt-card | #9f7740 | Card backgrounds |
| rokt-mid | #c58f41 | Hero bg, page bg, mission bands |
| rokt-light | #fdf6ec | Text on dark, light surface bg |
| rokt-accent | #3d7a45 | CTAs, hover states, links, focus rings |
| rokt-header-font | #fdf6ec | Header nav + site title text |
| rokt-footer-font | #fdf6ec | Footer text, email, social icons |

---

## CSS variable resolution note

Tailwind v4's `@theme` block defines design tokens for Tailwind utility class generation but does **not** reliably expose them as standard CSS custom properties usable via `var()` in inline styles or non-Tailwind contexts. Fix: declare all tokens twice — once in `@theme` (for Tailwind utilities) and once in `:root` (for `var()` usage everywhere). Both blocks live in `code/app/globals.css`. Never hardcode hex values in components — use `var(--color-rokt-*)` instead.
