---
Parent: "[[todo-master|Master ToDo]]"
status: active
---
---
# Phase A: Finish WordPress.com Site

Active build tasks currently tracked in the Todoist project "Roots-of-Knowledge" (ID `6gpqhvw3HRWCHhHv`, 57 tasks: Donate Page, Home Page, Programs, Enroll, Impact/Resources, Volunteer, Contact, About, Polish & Review, Go Live, Waiting on Carol, Housekeeping).

- [ ] Import the 57 active build tasks from the Todoist "Roots-of-Knowledge" project into this file ⏬

> **⚠️ 2026-07-23 — Carol's feedback was applied to the Next.js site, not this one.** Her `Webchanges.docx` changes (header sizes, copy edits, and the **donation → sponsorship** rename) landed in `code/` and deploy to `.pages.dev`. **`roots-of-knowledge.com` — the WordPress site Carol actually visits — still shows the old copy.** Two of her items matter here regardless of which platform wins:
> - **"Donate" must become "Sponsorship" on WordPress too** ⏫ — ROKT is an LLC and contributions aren't tax-deductible. This is a correctness issue, not a style preference, so it shouldn't wait on the domain cutover. Note this **supersedes** the "'Donate' kept in nav labels" decision recorded under *Done so far* below.
> - **"always free"/"free for families" wording** should become "free to qualifying families" wherever it appears ⏫ — children are vetted and selected by ROKT.
>
> Decide explicitly: mirror these onto WordPress now, or tell Carol the WordPress site is frozen pending cutover. See `MEMORY.md` (2026-07-23).
>
> **Update 2026-07-26:** Geoff asked Carol this directly and **she didn't answer it** — she replied to the other two questions and said she's ready to take over the site. Likely moot if the cutover happens soon, but it is still unresolved, and `roots-of-knowledge.com` continues to show "Donate" plus unqualified "free" wording in the meantime. **Phase A may be effectively over** — confirm on the handoff call before doing any further WordPress work.

## Done so far

- [x] Homepage hero section — gradient background, transparent PNG logo, subheadline, "Get Help" / "Support Our Work" CTA buttons; page title hidden via CSS
- [x] About Us page — card design (`#A67535` background, `32px` padding, `12px` border radius, cream text `#FDF6EC`); Mission/Vision side-by-side, Core Values full-width below; custom CSS class `mission-vision-row` for equal-height cards
- [x] Donate / Support Our Work page — Zelle, Cash App, mailed check options live; "Support Our Work" used in page content, "Donate" kept in nav labels; Stripe placeholder removed pending Carol's confirmation
- [x] How to Give page (`/donation-instructions/`) — Zelle/Cash App and Check by Mail cards, volunteer callout; all donation-amount buttons link here
- [x] Coming Soon page — created and linked from all unfinished nav items
- [x] Global Additional CSS — page-title gradient (`#6B4A2B` → `#C58F41`) applied at Pages template level; sticky footer, body background, active menu underline

## Open bug

- [ ] Resolve golden band that appears between hero and footer on homepage — CSS attempts so far haven't fully fixed it 🔼

## Open decision (waiting on Geoff/Carol)

- [ ] Pick homepage layout direction: widescreen wireframe Option A, Option B, or a new variation — proposal already generated, no direction confirmed yet

## Remaining homepage sections

- [ ] Our Mission
- [ ] How We Work
- [ ] Be Part of It

## Next pages (agreed build order)

> **⚠️ Likely superseded (2026-07-12):** these pages are being built on the **Next.js** site instead (Phase B), not WordPress. As of 2026-07-12, Programs is fully built and Enroll/Impact/Volunteer ship as contact-first placeholders on the redesigned site (live at https://roots-of-knowledge.pages.dev/). A domain cutover from WordPress.com to the Cloudflare Pages site has been **proposed to Carol** (review email drafted). If she approves the switch, these WordPress page tasks become moot — don't build them in WordPress. See `todo-nextjs-design.md` § 0 (Go-Live Roadmap) and § 3c–3f.

- [ ] Programs
- [ ] Enroll
- [ ] Impact
- [ ] Volunteer

## About page fixes (logged in Todoist)

- [ ] Fix paragraph spacing
- [ ] Fix edge-to-edge text padding

## Waiting on Carol

- [ ] Confirm Stripe — once confirmed, add credit/debit card section to Donate page (design decision: use a "Donate with Card" button, not a Stripe logo/icon — see Notes)
- [ ] Venmo handle
- [ ] Zelle contact details
- [ ] Real social media URLs

## Notes

- Geoff drafted a message to Carol about eventually transitioning the site from WordPress.com to a more professional TypeScript/React/Next.js setup (Phase B), offering to work at whatever technical level suits her — sent/pending, no reply logged yet.
- **Design decision — Stripe button, not Stripe icon (2026-07-01):** unlike Zelle/Cash App/Venmo/PayPal, Stripe isn't consumer-facing — donors don't have "Stripe accounts," so a clickable Stripe logo would confuse rather than clarify. When Stripe is added, use a generic **"Donate with Card"** button (linking to a Stripe Payment Link) styled to match the other donation icons, optionally with small Visa/Mastercard/Amex or Apple Pay/Google Pay icons next to it. A small "Powered by Stripe" badge is allowed under Stripe's brand guidelines for trust signaling, but should stay fine-print, not the primary CTA.
