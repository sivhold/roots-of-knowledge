# Page Designs & Copy Reference (portable to Next.js)

Durable page-level design and content detail, extracted from a 2026-06-21 `inbox/` batch
of 10 handoff files (exports of past WordPress-era claude.ai conversations). Unlike
`brain/wordpress-site-reference.md` (CSS rules, CoachAva theme quirks — WordPress-specific,
discard when Phase B starts), this file captures layout structure, copy, and color
application that should carry over into the Next.js rebuild.

Current live build status lives in `todo/todo-phase-a-website.md` — this file is reference,
not status.

---

## Color palette (page-specific application)

Base palette already documented in `wordpress-site-reference.md`. Page-specific usage:

| Page/element | Color | Notes |
|---|---|---|
| About page cards (Founder Story, Mission, Vision, Core Values) | `#A67535` background, `#FDF6EC` (cream) text | `32px` padding, `12px` border radius |
| How to Give page cards (Zelle/Cash App, Check by Mail) | `#6B4A2B` (dark brown) background | `12px` radius, `20px` padding |
| Donate page buttons | `#6B4A2B` (dark brown) background, pill-shaped (`50px` radius) | One-time and monthly sponsorship buttons |
| Homepage Option A "services" cards (proposed, unbuilt) | `#A67535` background, cream text | See Homepage Layout Concepts below |

---

## Home Page

**Hero (built):**
- Logo (transparent PNG, ~475px wide, centered) — tagline "Tutoring Sprinkled With Love" is baked into the logo image itself, not a separate text element
- Subheadline: "Free, culturally responsive reading instruction for children in underserved communities across Los Angeles County."
- Two CTA buttons: "Get Help" → Enroll page, "Support Our Work" → Donate page
- Gradient background concept: dark brown → golden-brown (top to bottom)

**Remaining sections (planned, not yet built as of last handoff) — full copy recovered 2026-06-21 from `brain/rokt-home-page-mockup.svg`, a wireframe mockup pulled from `inbox/`:**

- **Our Mission**
  > At Roots of Knowledge Tutoring, we believe every child deserves to read with confidence — and to see themselves reflected in what they read. We provide free, high-quality reading tutoring to children in grades K–5.
  >
  > We close literacy gaps. We strengthen academic confidence. We empower families.

- **How We Work**
  > Our tutoring is offered both **in person** — at trusted community centers, churches, and libraries near you — and **virtually**, so families can choose what fits best. Small groups and one-on-one. Focused attention from tutors who care.

- **Be Part of It** — heading + 3 audience cards:
  - "Get Help for Your Child" → Enroll page
  - "Become a Tutor" → Volunteer page
  - "Support Our Work" → Donate page

**Mockup nav order** (from the same SVG, may or may not match the live build): About · Programs · Enroll · Volunteer · Impact · Donate.

**Mockup footer copy:** "© 2026 Roots of Knowledge Tutoring · Contact: rootsofknowledgetutor@gmail.com · FB · TW" — confirms a footer contact line + social icons are part of the intended design (real social URLs still pending from Carol, see `todo-phase-a-website.md`).

**Key design decision:** the page title ("Home") should not display on the homepage — most homepages don't lead with the word "Home." Achieved on WordPress via CSS; in Next.js this is just a matter of not rendering a title component on the home route.

**Source file:** `brain/rokt-home-page-mockup.svg` — open directly to see the full visual layout (header, hero, mission band, how-we-work, three-card "Be Part of It" band, footer) at colors `#C58F41` (background), `#6B4A2B` (header/footer), `#FDF6EC` (text/cards).

---

## Homepage Layout Concepts (proposed, decision never confirmed)

Two widescreen wireframe directions were proposed as an alternative/evolution of the hero-based homepage above, inspired by Carol's marketing flyer. **No direction was ever chosen** — flagged as an open decision below.

### Option A — Split hero (photo left, content right)
1. Header (logo + nav, dark brown)
2. Hero — two columns: tutor/child photo left, headline + subheadline + CTA buttons right
3. Mission strip — full-width golden-brown band, 2–3 sentence mission statement
4. Three-column services section — "Our services," "Our approach," "Together we can" cards (`#A67535` background, cream text)
5. Three-column CTA row — "Get help for your child," "Become a tutor," "Support our work" (dark brown bar)
6. Footer

Pros: closest to the existing hero build, less rework, photo sits naturally next to content. Cons: more conservative visually.

### Option B — Full-width photo hero with text overlay
1. Header
2. Hero — full-width photo, dark-brown gradient overlay on left half, headline/subheadline/CTAs on top of overlay
3. Four-pill feature strip — "Early literacy focus," "Culturally responsive," "In-person & virtual," "Tutoring with love" (golden-brown band)
4. Two-column about/services section — prose left, services checklist card right
5. Three-column CTA row (dark brown)
6. Footer

Pros: more cinematic/modern, photo does more visual work. Cons: requires reworking the hero — the "Tutoring Sprinkled With Love" tagline is baked into the logo image, so Option B needs a decision on where that tagline lives if the logo becomes nav-only.

**This decision is naturally suited to the Next.js rebuild** (Phase B) rather than retrofitting WordPress — worth revisiting when Phase B starts rather than as WordPress polish work.

---

## About Page

**Layout (built on WordPress, card-based):**
- Founder Story card — 4 paragraphs (split from an original 3 at a natural break point for readability)
- Mission / Vision cards — side by side, equal height (Mission text is longer, so equal-height stretch matters)
- Core Values card — full width, heading + list with expanded descriptions (e.g. "Equity and access in education — every child deserves quality literacy support, regardless of income or background")

All four cards share the same visual treatment: `#A67535` background, `32px` padding, `12px` border radius, `#FDF6EC` cream text. This card pattern (consistent background/padding/radius/text-color across distinct content blocks) is a reusable Next.js component pattern — likely a single `Card` component with these as default Tailwind values.

**Known content bug (unresolved as of last site review):** the live site has "Academic excellence and accountability" appearing twice in the Core Values list, plus a third repeat as a standalone paragraph below the list. Needs dedup whenever this content is next touched, including in the Next.js copy.

---

## Donate / Support Our Work Page

**Structure:**
- Intro paragraphs
- "Ways to Give" heading
- One-time gift buttons: $25, $50, $100, Other — link to How to Give page
- Monthly sponsorship buttons: "$30/month — sponsors one child," "$60/month — sponsors two children" — link to How to Give page
- Volunteer callout (planned, not yet added as of last handoff)

**Language rule:** "Donate" in nav/buttons that link TO this page; "Support Our Work" (or similarly warm phrasing) in the page's own headings/content. Never "nonprofit," "501(c)(3)," or "tax-deductible" anywhere.

---

## How to Give Page

**Structure:**
- Intro / thank-you text
- "Zelle or Cash App" card — send to 310-597-3810, memo "Roots of Knowledge Tutoring"
- "Check by Mail" card — payable to "Roots of Knowledge Tutoring," call 310-597-3810 for address
- Volunteer callout with a "Contact us" link (was pointing to a Coming Soon placeholder until a real Contact page exists)

**Decision made:** no credit/debit card placeholder on this page — that section gets added only once Carol confirms Stripe.

---

## Source Material: Carol's Marketing Flyer

`docs/rokt-flyer.jpg` — Carol's print/social flyer, pulled from `inbox/` on 2026-06-21. This
is raw source material (not something we authored) and was the visual inspiration for the
Homepage Layout Concepts above. It also contains copy that doesn't exist elsewhere in this
repo and is a good source for the **Programs/Services** page and About/Mission framing:

> Every child deserves the opportunity to become a confident reader and successful learner.
>
> Roots of Knowledge Tutoring LLC is a culturally responsive literacy program dedicated to
> helping underserved students in Los Angeles County strengthen their reading skills, build
> academic confidence, and develop a lifelong love of learning.

**Our Services Include:**
- Early literacy support for students in Grades K–5
- Phonics, fluency, and reading comprehension instruction
- Small-group and one-on-one tutoring
- Culturally relevant and engaging learning materials
- Parent partnership and family engagement support

> At Roots of Knowledge, we believe that literacy is the foundation for opportunity. By
> meeting students where they are and providing personalized, high-quality instruction, we
> help young readers grow academically, socially, and emotionally.

> Together, we can close literacy gaps and empower the next generation of leaders.
> Building strong readers. Strengthening communities. Growing futures.

Tagline confirmed again here: **"Tutoring Sprinkled With Love."** Contact info on the flyer:
`rootsofknowledgetutor@gmail.com`, `roots-of-knowledge.com`.

The **services list above is the best current source for the still-unbuilt Programs/Services
page** — no other doc in this repo has it.

---

## Open items surfaced by these conversations (not yet resolved)

See the chat summary in this session for the full list with suggested options — kept out of this reference file since they're action items, not durable design facts.
