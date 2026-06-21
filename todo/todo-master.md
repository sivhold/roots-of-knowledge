---
Parent:
---
---
## Setup / Housekeeping
- [x] Figure out overall folder structure ✅ 2026-06-20
	- [x] Code ✅ 2026-06-20
	- [x] Docs ✅ 2026-06-20
	- [x] ToDo ✅ 2026-06-20
- [ ] Go through the ROKT chat chats and conversations and import into this folder
	- [x] memory ✅ 2026-06-20
	- [x] instructions ✅ 2026-06-20
	- [x] files ✅ 2026-06-20
	- [x] go through each conversation in chat, have it make a handoff file based on the conversation name ✅ 2026-06-21
	- [x] Retrieve `ROKT-Flyer.jpg` and `rokt_home_page_mockup.svg` from the old claude.ai Project and drop into `inbox/` ✅ 2026-06-21 — processed, now at `docs/rokt-flyer.jpg` and `brain/rokt-home-page-mockup.svg`
- [ ] Set up git for the ROKT repo and add CLAUDE.md / MEMORY.md to version control 🔼
	- [ ] git init at the root ROKT folder
	- [ ] setup .gitignore	- [ ] 
- [ ] Work with claude code to design scaffolding for the ROKT website
	- [x] make sure vercel boilerplate is right for me (the `npx create-next-app@latest` with flags matching what's already decided in CLAUDE.md (App Router, TypeScript, Tailwind))	- [ ] ✅ 2026-06-21
	- [ ] setup basic boilerplate static 1 page website using standard next.js recommendations
		- [ ] run create-next-app into code/. If it detects it's already inside a git repo, it skips trying to init its own — avoiding a nested-repo mess
		- [ ] npx create-next-app@latest code --typescript --tailwind --app — runs the official Next.js setup tool without permanently installing it
		- [ ] Verfiy...
			- [ ] App Router
			- [ ] TypeScript
			- [ ] Tailwind
		- [ ] Run the website make sure it works
	- [ ] work with claude to work on overall design
	- [ ] include that I want all colors managed and changeable by constants (dark-background, light-background, mid-background)
	- [ ] page layout
		- [ ] Header
		- [ ] Footer
		- [ ] page content
	- [ ] pages
		- [ ] home
		- [ ] about
		- [ ] etc...
	- [ ] research if inline css is still popular (that is the way I handled css previously)
	- [ ] create more detailed todo list for the project
	- [ ] Create .md files for every files we plan to build out later
	- [ ] go through each .md file one by one
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