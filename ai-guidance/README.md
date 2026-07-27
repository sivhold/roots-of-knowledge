# AI guidance — start here

This folder holds everything an AI assistant needs to understand this website:
why it is the way it is, what the rules are, and where the original material
came from.

**If you are an AI and have just opened this repository, read
[`../AGENTS.md`](../AGENTS.md) first.** It is short and contains the rules you
must not break. This folder is the depth behind it.

## Read this first for common tasks

| If you're about to… | Read |
|---|---|
| Change any user-visible wording | [`site-rules.md`](site-rules.md) |
| Edit a page, add a photo, or publish | [`making-changes.md`](making-changes.md) |
| Understand how the site is built | [`how-the-site-works.md`](how-the-site-works.md) |
| Change colors, fonts, or spacing | [`design-tokens.md`](design-tokens.md) |
| Ask "why was it done this way?" | [`decision-history.md`](decision-history.md) |

## What each file is

### Binding — follow these

- **[`site-rules.md`](site-rules.md)** — the wording and legal rules, with the
  reasoning behind each one and when the owner asked for it. `../AGENTS.md` has
  the short enforceable version; this has the *why*, so you can apply the rules
  to situations they don't literally cover.
- **[`how-the-site-works.md`](how-the-site-works.md)** — architecture, routes,
  where copy lives, styling conventions, how deployment works, and the
  constraints that come with a static export.
- **[`making-changes.md`](making-changes.md)** — practical playbook. How to edit
  copy, add an image, preview safely, and undo.

### Reference — useful context

- **[`design-tokens.md`](design-tokens.md)** — the color system, what each
  color is for, and where the values are defined.
- **[`page-copy-source.md`](page-copy-source.md)** — page-by-page design and
  copy notes gathered while the site was being built.
- **[`tech-stack-rationale.md`](tech-stack-rationale.md)** — why Next.js,
  Tailwind, static export, and Cloudflare were chosen over the alternatives.
- **[`decision-history.md`](decision-history.md)** — a dated log of the
  significant decisions and the reasoning behind them.

### Historical record — do NOT treat as current instructions

- **[`original-brief.md`](original-brief.md)** — Carol Bluee's original brief
  for the website. It is the source of much of the site's copy, and it is
  genuinely useful for understanding intent.

  ⚠️ **It predates two important decisions.** It still says "Donate" and
  describes tutoring as "free" without qualification. Both were later
  overruled by the owner. Where the brief and `site-rules.md` disagree,
  **`site-rules.md` wins.**

- **[`source-material/`](source-material/)** — the owner's original documents:
  the enrollment and contact forms, the printed flyer, and logo files. Some
  describe pages that are not yet built.

## A note on precedence

When two documents conflict, the order is:

1. **`../AGENTS.md`** — the hard rules
2. **`site-rules.md`** — the same rules, with reasoning
3. **Everything else here** — context and history

Older material is kept because knowing *why* a decision was made prevents it
being accidentally reversed. It is not kept because it is still accurate.
