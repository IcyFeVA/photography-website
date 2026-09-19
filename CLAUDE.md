# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm install
npm run dev      # Vite dev server on :3000, bound to 0.0.0.0 (reachable from a phone on the LAN)
npm run build    # -> dist/ (gitignored)
npm run preview  # serve the built dist/
npx tsc --noEmit # typecheck; there is no lint config and no test suite
```

## Architecture

A single-page marketing site for a Vancouver photographer: Vite + React 19 + TypeScript, react-router-dom v7, Tailwind v3, framer-motion, lucide-react, react-helmet-async.

- [App.tsx](App.tsx) holds every route, wrapped in a persistent `Header`/`Footer`. `ScrollToTop` forces `scrollTo(0,0)` on each navigation because the router keeps the scroll position otherwise.
- Each page renders `<SEO>` ([components/SEO.tsx](components/SEO.tsx)) with its own title/description/canonical. The home route also renders `<Schema>` (JSON-LD). `SEO` defaults `image` to `/og-image.jpg`, **which does not exist in `public/`** — add it or pass a real image if social previews matter.
- No backend, no CMS, no data fetching. Every piece of content is hard-coded (see below).
- Deployed on Vercel from `main`; pushing to `main` deploys. [vercel.json](vercel.json) rewrites all paths to `/index.html` for client-side routing. The live host is `www.pascalzirn.com` (the apex 307-redirects to it).

### Where content lives

- [constants.ts](constants.ts) — portfolio grid (`PORTFOLIO_COLUMNS`, three hand-balanced columns), testimonials, `IS_BOOKING_OPEN` (toggles the booking form vs. a "fully booked" message on /inquire), and `UNAVAILABLE_DATES`.
- [components/BookingForm.tsx](components/BookingForm.tsx) — availability is **hard-coded in the component**, not in config: `getNextDates` picks the next 12 Mon–Thu days (and still contains a hardcoded March start date), `getTimeSlotsForDate` returns the slots per weekday. Submissions go to a Formspree endpoint; the chosen date/time ride along as hidden inputs.
- `UNAVAILABLE_DATES` format: `'YYYY-MM-DD'` blocks a whole day, `'YYYY-MM-DD-4pm'` blocks one slot. The suffix must match the time slot with `:00 ` stripped and lowercased (`"4:00 PM"` → `4pm`).
- `/rhys-madison`, `/jessica-wong`, `/inoka-vera`, `/isis-vlotman` are per-client delivery pages with expiring Google Drive links. `/offer` and `/offers` are paid-ad landing pages, so their load behavior on phones matters more than the rest of the site.
- [public/sitemap.xml](public/sitemap.xml) is maintained by hand and currently omits the offer and client pages.

## Mobile performance rules

The site's audience arrives on phones, often from ads, so first paint on mobile is the metric that matters.

**Never use `filter: blur()` (Tailwind `blur-*`) for decorative background glows.** WebKit — every browser on iOS — paints non-composited blurs on the CPU, costing roughly 2.4 CPU-seconds per repaint at 3× pixel density, and it repeats on every full repaint (first paint, web font swap, …). This left /offer and /offers black for 10–20 seconds on phones before the content appeared all at once. Fixed in `03b29e8` by drawing the glows with `bg-[radial-gradient(...)]`, which is visually identical and effectively free. `backdrop-blur-*` is fine; it is composited.

Debugging technique that found it: Playwright WebKit under `systemd-run --user --scope -p CPUQuota=15%`, serving `dist/` through a bandwidth-throttled server. A desktop CPU hides this class of bug because WebKit parallelizes blur across cores. WebKit only reports `first-contentful-paint` once it unfreezes the layer tree, so FCP is a precise probe for "when did the user actually see something".

## Images

`public/img` holds WebP only, quality 90 (`836022a` converted 41 files, 74 MB → 5 MB; the PNG/JPG originals are in git history). Convert new images the same way and reference them as `/img/<name>.webp`:

```bash
magick input.png -quality 90 -define webp:method=6 public/img/name.webp
```

Images are plain `<img>` tags with no `srcset`, no lazy loading and no width/height, so file size is the only lever. Keep any single page's images well under 1 MB total.

## Tailwind gotchas

- [tailwind.config.js](tailwind.config.js) `content` lists files explicitly (`index.html`, `index.tsx`, `App.tsx`, `constants.ts`, `components/**`). A new top-level file with classes in it produces **no CSS** until it's added here.
- Tailwind v3's opacity scale has no `3` step: `bg-white/3` silently generates nothing (this is why the /offers glows were invisible). Use `bg-white/5` or `bg-white/[0.03]`.
- The theme defines `background`/`surface`/`subtle`/`text`/`muted` colors and the `font-serif` (Playfair Display) / `font-sans` (Inter) pairing; fonts load from Google Fonts in [index.html](index.html).
- Tailwind was migrated from the CDN script to a real build in `9689c64`. Don't reintroduce `cdn.tailwindcss.com`.

## Repo quirks

- [README.md](README.md) is the stale Google AI Studio template and doesn't describe this project.
- [vite.config.ts](vite.config.ts) defines `process.env.API_KEY` / `GEMINI_API_KEY` from `.env.local`, left over from that template. Nothing in the app reads them and there is no `.env.local`.
- `main` is the deploy branch: any push to it is a production release, so confirm before pushing.
