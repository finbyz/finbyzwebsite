# AGENTS.md - Finbyz Next.js Project

## Key Commands

```bash
npm run dev          # Start dev server
npm run build       # Production build
npm run lint       # Lint code
npm run generate-page --name <name>  # Generate page from JSON
```

## Environment

Create `.env.local` with:
```
FRAPPE_URL=https://erp.finbyz.tech
```
(Must also include `FRAPPE_API_KEY` and `FRAPPE_API_SECRET` values from `.env`)

## Path Aliases

- `@/*` → `./src/*`
- `@ai_components/*` → `./src/components/ai_components/*`
- `@ai_agent_components/*` → `./ai_agent_components/*`

## Page Types - How to Identify

When a user requests a page, identify the type from these keywords/signals:

### 1. webpage (Landing/Marketing)
**Keywords**: landing, home, services, features, about, contact, pricing, hero, cta, banner
**Signals**: Needs hero section, services grid, testimonials, CTA buttons, marketing content
**Examples**: "create a landing page", "services page for consulting", "product features page"
**Component Pattern**: Hero → Services → Testimonials → CTA sections

### 2. blogpost (Article/Blog)
**Keywords**: blog, article, post, read, insight, opinion, guide, how-to, tips
**Signals**: Long-form text, author, date, read time, introduction/body/conclusion
**Examples**: "create a blog post", "how-to article", "industry insights article"
**Component Pattern**: Hero → Text sections (markdown) → FAQ → Related content
**Path**: `src/app/(blogs)/blogs/`

### 3. code-snippet (Dev Tutorial)
**Keywords**: code, snippet, tutorial, developer, python, frappe, erpnext, api, function, hook, script
**Signals**: Code blocks, programming content, difficulty level, language specified
**Examples**: "code tutorial", "Frappe how-to", "API guide"
**Component Pattern**: Hero → Code blocks → Explanation sections
**Path**: `src/app/(dev-insights)/erpnext/wiki/`

### 4. gallery (Video/Image Collection)
**Keywords**: gallery, video, tutorial, watch, playlist, media, youtube, screenshots
**Signals**: YouTube embeds, image gallery, video list, media viewer
**Examples**: "video gallery", "tutorials collection", "media gallery"
**Component Pattern**: Hero → Media viewer with sidebar → Video/Image grid
**Path**: `src/app/(galleries)/[...slug]/`

## Existing Page Templates

Reference these for structure:
- `src/app/(blogs)/blogs/page.tsx` - Blog list
- `src/app/(galleries)/[...slug]/Tutorials.tsx` - Gallery renderer
- `src/app/(dev-insights)/erpnext/wiki/` - Code snippet pages

## graphify

This project has a graphify knowledge graph at .opencode/graphify-out/.

Rules:
- Before answering architecture or codebase questions, read graphify-out/GRAPH_REPORT.md for god nodes and community structure
- If graphify-out/wiki/index.md exists, navigate it instead of reading raw files
- For cross-module "how does X relate to Y" questions, prefer `graphify query "<question>"`, `graphify path "<A>" "<B>"`, or `graphify explain "<concept>"` over grep — these traverse the graph's EXTRACTED + INFERRED edges instead of scanning files
- After modifying code files in this session, run `graphify update .` to keep the graph current (AST-only, no API cost)
- always return url (development web.finbyz.com) of page that needs to check after creation or updation of page
