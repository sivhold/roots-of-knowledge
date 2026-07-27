# Site rules — the wording that cannot change

[`../AGENTS.md`](../AGENTS.md) states these rules in short, enforceable form.
This file explains **why** each exists and when the owner asked for it, so the
rules can be applied to situations they don't literally cover.

Where this file and any other document in `ai-guidance/` disagree, **this file
wins.** The one exception is `../AGENTS.md`, which wins over this.

---

## 1. ROKT is an LLC, not a nonprofit

**The rule:** never write "nonprofit", "501(c)(3)", "tax-deductible", or
anything implying a contribution is deductible.

**Why:** Roots of Knowledge Tutoring is a Limited Liability Company.
Contributions to it are genuinely not tax-deductible. Saying or implying
otherwise would mislead a sponsor about their tax position — a real
consequence, not a wording preference.

Carol has said she may consider converting to a nonprofit later, but does not
want to take on a board of directors. Until that actually happens, the LLC
framing is the accurate one.

**Applying it:** this also rules out phrasings that merely *suggest* charity
status — "your tax-deductible support", "as a registered charity", "donations
are deductible to the extent allowed by law", and similar boilerplate.

## 2. Sponsorship language only

**The rule:** never use "donate", "donation", "gift", or "give" in
user-visible copy. The site says *sponsor* and *sponsorship*.

**Why:** this follows directly from rule 1. Carol consulted a business
consultant about it and concluded that because an LLC cannot offer
tax-deductible giving, donation language sets the wrong expectation. Her
instruction, verbatim: *"the language should be consistent throughout the
website."*

**History:** applied in two passes. The first (2026-07-23) replaced
donation/donate wording and renamed the route. The second (2026-07-26) caught
"gift" and "give", roughly 39 further instances, after Carol confirmed she
wanted those changed too.

**Two deliberate exceptions — leave both alone:**

- The Home page "Virtual" card: *"Live online sessions **give** your child the
  same caring, focused instruction…"* — this is the ordinary sense of the verb
  and has nothing to do with contributing. A blind find-and-replace turns it
  into nonsense.
- The volunteer callout on the Sponsorship page: *"Share your time, not just a
  sponsorship"* — this section is about donating **time**, not money. Forcing
  sponsorship wording onto it reads badly.

**Still acceptable:** "Support Our Work" as a warm page-level heading, and
"support" generally. It carries no tax implication.

## 3. "Free" must always be qualified

**The rule:** anywhere the site offers tutoring to a prospective parent, it
reads **"free to qualifying families"** or **"reach out to see if your child
qualifies"** — never an unconditional promise.

**Why:** children are vetted and selected by ROKT. Carol's note: *"most of the
children will be vetted and chosen by ROKT."* An unqualified "free reading
tutoring" invites a parent to assume their child is automatically eligible,
then meet a selection gate at enrollment.

**The distinction that matters:** the tutoring genuinely *is* free. The
qualification governs **admission, not price**. So:

- Offering to a parent → must be qualified. ("Free to qualifying families.")
- Describing the program to a sponsor → fine unqualified. ("Support free K–5
  reading tutoring.")

**History:** applied to Programs and Enroll on 2026-07-23. Carol was asked
whether the home page should match and answered *"The home page should
match"* — so the hero, mission band, and enroll card were updated on
2026-07-26, along with the Programs and Enroll search descriptions.

## 4. The giving page is `/sponsorship`

**The rule:** the route is `/sponsorship`. `/donate` 301-redirects to it via
`code/public/_redirects`. Keep that redirect.

**Why:** the page was originally `/donate` and was renamed as part of rule 2.
The old URL may still be in circulation — printed, emailed, or texted — so the
redirect protects anyone following an old link, and preserves whatever search
ranking the old URL had earned.

**Important:** Next.js's `redirects()` config does **nothing** in a static
export. It is a server feature. The redirect must live in the `_redirects`
file, which Cloudflare Pages reads. If you move the site off Cloudflare, that
redirect needs reimplementing on the new host.

---

## Quick checklist before publishing any copy change

- [ ] No "donate", "donation", "gift", or "give" (except the two exceptions)
- [ ] No "nonprofit", "501(c)(3)", or "tax-deductible"
- [ ] Every offer of tutoring to a parent is qualified
- [ ] Links to the giving page use `/sponsorship`
