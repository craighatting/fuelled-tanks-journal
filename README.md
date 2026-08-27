# Fuelled — Tanks Journal

A small resource site for the *Fuelled* series (City Hill Church): the four
tanks (spiritual, emotional, mental, physical), grounded in Deuteronomy 6:5
and Luke 10:27, links to the 6-part video series, and a nightly journal —
set where each tank sits, jot what filled and drained them, and get a
Monday–Sunday weekly report.

No login, no backend. Everything is stored in the browser's `localStorage`,
so history is per-device.

## Pages

- `/` — overview: the four tanks, the verse, the three zones
- `/series` — the 6 parts, linking out to YouTube
- `/journal` — tonight's check-in
- `/journal/report` — weekly report

## Develop

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

Produces a fully static site in `build/` (via `@sveltejs/adapter-static`) —
deployable to any static host (Netlify, Vercel, Cloudflare Pages, GitHub
Pages, etc.). No server or database required.

## Editing content

- `src/lib/fuelled/series.ts` — the 6 part titles/links. Parts 1–3 are
  confirmed from the church's series page; parts 4–6 are marked
  `confirmed: false` pending the real titles — the series page shows an
  "title unconfirmed" badge until that's fixed.
- `src/lib/fuelled/journal.ts` — the tank/zone model and all the
  localStorage/date/report logic.
