# Making changes

A practical playbook. Read [`site-rules.md`](site-rules.md) before changing any
wording — some phrasings are off-limits for legal reasons.

## The golden rule

**Pushing to `main` publishes immediately.** There is no staging step and no
"preview before publish" like WordPress.

So: **work on a branch, open a pull request, share the preview link.** Cloudflare
builds a preview URL for every branch. That's the difference between "let me
show you" and "it's already live."

```bash
git checkout -b fix-about-copy
# make the edit
git commit -am "Update the About page opening paragraph"
git push -u origin fix-about-copy
```

Cloudflare posts a preview URL for the branch. Once it's approved, merge to
`main` and it goes live.

## Changing text on a page

1. Find the page under `code/app/` — `about/page.tsx`, `programs/page.tsx`, etc.
2. Search for a distinctive phrase from the sentence you're changing.
3. Longer copy is often in a `const` array near the top of the file; that's
   usually the cleanest place to edit.
4. Check the change against [`site-rules.md`](site-rules.md).
5. Preview on a branch before merging.

## Adding a photo

1. Put the file in **`code/public/`**.
2. Reference it from the page as `/your-file.jpg` — `public/` is served from
   the site root.
3. Use `next/image` and match the pattern already used on that page.
4. **Size it first.** Images are served unoptimized (a static export can't run
   Next's optimizer), so a 5 MB photo stays 5 MB for every visitor.

## Changing colors or fonts

Don't hardcode a hex value into a component. Colors are CSS variables declared
in `code/app/globals.css` — see [`design-tokens.md`](design-tokens.md) for what
each one is for. Change it there and it changes everywhere.

## Changing anything responsive

Responsive rules are in `code/app/globals.css`, not inline — inline styles can't
express media queries.

The header collapses in **four measured stages**. Each breakpoint is the width
at which the previous layout stops fitting, and each is commented with the
measurement that produced it. If you change the nav's contents, **re-measure**;
don't guess a new breakpoint.

## Undoing something

**Fastest — the site is broken and you want it back now:**
Cloudflare → Deployments → find the last good one → **Rollback**.

**Proper — reverse the change in the code:**
```bash
git revert <commit>
git push
```

Ask an AI: *"The last change looks wrong. Revert it and tell me what you
undid."*

## Before you publish

- [ ] Wording checked against [`site-rules.md`](site-rules.md)
- [ ] `cd code && npm run build` passes
- [ ] Looked at it on a phone width, not just desktop
- [ ] Previewed on a branch if it's anything more than a typo

## Useful commands

```bash
cd code
npm install        # first time only
npm run dev        # local preview at http://localhost:3000
npm run build      # static export into code/out — catches errors before deploy
npx tsc --noEmit   # typecheck
```

If a CSS change seems to have no effect, `rm -rf code/.next` and restart the dev
server. Turbopack occasionally serves a stale stylesheet — see the gotchas in
[`how-the-site-works.md`](how-the-site-works.md).
