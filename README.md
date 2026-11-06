# Christuraja MHSS — website

Redesign of [christurajamhss.com](http://www.christurajamhss.com) for Christuraja Matriculation Higher Secondary School, Marthandam (founded 1971, Daughters of Mary).

Next.js 16 App Router · React 19 · TypeScript · Tailwind v4 · Framer Motion · GSAP · Lenis.

```bash
npm install
npm run dev      # http://localhost:3000 (LAN IP access: see allowedDevOrigins in next.config.ts)
npm run lint
npm run build && npm start
```

Copy `.env.example` to `.env.local` to configure the form endpoint.

- Content lives in `src/data/` (site details, pages, news, gallery) — no code changes needed to update it.
- Design tokens live in `src/app/globals.css`. The site uses two colours, `#00A2E8` (`--brand`) and white, plus grey for text.
- Status, decisions and open questions: `docs/HANDOFF.md`. Deployment: `docs/DEPLOY-VERCEL.md`.
