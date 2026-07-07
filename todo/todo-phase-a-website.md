---
Parent: "[[todo-master|Master ToDo]]"
status: active
---
---
# Phase A: Finish WordPress.com Site

Active build tasks currently tracked in the Todoist project "Roots-of-Knowledge" (ID `6gpqhvw3HRWCHhHv`, 57 tasks: Donate Page, Home Page, Programs, Enroll, Impact/Resources, Volunteer, Contact, About, Polish & Review, Go Live, Waiting on Carol, Housekeeping).

- [ ] Import the 57 active build tasks from the Todoist "Roots-of-Knowledge" project into this file ⏬

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
