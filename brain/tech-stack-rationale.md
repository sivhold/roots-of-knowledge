# Tech Stack Rationale — Phase B (Next.js)

Record of *why* we built the Phase B stack the way we did, distinct from `CLAUDE.md`
(which states the current decision) and `todo/todo-nextjs-migration.md` (which tracks
build progress). Append new decisions here as they're made; don't let this drift from
`CLAUDE.md`'s stack summary.

---

## CSS: Tailwind CSS (decided 2026-06-21)

**Decision:** Use Tailwind CSS for styling the Phase B Next.js site. No CSS-in-JS
library, no CSS Modules, no Sass.

**Why:** Geoff already knows Tailwind from prior React experience — zero new learning
curve. The main contenders considered were the current (2023–2026) wave of zero-runtime
CSS-in-JS tools (vanilla-extract, Panda CSS, Meta's StyleX), which compile to static CSS
at build time and are the modern replacement for older runtime libraries like
styled-components/Emotion (which are in decline and incompatible with React Server
Components / Next.js App Router).

Those three were evaluated against Geoff's stated priorities for this decision —
**Carol's real-world needs first, specifically long-term maintainability and fewest
moving parts** — and rejected for this project because:
- All three add a build-time dependency and a less-standard file convention
  (e.g. `.css.ts`) beyond what Tailwind requires — more moving parts, not fewer.
- The usual critique of Tailwind ("long class strings hurt maintainability") bites
  hardest at large-scale, highly dynamic component libraries (this is literally why
  Meta built StyleX for their own scale) — it doesn't meaningfully apply to a small,
  mostly-static five-page brochure site like ROKT.
- Tailwind has the largest community and lowest abandonment risk of any option
  considered (~12M weekly downloads in 2026 vs. ~940K for vanilla-extract, the largest
  of the three CSS-in-JS alternatives) — best fit for a site that needs to keep working
  with minimal upkeep for Carol over the long haul.
- Tailwind has official first-class Next.js support; the CSS-in-JS options range from
  "simple plugin setup" (vanilla-extract, Panda) to "convoluted" (StyleX).

Also considered and rejected: native CSS custom properties + inline `style` attribute
(maximally simple, but doesn't support `:hover`/media queries inline, so it would still
need a companion stylesheet — undercutting the "fewest moving parts" win); JS/TS theme
object + inline `style` (same limitation, plus an extra tokens file to maintain).

**How to apply:** Default to Tailwind utility classes for all Phase B styling. If a
future situation specifically calls for compile-time type-checked design tokens or
co-located component styles beyond what Tailwind's config gives you, that would be a
reason to revisit — but don't reach for a CSS-in-JS library without that concrete
trigger.

**Component library:** Not yet decided — deferred until Phase B scaffolding begins.
See `todo/todo-nextjs-migration.md` § 3.

## Dev Environment & Deployment Pipeline (confirmed 2026-06-28)

- **Working directory:** All project files live in `C:\Users\gvd10\OneDrive\Desktop\ROKT`
- **IDE / coding tool:** Claude Code desktop app (primary); may migrate to VS Code + Claude Code extension, launched from a PowerShell window or VS Code's integrated PowerShell terminal
- **Version control:** Git (local)
- **Remote:** GitHub — code pushed and kept in sync there
- **Deployment:** Cloudflare Pages, deploying automatically from GitHub
- **Hosting:** Cloudflare Pages (free tier) — Carol's production host for the Next.js site

---

## Scaffolding: `create-next-app` (decided 2026-06-21)

**Decision:** Generate the Phase B project skeleton with
`npx create-next-app@latest`, flagged for App Router + TypeScript + Tailwind, rather
than cloning a Vercel template-gallery repo or hand-building the skeleton file-by-file.

**Why:** Three options were compared — (1) cloning a pre-built example from Vercel's
template gallery (vercel.com/templates), (2) the official `create-next-app` scaffolder
run via npx, (3) Claude generating the skeleton manually. `create-next-app` is the
Next.js team's own official tool, stays current with their conventions, accepts flags
for the exact stack already decided (App Router, TypeScript, Tailwind), and avoids the
risk of subtle misconfiguration that hand-rolling config files would introduce. The
template gallery is a separate, more opinionated layer (full example apps — blogs,
e-commerce) better suited to matching a specific use case closely, not a closer fit
than `create-next-app` for ROKT's from-scratch brochure site.

**How to apply:** When Phase B scaffolding begins, run
`npx create-next-app@latest` with flags for App Router, TypeScript, and Tailwind into
`code/`. No need to revisit this choice unless Next.js's official tooling changes.
