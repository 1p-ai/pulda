---
name: External static builds
description: Rules for keeping Pulda's Astro dependency installation portable outside Replit
---

Production dependency installation must remain portable outside Replit: do not run Playwright browser installation from the root `postinstall`, and do not commit lockfiles tied to a Replit-only registry.

**Why:** Cloudflare Pages installs dependencies with a clean npm install before building; local test-browser setup and private registry URLs can fail before Astro starts.

**How to apply:** Keep browser installation as an explicit E2E setup command. Before external deployment, verify a clean npm install and the full QA command in the static app directory.