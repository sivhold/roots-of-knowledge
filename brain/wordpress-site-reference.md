# WordPress Site Reference — CSS, Colors, Theme Quirks, Design Decisions

Durable technical reference for the Phase A WordPress.com build, recovered from an
imported claude.ai Project file (`ROKT_PROJECT_CONTEXT_v3.md`, last updated 2026-06-06)
during the 2026-06-20 inbox cleanup. That source file no longer exists — this is its
distilled, non-perishable content.

**Live build status (what's done, what's next) lives in `todo/todo-phase-a-website.md`,
not here** — that file changes fast and is the single source of truth for current state.
This file holds the slower-changing *why* and *how*: CSS rationale, color values, theme
quirks, and standing design decisions.

---

## CSS Currently in Use

Located in **Design → Styles → Additional CSS**. These rules are load-bearing — don't
remove without understanding what they do.

```css
/* Sticky footer pattern — makes the page a vertical flex column
   so the footer is always pushed to the bottom of the viewport */
.wp-site-blocks {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

/* Allows the main content area to grow and fill available space,
   keeping the footer anchored at the bottom on short pages */
.wp-site-blocks > main {
  flex: 1;
}

/* Overrides CoachAva's default body gradient (which caused a white
   slice at the bottom of long pages) with the solid golden-brown primary color.
   Also prevents horizontal scrollbar caused by the full-width hero trick. */
body {
  background: var(--wp--preset--color--primary);
  overflow-x: hidden;
}

/* Underlines the active menu item so visitors can see which page they're on */
.current-menu-item {
  text-decoration: underline;
  text-underline-offset: 4px;
}

/* Hide the "Home" page title on the homepage only */
.page-id-177 .wp-block-post-title {
  display: none;
}

/* Force hero to span full viewport width regardless of parent constraints.
   Standard full-bleed trick — needed because CoachAva's template Content block
   and <main> element (has-global-padding class) both constrain child width. */
.hero-group {
  width: 100vw !important;
  max-width: 100vw !important;
  margin-left: calc(50% - 50vw) !important;
  margin-right: calc(50% - 50vw) !important;
}
```

**Rule:** CSS in this project should stay minimal. Always check the visual editor first;
when CSS is genuinely needed, document why the editor couldn't do the job (see
`CLAUDE.md` → WordPress Phase A working principles).

---

## Color Palette

| Role | Hex | Notes |
|---|---|---|
| Page background (golden-brown) | `#C58F41` | Main body color; set as theme Primary |
| Header + footer (dark brown) | `#6B4A2B` | Bookend pattern top and bottom |
| Text on brown (cream) | `#FDF6EC` | Theme Base color (`--wp--preset--color--base` ≈ `#f7f3ed`) |
| Button background (light grey) | `#C0C0C0` | CTA buttons on hero; may change |
| Button text (black) | `#000000` | CTA button text |
| About Us card background | `#A67535` | Per `todo-phase-a-website.md` |
| Logo green | — | In the logo image itself (leaf accents, "TUTORING" banner). Not used in UI. |

---

## CoachAva Theme Quirks

- **Broken Front Page template** — hard-coded mission text + logo with no content
  placeholder. Was deleted. Home uses the standard Pages template instead.
- **106px top padding by default** on the page body. Fix: Design → Styles → Layout →
  Dimensions → Padding → set to 0.
- **`<main>` has `has-global-padding` class** which applies side padding via CSS variables
  (`--wp--style--root--padding-right/left` → `var(--wp--preset--spacing--80)`). This is
  what prevents full-width blocks from reaching the viewport edges. Cannot be removed
  per-page via the editor — it's a global setting. Fix: CSS full-bleed trick (see above).
- **"Inner blocks use content width" on the Content block** in the Pages template must be
  ON for child blocks to get alignment options (None / Wide / Full width). When OFF, there
  are no alignment choices at all.
- **Full Width alignment alone is not enough** — even with Full Width selected on a Group,
  `has-global-padding` on `<main>` still constrains it. CSS is required for true edge-to-edge.
- **100vw includes scrollbar width** — using `width: 100vw` on a block causes a horizontal
  scrollbar when a vertical scrollbar is present. Fixed with `body { overflow-x: hidden; }`.
- **Block "Rename" is just a label** — renaming a block in list view does NOT add a CSS
  class. To target a block with CSS, add a class manually via Block → Advanced →
  "Additional CSS class(es)."
- **No "Hide page title" toggle on Premium** — requires Business plan or a theme that
  specifically supports it. Use CSS per-page: `.page-id-NNN .wp-block-post-title`.
- **Body gradient** creates a white slice at ~95% height on long pages. Fixed via the
  `body` background override above.
- **Default `<p>` margins** can cause unexpected gaps in Row/horizontal layouts. Watch for
  this in the footer and any side-by-side blocks.
- **Additional CSS on Premium does work** — earlier documentation suggesting it required
  Business was wrong.
- **Block spacing between elements in a Group** is controlled by the Group block's
  "Block Spacing" (or "Gap") setting under Dimensions, not individual block margins.

---

## Key Design Decisions

- **Brown header + brown footer = bookend.** Same color top and bottom frames the golden
  content area cleanly.
- **Logo + Site Title side-by-side** in a "HeaderBranding" Row. Both link to home —
  Carol wanted both kept.
- **Post Title block in the Pages template** means every page auto-shows its own title.
  Don't add manual title headings on individual pages — they'll duplicate. Home page
  title is hidden via CSS since Premium lacks a toggle.
- **No "Home" in the nav menu** — logo + title already serve as the home link.
- **Donate at the end of the menu** — build trust before asking.
- **Active menu item highlighting** via CSS `.current-menu-item` underline.
- **Hero gradient** — dark brown at top fading to golden-brown at bottom. Chosen because
  the logo has white fringing from background removal; the gradient hides the fringing
  near the bottom (where text sits) while keeping dark-brown visual weight at the top.
- **"Tutoring Sprinkled With Love" lives inside the logo image**, not as separate text —
  adding it again as a heading would be redundant.
- **Progressive page reveal** — unfinished pages are removed from the nav menu so visitors
  only see working pages; each page is added back as it's completed.

---

## Style & Voice for Visitor-Facing Copy

- **First person** ("we provide...") not third person ("ROKT will provide...").
- **Warm and direct** — a tutoring service for families, not corporate or stiff.
- **Avoid jargon/acronyms in flow text.** Spell out "Roots of Knowledge Tutoring" on first
  mention; "ROKT" is fine after that.
- **Never use** "nonprofit," "501(c)(3)," "tax-deductible" — see `CLAUDE.md` critical
  constraints.
- **Frame giving as "support our work"** where it reads naturally, per the nav-vs-content
  language rule in `CLAUDE.md`.
- **Carol's key terms to keep:** reading proficiency, early literacy, cultural affirmation,
  reading intervention.

---

## Tool Capabilities Note (from the imported file, still relevant)

- Claude can fetch the live site's HTML for inspection but markdown extraction loses
  structure — ask Geoff to use browser dev tools for CSS debugging when precision matters.
- Claude cannot take browser screenshots, directly edit the WordPress site, or edit image
  files — all WordPress edits happen via Geoff in the block editor; image edits (e.g.
  background removal) happen in Paint.NET, saved as PNG for transparency.
