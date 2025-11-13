## Project snapshot

This repo is a small static marketing/site landing page for the ARTICYST project. Key files:

- `index.html` — single-page, semantic sections (hero, summary, about, solution, contact, etc.).
- `script.js` — tiny vanilla JS for mobile nav and a demo contact form handler.
- `style.css` — site styling using CSS custom properties (e.g. `--brand`, `--radius`) and a simple responsive grid.
- `assets/` — images and the site logo used by the page.

## Big picture / architecture

- This is a static front-end only site with no build system or server-side code in the repo. The site is intended to be hosted as static files (GitHub Pages, static web host, or a simple static server).
- Data flows are local/browser-only: the contact form is demo-only and handled client-side in `script.js` (no network requests). If you add real API integration, update the form handler in `script.js` and document the endpoint and CORS requirements.

## Developer workflows (how to run & validate)

- Quick local preview: open `index.html` in a browser. For realistic testing (CSP / fetch behavior), run a local static server:

  - PowerShell / Python: `python -m http.server 8000`
  - Node (optional): `npx http-server -p 8000`

- Validation checklist for changes:
  - Visual: open the page, verify hero image, nav toggle, and responsive layout (>=860px and <=720px breakpoints used in `style.css`).
  - JS behavior: click the nav toggle, click nav links on mobile (should close), submit contact form (demo message appears; see `script.js`).
  - Console: ensure no JS errors in the browser console.

## Project-specific conventions & patterns

- Styling:
  - CSS variables are the source of truth for theming (`--brand`, `--brand-2`, `--text`, `--bg`, `--card`). Prefer these when adding colors.
  - Layout uses a `.container` width helper: `width: min(1100px, 92vw)` — keep this when adding new page sections to align with the existing layout.
  - Two-column grid at `@media (min-width: 860px)` is implemented via `.grid` and `.card-body` — follow this pattern for new cards or feature blocks.

- JavaScript:
  - Vanilla DOM API only (no frameworks, no bundler). Small, focused functions attached to elements in `script.js` (nav toggle, contact form). Keep code simple and unobtrusive.
  - Use `?.` and feature-detection guards like `if (form) { ... }` when referencing DOM nodes to avoid errors.

## Integration points and external dependencies

- External resources used:
  - Google Fonts are loaded via link in `index.html` — when offline testing, fonts may fall back to system fonts.
  - All other assets are local under `assets/`.

- There is no backend in this repo. Any integration with APIs should be documented in a new markdown file (e.g. `docs/backend-integration.md`) and the contact form should be updated to POST to the endpoint.

## Examples (where to change things)

- To add a new section: create a semantic `<section id="your-id" class="section">` in `index.html`, add markup inside a `.container`, and style with the existing utility classes (`.card`, `.card-body`, `.grid`). See `#summary` and `#about` as examples.
- To change the primary color: update `--brand` and `--brand-2` in `style.css` root.
- To wire a real contact endpoint: edit `script.js` — replace the demo handler inside `form.addEventListener('submit', ...)` with a `fetch()` call and handle errors; remember to document the endpoint URL and required fields.

## What the AI agent should and should not do

- Do: make minimal, localized edits that follow existing HTML structure and CSS variables. Prefer readable, well-commented changes.
- Do: run the page locally after changes and verify visual and JS behavior in both desktop and mobile widths.
- Do not: introduce a build system or new heavy dependencies unless explicitly requested — this repo is intentionally simple.

## Quick notes for reviewers

- No tests or CI configured; add CI only if you introduce build steps or automated checks.
- Document any added external APIs, environment variables, or deployment steps in `README.md` (create it if missing).

---

If any section is incomplete or you'd like more detail (deployment guidance, CI, converting to a multi-page site, or adding an API integration example), tell me which part to expand and I'll update this file.
