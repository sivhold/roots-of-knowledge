---
Parent:
---
---
## Setup / Housekeeping
- [x] Figure out overall folder structure ✅ 2026-06-20
	- [x] Code ✅ 2026-06-20
	- [x] Docs ✅ 2026-06-20
	- [x] ToDo ✅ 2026-06-20
- [x] Go through the ROKT chat chats and conversations and import into this folder ✅ 2026-06-21
	- [x] memory ✅ 2026-06-20
	- [x] instructions ✅ 2026-06-20
	- [x] files ✅ 2026-06-20
	- [x] go through each conversation in chat, have it make a handoff file based on the conversation name ✅ 2026-06-21
	- [x] Retrieve `ROKT-Flyer.jpg` and `rokt_home_page_mockup.svg` from the old claude.ai Project and drop into `inbox/` ✅ 2026-06-21 — processed, now at `docs/rokt-flyer.jpg` and `brain/rokt-home-page-mockup.svg`
- [x] Set up git for the ROKT repo and add CLAUDE.md / MEMORY.md to version control ✅ 2026-06-21
	- [x] git init at the root ROKT folder ✅ 2026-06-21
	- [x] setup .gitignore ✅ 2026-06-21
	- [x] Create GitHub repo (`sivhold/roots-of-knowledge`) and push initial commit ✅ 2026-06-21
- [x] Work with claude code to design scaffolding for the ROKT website ✅ 2026-06-22
	- [x] make sure vercel boilerplate is right for me (the `npx create-next-app@latest` with flags matching what's already decided in CLAUDE.md (App Router, TypeScript, Tailwind))	- [ ] ✅ 2026-06-21
	- [x] setup basic boilerplate static 1 page website using standard next.js recommendations ✅ 2026-06-22
		- [x] run create-next-app into code/. If it detects it's already inside a git repo, it skips trying to init its own — avoiding a nested-repo mess ✅ 2026-06-21
		- [x] npx create-next-app@latest code --typescript --tailwind --app — runs the official Next.js setup tool without permanently installing it ✅ 2026-06-21
		- [x] Verfiy... ✅ 2026-06-21
			- [x] App Router ✅ 2026-06-21
			- [x] TypeScript ✅ 2026-06-21
			- [x] Tailwind ✅ 2026-06-21
		- [x] Run the website make sure it works ✅ 2026-06-21
	- [x] work with claude to work on overall design ✅ 2026-06-21
		- [x] color constants — rokt-dark #6B4A2B, rokt-mid #C58F41, rokt-light #FDF6EC in tailwind.config.ts ✅ 2026-06-21
		- [x] research if inline css is still popular — decided: Tailwind utilities ✅ 2026-06-21
		- [x] page layout (Header, Footer, page content) — see [[todo-nextjs-design|Next.js Design & Scaffolding]] §2 ✅ 2026-06-21
		- [x] pages (home, about, etc.) — 7 pages planned, see [[todo-nextjs-design|Next.js Design & Scaffolding]] §3 ✅ 2026-06-21
		- [x] create more detailed todo list — [[todo-nextjs-design|Next.js Design & Scaffolding]] ✅ 2026-06-22
		- [ ] Create .md sidecar files for every planned code file — see todo-nextjs-design.md §6
		- [ ] go through each .md file one by one — see todo-nextjs-design.md §6
- [ ] Make sure Claude Code also has full read/write access to the same brain folder
	- [x] Add folder for the code ✅ 2026-06-20
	- [ ] Add .md sidecar files for every code file
- [ ] Import the ToDo template and ai guidance from work to use here ⏫ 📅 2026-06-22
- [ ] Verify Claude Code correctly reads CLAUDE.md and MEMORY.md (run `/memory` in a Claude Code session) 🔽

## Phase A — Finish WordPress.com Site (active)
- [ ] [[todo-phase-a-website|Phase A: Website Build]]

## Phase B — Next.js Migration (active as of 2026-06-21 — started early, see CLAUDE.md)
- [ ] [[todo-nextjs-migration|Next.js Migration]]
- [ ] [[todo-copy-wordpress-content|Copy WordPress Content for Migration]]

## Claude Chat Integration
- [ ] [[todo-claude-chat-integration|Bring ROKT Context into Claude Chat]]