# ROKT — Project Instructions

Shared, durable instructions for this project. Read by both Claude Code (auto-loaded every session) and Claude Cowork (read this file first, per its Instructions panel pointer). This file is the single source of truth — do not let Cowork's internal Instructions panel or Code's local auto-memory diverge from it.

## Session start checklist

- Remind Geoff to make sure he's using an appropriate model for the work at hand (e.g. Opus for planning/architecture, Sonnet for routine build work, Haiku for trivial things) — applies across Claude Code, Cowork, and claude.ai alike.

## Who / What

Geoff is a software developer returning to web development after a career gap (JS/React background ~4 years ago, growing TypeScript familiarity — no direct hands-on TypeScript experience yet, but comfortable with the React/Next.js mental model). Building a website for Roots of Knowledge Tutoring (ROKT), founded by Carol Bluee, serving K–5 students in underserved Los Angeles communities. Carol's contact: rootsofknowledgetutor@gmail.com.

Three goals, in order: (1) a real, working website for Carol, (2) a strong portfolio piece for Geoff's job search, (3) hands-on practice with Claude Code in VS Code.

## Critical constraints — never violate

- **ROKT is an LLC, not a 501(c)(3) nonprofit.** No tax-deductible language anywhere on the site. Never use "nonprofit" or "501(c)(3)."
- Zeffy is unavailable as a donation tool (it requires nonprofit status, which ROKT doesn't have).
- **Donation methods are additive, not either/or:** Zelle, Cash App, and mailed check are confirmed and currently live on the Donate / How to Give pages. **Stripe** is the planned addition for card donations, pending Carol's confirmation — a Stripe placeholder was built then removed from the Donate page until she confirms. Stripe does not replace the other methods.
- **Navigation language rule:** use "Donate" in nav/buttons; use "Support Our Work" (or a similarly warm phrase) in page-level content/headings.
- Still pending from Carol: Stripe confirmation, Venmo handle, real social media URLs.
- Live site: https://roots-of-knowledge.com/
- Current platform: WordPress.com Premium, CoachAva block theme.

## Two-phase plan & current status

- **Phase A (active):** Finish the WordPress.com site — Carol needs to operate now. See `todo/todo-master.md` → `todo/todo-phase-a-website.md`. Continues in parallel with Phase B below — not paused or deprioritized.
- **Phase B (active as of 2026-06-21, ahead of original schedule):** Migrate to Next.js static export. Originally planned to start ~10 months out (near the WordPress.com renewal), but Geoff confirmed an early start on 2026-06-21 — coding work begins now in Claude Code. See `todo/todo-nextjs-migration.md` and `todo/todo-copy-wordpress-content.md`. Static export is confirmed as the right call — ROKT has no SSR use cases — with a clean path to add user accounts later without a rewrite. At handoff, add a Git-based CMS (Decap or TinaCMS) so Carol can edit content herself without touching code.

## Folder & file structure

Top-level layout, decided 2026-06-20 to keep the project root from getting overloaded with loose files:

- `CLAUDE.md`, `MEMORY.md` — stay at the project root, exact case, never renamed or moved. Both Claude Code and Cowork auto-discover these specifically at the root; lowercasing or relocating them breaks that.
- `.obsidian/` — stays at the project root (vault config for the Obsidian Tasks plugin used in `todo/`).
- `code/` — all actual Phase B application code (Next.js, TypeScript, React) once that phase starts. Sidecar `.md` files (same filename as the code file, `.md` extension, living next to it) document individual code files inside here.
- `docs/` — raw source material: Word docs, original images/logos, anything that's reference material rather than something we authored about the project.
- `todo/` — active todo/planning files (Obsidian-style, Tasks plugin syntax). Unchanged in purpose, only renamed for case consistency.
- `brain/` — cooperative decisions, approach, and tech-stack rationale: the record of *why* we built things the way we did. Everything about jointly deciding how to implement this project lives here, except sidecar `.md` files (those live with their code in `code/`).
  - `brain/skills/<skill-name>/` — archival/reference copies of custom Claude skills (e.g. `align-before-action`), one subfolder per skill. These are NOT the live, functioning copies — those are installed at the personal/account level and apply across all projects, not just ROKT. This is just version control and documentation for the portfolio repo.
- `temp-code/` — temporary/disposable code-like files (old mockups, throwaway tests) slated for eventual deletion. Not part of the real app.
- `inbox/` — drop zone for new files Geoff adds ad hoc (e.g. exports from a claude.ai Project). Not a permanent home. When Geoff asks, go through each file in `inbox/` one at a time, move it to the appropriate folder above or fold its content into the relevant existing doc, then clear it out of `inbox/`.

**Naming convention:** all folders and files at this top level use lowercase, kebab-case (hyphens, no underscores or mixed case) — e.g. `website-design.docx`, `rokt-donate-page-mockup.html`. Two exceptions: `CLAUDE.md`/`MEMORY.md` (case required for tooling auto-discovery, see above) and **the contents of `code/`**, which follow standard JS/TypeScript/Next.js/React conventions instead (e.g. PascalCase component files like `Header.tsx`) rather than this project-level kebab-case rule.

## Tools & environment

- Windows PC, PowerShell 7, VS Code.
- Claude Code (VS Code) for coding; Claude Desktop/Cowork for planning/docs.
- Git for Windows, public GitHub repo: `https://github.com/sivhold/roots-of-knowledge.git` (account: `sivhold`, branch: `main`).
- Node.js v24+, npm; no GitHub Copilot.
- Planned Next.js stack (Phase B only): App Router, static export, TypeScript, Tailwind, MDX, Vercel (portfolio) + Cloudflare Pages or Netlify (Carol's production).

## Todo system

Active todos live in `todo/*.md` as Obsidian-style files: YAML frontmatter `Parent: "[[todo-master|Master ToDo]]"` links sub-files into `todo-master.md`. Obsidian's Tasks plugin is installed — use its syntax for dates/priority: 📅 YYYY-MM-DD for due dates, ⏫🔼🔽⏬ for priority. **Markdown is the standard for ROKT task tracking** (decided 2026-06-20, reconfirmed 2026-06-20 — see `MEMORY.md`); an older claude.ai Project instruction said the reverse (Todoist as canonical, no PROJECTPLAN .md), but that's superseded.

A Todoist project ("Roots-of-Knowledge", project ID `6gpqhvw3HRWCHhHv`, 57 tasks) also exists with active Phase A build tasks; not yet migrated into the markdown system (low-priority backlog item in `todo-phase-a-website.md`). Whenever Todoist is used directly:
- Structure: parent tasks with subtasks — never use sections.
- `Housekeeping` and `Waiting on Carol` are persistent, uncompletable container tasks — never mark complete or delete them.
- Use judgment on which other tasks should be uncompletable containers vs. regular completable tasks.

## Communication style

Geoff digests information better in condensed bullet form. Structure replies (in both Claude Code and Claude Cowork) as bullets and sub-bullets where the content allows it. If content genuinely doesn't fit bullets well (e.g. a single short answer, a narrative explanation, code), use whatever format best serves clarity instead — this is a default preference, not a rigid rule.

Treat Geoff as a technically capable collaborator, not a beginner — give direct answers about what is/isn't possible (e.g. WordPress.com Premium limitations) without hedging.

## WordPress Phase A working principles

- **Content first, styling second.** Geoff's explicit working preference for all sessions.
- **One step at a time.** Wait for a response or screenshot before proceeding to the next step; avoid multi-step lists that require scrolling.
- **Visual editor before CSS.** Always check whether the block editor can handle something natively; use Additional CSS (Design → Styles → Additional CSS) only as a last resort.
- **CSS must be well-commented.** Any new rule added to Additional CSS needs a properly formatted comment explaining what it's for.
- **Global over local.** Prefer template-level or theme-level fixes (Site Editor) over per-page patches — e.g. the page-title gradient was fixed once at the Pages template level rather than per page.
- **CoachAva theme quirks:** `is-layout-constrained`, `has-global-padding`, and default H3 sizing frequently need targeted Additional CSS overrides. A full-bleed hero needs the `100vw` / `calc()` negative-margin trick to escape the theme's content width constraint.

## Memory

Durable learnings, decisions, and context discovered while working on this project should be written to `MEMORY.md` in this same folder — not relied on solely from Cowork's internal Memory feature or Claude Code's local `~/.claude` auto-memory, since neither is visible to the other tool. Check `MEMORY.md` for prior decisions before starting new work.
