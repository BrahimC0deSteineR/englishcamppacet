<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

## Project rules
- Editable site content (programs, teachers, gallery, news, FAQs, school copy) lives in `src/content/*.ts` and contact/social settings in `src/config/site.ts`; pages only render it. Why: the school updates content in one place.
- Inquiry forms validate with zod schemas in `src/lib/inquiry.ts` and hand off to WhatsApp (`src/lib/whatsapp.ts`); there is no backend storage or payment flow. Why: informational site with no database in v1.
- Per-page SEO uses `pageHead()` from `src/lib/seo.ts` with canonical URLs on the production domain. Why: consistent metadata for local search.
- Shared header/footer/WhatsApp float are mounted in `src/routes/__root.tsx`. Why: one layout for every page.
