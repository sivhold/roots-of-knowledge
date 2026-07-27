# Decision history

Why the site is the way it is. Kept so that decisions aren't accidentally
reversed by someone who doesn't know they were decisions.

Newest first. This is a record of *what was decided and why* — it is not a
statement of current site content. Where it conflicts with
[`site-rules.md`](site-rules.md), that file wins.

---

## 2026-07-26 — Repository restructured for handoff

Split into `code/` (only what builds and deploys) and `ai-guidance/`
(everything an AI needs to understand the project). Planning files, design
mockups, the project proposal, and editor config were moved out to a separate
private workspace — they were the previous developer's working material, not
part of the website.

Root `AGENTS.md` carries the hard rules. `CLAUDE.md` imports it, so there is one
source of truth rather than two files that drift. Both live at the repository
root because that is where AI tools look automatically — rules kept only in a
subfolder don't get read.

## 2026-07-26 — Site made usable on phones

The header laid out the logo and all six nav links in one row that never
wrapped, with no mobile menu. That row needs 972px. Below it the whole page
scrolled sideways — at 375px it overflowed by 500px, and everything from
"Programs" rightward sat off-screen. A parent on a phone could not reach Enroll
or Sponsorship at all.

Fixed with four staged breakpoints, each set at the measured point where the
previous layout stops fitting: 1024px (collapse the nav), 719px (drop the
wordmark), 374px (tighten spacing).

**Enroll and Sponsorship never collapse into the menu.** They are the two
things a visitor comes to the site to do, and putting them behind a tap costs
conversions. This is why it's a partial collapse rather than a conventional
hamburger — a deliberate choice, not an incomplete one.

## 2026-07-26 — Sponsorship language extended to "gift" and "give"

Carol confirmed the wording should be consistent site-wide, so roughly 39
further instances were reworded. Two were deliberately left — see
[`site-rules.md`](site-rules.md) § 2. Also confirmed the home page should
match the "free to qualifying families" wording used elsewhere.

## 2026-07-23 — Donation language became sponsorship language

ROKT is an LLC, so contributions are not tax-deductible. Carol consulted a
business consultant and asked that all donation wording become sponsorship
wording. The route was renamed `/donate` → `/sponsorship`, with a 301 in
`code/public/_redirects` to protect links already in circulation.

The nav pill reads **"Sponsorship"** — Carol's own noun, chosen over the verb
"Sponsor" — while the card button reads "Sponsor with Credit Card" for grammar.

## 2026-07-23 — Section headings enlarged

Carol reported headers were too small. The labels she named turned out to be
the small uppercase *eyebrow* text above each section, not the large serif
headings — at 0.85rem they were rendering **smaller than the body copy beneath
them**, which is what her note "font should be larger than the text" described.

Raised to 1.25rem and consolidated into `code/lib/typography.ts`. The style had
been copy-pasted into six files and had silently drifted apart.

## 2026-07-23 — "Free" qualified as "free to qualifying families"

Children are vetted and selected by ROKT, so an unconditional promise of free
tutoring was misleading to a parent who might not be admitted. See
[`site-rules.md`](site-rules.md) § 3.

## 2026-07-12 — Placeholder pages instead of hidden nav links

Enroll, Impact, and Volunteer weren't designed yet. Rather than hide them from
the navigation, they ship as contact-first placeholder pages with working email
and phone links. Every nav item and call-to-action resolves to a real page —
no dead links and no "coming soon" stubs.

## 2026-07-06 — Redesign; Lora + Source Sans 3

Header, Footer, Home, and About were rebuilt from a design handoff. Fonts
became Lora for headings and Source Sans 3 for body. Active navigation is
indicated by an underline rather than the earlier filled pill.

## 2026-06-28 — Cloudflare Pages chosen for hosting

Free tier, deploys straight from GitHub, good static-site performance. The
Cloudflare account is under Carol's own email address.

## 2026-06-21 — Static export chosen over a server

The site has no need for server-side rendering — it's content pages with no
user accounts or per-request data. A static export is faster, free to host,
and has no server to patch or exploit. If user accounts are ever needed, the
Next.js App Router gives a path to add them without a rewrite.

## 2026-06-21 — Tailwind installed, but components use inline styles

Tailwind is present and its `@theme` block defines the color tokens. The
components themselves use inline `style={{}}` objects.

A Tailwind v4 quirk shaped this: `@theme` tokens are not reliably available to
`var()` inside inline styles, so every color token is declared **twice** — once
in `@theme` and once in `:root`. Both are needed; removing either breaks
colors somewhere.
