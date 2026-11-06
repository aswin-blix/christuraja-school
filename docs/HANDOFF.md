# Christuraja MHSS website — handoff

Redesign of **www.christurajamhss.com** (Christuraja Matriculation Higher Secondary School, Marthandam).
Built 2026-11-06. Resume from this file.

## Status

- Site built: home + 24 content pages + news (list and 5 items) + gallery + admissions form + alumni form + contact — 42 static routes.
- `npm run lint`, `tsc --noEmit` and `npm run build` pass. Checked visually at 1440px and 390px (no horizontal scroll, no console errors).
- Not deployed. See `DEPLOY-VERCEL.md`.

## Stack

Next.js 16 (App Router, Turbopack, cache components), React 19, TypeScript, Tailwind v4, Framer Motion, GSAP (+ `@gsap/react`), Lenis, lucide-react. Fonts are self-hosted in `src/fonts` (Fraunces soft-axis for headings, Manrope for body) — no Google Fonts request at build or runtime.

## Where things live

| What | Where |
|---|---|
| Brand colours, radii, fonts | `src/app/globals.css` (`:root` tokens → `@theme`) |
| School details, nav, stats, timings, links | `src/data/site.ts` |
| All About / Academics / Campus-life page copy | `src/data/pages.ts` (block-based; rendered by `src/components/Blocks.tsx`) |
| News | `src/data/news.json` — add an object, it appears everywhere |
| Gallery albums & videos | `src/data/gallery.json` |
| Photos | Placeholder blocks (`Placeholder` in `src/components/ui.tsx`) — swap for `next/image` once photos arrive |
| Logo | `src/components/Logo.tsx` — inline SVG emblem; replace with the school crest |
| Forms | `src/components/forms/FormShell.tsx` — posts JSON to `NEXT_PUBLIC_FORM_ENDPOINT`; without it, opens a pre-filled email |

## Decisions

- **Colours**: two colours only (Aswin's brief) — primary `#00A2E8` (the old site's blue) and white, plus grey for reading text and hairlines. Set once in `globals.css` as `--brand`, used through the `brand` utility (`bg-brand`, `text-brand`). Hover states invert blue and white rather than shifting shade. No gold accent, no tints or dark shades. Known trade-off: white on `#00A2E8` is about 2.9:1, below the WCAG AA minimum for text (4.5:1, or 3:1 for large text).
- Old nav structure kept in full (Home/About, Academics, Facilities → "Campus life", Misc/News, Gallery, Online Admission, Alumni, Contact), with clearer labels.
- Content pages are data-driven so adding a page = adding an object to `pages.ts`.
- Aadhaar number removed from the online form (collected at the office instead) — avoid storing it via an unsecured endpoint. Add back only if the form backend is secured.
- Draft pages are flagged `draft: true` in `pages.ts`; a notice shows **in development only**.

## Draft copy to confirm with the school

The old site blocked these pages before they could be read, so the copy is written from the school's own feature lists and typical practice:

- Academics: general directives, dress code & clubs, golden rules, student groups & houses, projects & counselling, PTA & staff committees, faculty.
- Campus life: medical care & transport, celebrations, community & relationships.
- News item "Admissions open for 2026–27" (marked `draft` in `news.json`).
- Admissions page: process steps and document list.
- Alumni page: reunion paragraph.
- Stats on the home page: 150+ teachers is an estimate; 55+ years, 3,000+ students and 100% results come from the old site.

## Open questions for the school

1. Logo / crest file and official colour codes.
2. Photos: campus, labs, principal, events (gallery albums listed in `gallery.json`).
3. Faculty list by department; PTA office-bearers.
4. Fee structure and bus routes (currently "available from the office").
5. YouTube IDs for the campus-tour videos; real Facebook/YouTube page URLs (`site.ts` has the generic ones from the old site).
6. Confirm all draft pages above.
7. Where should form submissions go? (Google Sheet via Apps Script is the plan — see `DEPLOY-VERCEL.md`.)

## Next steps

1. Get the items above from the school; replace placeholders.
2. Set `NEXT_PUBLIC_FORM_ENDPOINT` (Apps Script) and test the three forms.
3. Push to GitHub, deploy on Vercel, point `christurajamhss.com` at it.
4. Submit the sitemap (`/sitemap.xml`) in Google Search Console.
