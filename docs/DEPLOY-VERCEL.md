# Deploying to Vercel

1. **Push to GitHub**
   ```bash
   git remote add origin git@github.com:aswin-blix/christuraja-school.git
   git push -u origin main
   ```
2. **Create the Vercel project** — import the repo, framework "Next.js", Node 22, build command `next build` (default). No special settings needed; all routes are static.
3. **Environment variables**
   - `NEXT_PUBLIC_FORM_ENDPOINT` — URL of the form backend (optional; without it forms fall back to a pre-filled email to the school's Gmail).
4. **Form backend (Google Apps Script)**
   - Create a Google Sheet with three tabs: `Admissions`, `Alumni`, `Enquiries`.
   - Apps Script `doPost(e)`: parse `JSON.parse(e.postData.contents)`, pick the tab from the `form` field, append a row with a timestamp and the values, optionally `MailApp.sendEmail` the school's address. Deploy as a web app ("Anyone" can access) and paste the URL into the env var.
   - The site posts with `Content-Type: text/plain` so no CORS preflight is needed.
5. **Domain** — add `christurajamhss.com` and `www.christurajamhss.com` in Vercel → Domains; update the A/CNAME records at the registrar. Keep the `metadataBase` in `src/app/layout.tsx` in sync with the final domain.
6. **After go-live** — submit `https://www.christurajamhss.com/sitemap.xml` in Google Search Console; check the old `.aspx` URLs — add `redirects()` in `next.config.ts` if the school wants them preserved (e.g. `/frm_HistoryOfSchool.aspx` → `/about/history`).
