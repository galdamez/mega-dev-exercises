# kb — the support knowledge base

**kb** = knowledge base. What the support desk knows about how our products break, written
down where the code can keep it honest.

One desk takes reports for every product we run: `sched-prod` (calendar invites for about
300k people) and the rest. When something
goes wrong, the reports reach the desk first. This kb is how the desk triages them, what each
incident turned out to be, and why we decided what we decided.

## What's here

```
src/routes/kb/      the pages (.svx: Markdown with components)
  triage/           how the desk handles incoming reports
  incidents/        one page per big ticket
  decisions/        numbered decision records
src/lib/kb/         components and the logic they run
src/lib/layouts/    the frame every page shares
src/lib/data/       exports from the ticket system
```

## Conventions

- Words in the page, logic in `src/lib` (imported as `#lib/…`). A number that can be computed belongs in a component.
- Every page starts with frontmatter: `title`, `owner`, `status`, `reviewed`.
- A decision is never edited after it is accepted. A new record replaces it.
- A page you add is signed: its frontmatter carries your `signature` and it ends with `<RenderStamp {signature} />`, so the desk knows who wrote it.

## Owners

Support desk. Decision records: whoever signed them.

## Challenge page preview

The revised #4471 page is in `src/routes/kb/incidents/4471/+page.svx`. The app is configured
with SvelteKit and MDsveX so the route is compiled and rendered from its source. With Node.js
20.19+ or 22.12+, run `npm ci`, `npm run check`, and `npm run build` to generate the static
site in `preview/site/`. Open `preview/site/kb/incidents/4471/index.html` to inspect the
rendered page.

---

Exported 2026-10-04 from the `support` repo, `apps/kb/` → `src/`.
