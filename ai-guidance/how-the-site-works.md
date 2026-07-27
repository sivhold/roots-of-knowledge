# How the site is built

## The short version

A Next.js App Router site that compiles to **plain static HTML**. There is no
server, no database, and no CMS. Pushing to `main` on GitHub triggers a
Cloudflare Pages build, which publishes the result. A change is live about a
minute after it is pushed.

## Stack

| Piece | Choice |
|---|---|
| Framework | Next.js, App Router |
| Language | TypeScript |
| Output | Static export (`output: "export"`) |
| Hosting | Cloudflare Pages |
| Fonts | Lora (headings) + Source Sans 3 (body), via `next/font/google` |
| Styling | Inline `style={{}}` objects, plus `app/globals.css` |

Cloudflare build settings: root directory **`code`**, build command
**`npm run build`**, output directory **`out`**.

## Pages

All seven routes live under `code/app/`. Each is a folder with a `page.tsx`.

| Route | File | State |
|---|---|---|
| `/` | `app/page.tsx` | Complete |
| `/about` | `app/about/page.tsx` | Complete |
| `/programs` | `app/programs/page.tsx` | Complete |
| `/sponsorship` | `app/sponsorship/page.tsx` | Complete |
| `/enroll` | `app/enroll/page.tsx` | **Placeholder** |
| `/impact` | `app/impact/page.tsx` | **Placeholder** |
| `/volunteer` | `app/volunteer/page.tsx` | **Placeholder** |

The three placeholders render a shared `components/PlaceholderPage.tsx` —
a real page with working email and phone contact, rather than a "coming soon"
stub. When one gets a full design, its `page.tsx` simply stops importing
`PlaceholderPage`.

The Sponsorship page is split into parts because it is interactive:
`GiftChooser.tsx` (amount picker), `CardGiving.tsx` (card section),
`DonateMethods.tsx` (payment methods and the coming-soon modal). Those
filenames still use the old "Donate/Gift" vocabulary internally — that is
historical, and invisible to visitors. All user-facing copy is sponsorship
language.

## Where the copy lives

**Copy is hardcoded in the `.tsx` files.** There is no CMS and no content
layer. To change a sentence, edit the page component that contains it.

Longer page copy is usually lifted into a `const` array near the top of the
file (for example `storyParagraphs` in `about/page.tsx`) — that's the easiest
place to look first.

## Styling conventions

**Styling is inline `style={{}}`**, not Tailwind utility classes. Tailwind is
installed and its `@theme` block defines the color tokens, but the components
themselves use inline style objects. Match what's around you.

- **Color tokens** are CSS variables (`--color-rokt-dark`, `--color-rokt-accent`,
  and so on), declared in `app/globals.css` in both `@theme` and `:root`.
  They must be in both — Tailwind v4 `@theme` tokens are not reliably available
  to `var()` inside inline styles. See `design-tokens.md`.
- **Eyebrow labels** (the small uppercase text above a section heading) come
  from `lib/typography.ts`. Import it. Do not redeclare the style locally —
  it used to be copy-pasted into six files and drifted out of sync.
- **Media queries cannot be expressed inline.** Anything responsive lives in
  `app/globals.css`. The header's four-stage collapse is there, with each
  breakpoint commented with the measurement that produced it.

## Constraints of a static export

These are the things that will surprise you:

- **No server.** No API routes, no server actions, no server-side rendering, no
  database. Anything needing a request handler will not build.
- **`redirects()` in `next.config.ts` does nothing.** It is a server feature.
  Redirects live in `code/public/_redirects`, read by Cloudflare Pages.
- **Images are unoptimized** (`images: { unoptimized: true }`). Next's image
  optimizer needs a server, so files are served as-is. Size images before
  adding them.
- Anything in `code/public/` is copied to the output root as-is.

## Deployment

```
push to main  →  Cloudflare builds  →  live in ~1 minute
```

There is **no staging step**. A push is a publish.

- Branches get their own Cloudflare preview URL — the safe way to review a
  change before it goes live.
- **Rollback:** Cloudflare → Deployments → Rollback. Fast, and the right first
  move if something breaks.
- `roots-of-knowledge.pages.dev` is the preview site;
  `roots-of-knowledge.com` is live.

## Known gotchas

- **Turbopack can serve a stale stylesheet.** Edits to `globals.css` sometimes
  don't reach the browser, even after restarting the dev server. Only
  `rm -rf .next` clears it. If a CSS change appears to do nothing, suspect this
  before rewriting the CSS.
- **Renaming a route requires clearing `.next`.** A stale generated
  `validator.ts` will otherwise fail the build referencing the old path.
- **`npm run build` fails with `EPERM`** if a dev server is running and holding
  `.next`. Stop the dev server first.
- **JSX drops the space between `</strong>` and a following `&mdash;`.** Use an
  explicit `{" "}` when a dash follows a tag.

## Not yet built

- The payment buttons (card, Cash App, Venmo, PayPal, Square) all open a
  "coming soon" modal. None are wired to a real destination.
- `og:image` is not set, so links shared to social media or text message
  preview without an image.
- Enroll, Impact, and Volunteer need full designs.
