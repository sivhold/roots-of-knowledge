# Roots of Knowledge Tutoring — website

This repository holds the website for **Roots of Knowledge Tutoring (ROKT)**,
a K–5 reading tutoring service serving underserved communities across Los
Angeles County.

- Live site: **https://roots-of-knowledge.com**
- Preview site: **https://roots-of-knowledge.pages.dev**

## How this website works

There is no admin login and no visual editor like WordPress. The site's text
lives in files in this repository. When a file changes, the site rebuilds and
republishes itself automatically in about a minute.

Think of it as: **GitHub is the filing cabinet, Cloudflare is the printing
press.** You change the file; the press runs on its own.

The upside is that it's fast, hosting is free, there are no plugins to update,
and there's nothing to hack. The trade-off is that changes are made by editing
files rather than by typing into a web page.

## Making a change

The practical way to do this is to ask an AI assistant (Claude or ChatGPT) that
has access to this repository. This repo is set up so the AI reads the project's
rules automatically before it touches anything.

A good way to phrase a request:

> You have access to my website's GitHub repo, roots-of-knowledge. Read
> `AGENTS.md` first — it has the rules for this site. Then change the sentence
> on the About page that starts "Statistics show…" to say X. Work on a new
> branch and give me the preview link before anything goes live.

That last sentence matters. **Pushing straight to `main` publishes
immediately** — there's no "preview before publish" step. Asking for a branch
gives you a preview link to check first.

If something goes wrong: **Cloudflare → Deployments → Rollback** puts the
previous version back.

## Layout

| Folder | What's in it |
|---|---|
| `code/` | The website itself — everything that builds and deploys. |
| `ai-guidance/` | Background, decisions, and original source material. Start at [`ai-guidance/README.md`](ai-guidance/README.md). |

## For developers

```bash
cd code
npm install
npm run dev      # http://localhost:3000
npm run build    # static export to code/out
```

Next.js App Router, TypeScript, static export, deployed on Cloudflare Pages.
Cloudflare builds with root directory `code`, build command `npm run build`,
output directory `out`.
