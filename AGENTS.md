# Roots of Knowledge Tutoring — website

Next.js static site for Roots of Knowledge Tutoring (ROKT), a K–5 reading
tutoring service in underserved communities across Los Angeles County.
Founded and owned by Carol Bluee.

## Where things are

- **`code/`** — the website. Everything that builds and deploys, nothing else.
- **`ai-guidance/`** — background, decisions, and source material.
  **Read `ai-guidance/README.md` before doing anything non-trivial.**

## Rules you must not break

These are not style preferences. Each one was a deliberate decision by the
owner, and breaking them creates a legal or trust problem.

1. **ROKT is an LLC, not a nonprofit.** Never write "nonprofit", "501(c)(3)",
   "tax-deductible", or anything implying a contribution is deductible.
   Contributions to ROKT are **not** tax-deductible.

2. **Sponsorship language only.** Never use "donate", "donation", "gift", or
   "give" in user-visible copy. The site says *sponsor* and *sponsorship*.
   Two deliberate exceptions — **leave both alone**:
   - Home page "Virtual" card: "sessions **give** your child the same caring,
     focused instruction" — ordinary sense of the word, nothing to do with
     contributing.
   - Volunteer callout: "Share your time, not just a sponsorship" — this one
     is about donating time, not money.

3. **"Free" must always be qualified.** Anywhere the site offers tutoring to a
   prospective parent, it reads **"free to qualifying families"** or "reach out
   to see if your child qualifies". Children are vetted and selected by ROKT,
   so an unconditional promise of free tutoring is misleading. Describing the
   program to a sponsor ("support free K–5 reading tutoring") is fine — the
   tutoring genuinely is free; the qualification governs admission, not price.

## Technical must-knows

- **Static export** (`output: "export"` in `code/next.config.ts`). There is no
  server and no API routes. Anything requiring a request handler will not work.
- **`redirects()` in next.config does nothing here** — it is a server feature.
  Redirects live in `code/public/_redirects`, which Cloudflare Pages reads.
- The giving page is **`/sponsorship`**. `/donate` 301-redirects to it; keep
  that redirect, the old URL may still be in circulation.
- **Styling is inline `style={{}}`**, not Tailwind utility classes, despite
  Tailwind being installed. Match the surrounding code.
- Inline styles cannot express media queries, so **responsive rules live in
  `code/app/globals.css`**. The header collapses in four measured stages —
  don't change those breakpoints without re-measuring.
- Section eyebrow labels come from **`code/lib/typography.ts`**. Import it;
  never redeclare the style locally (it used to be copy-pasted into six files
  and silently drifted apart).
- This version of Next.js may differ from your training data. Check
  `node_modules/next/dist/docs/` before using an unfamiliar API.

## Publishing

Pushing to `main` deploys to Cloudflare Pages automatically. **There is no
staging step** — a push is a publish.

- Work on a **branch** and open a pull request. Cloudflare builds a preview URL
  per branch so changes can be reviewed before going live.
- Undo a bad deploy: Cloudflare → Deployments → **Rollback**.
- `roots-of-knowledge.pages.dev` is the preview site.
  `roots-of-knowledge.com` is the live one.
