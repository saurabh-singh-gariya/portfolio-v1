# Portfolio — Saurabh Singh Gariya

Single-page portfolio site. React 19 + TypeScript (strict) + Vite + Tailwind v4.

## Run it

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # typecheck + production build into dist/
npm run preview    # serve the production build
npm run lint
```

## Where things live

| What | Where |
|---|---|
| **All content** (name, roles, bullets, skills, awards) | `src/data/profile.ts` |
| Colours, both themes | `src/index.css` (`:root` = light, `.dark` = dark) |
| Sections | `src/components/` — one file per section |
| Scroll-reveal animation | `src/components/Reveal.tsx` + `src/hooks/useInView.ts` |
| Theme switching | `src/hooks/useTheme.ts` + the no-flash script in `index.html` |

Editing text means editing `profile.ts` only — no component holds copy.

## Your photo

The hero shows an `SSG` monogram until you add a photo. Drop a square image at
`public/portrait.jpg` and it appears automatically; if the file is missing the
monogram comes back on its own.

## Notes

- The résumé PDF is served from `public/Saurabh-Singh-Gariya-Resume.pdf`. Replace that file to update the download.
- Your phone number is in the PDF but deliberately not printed on the page — add it in `Contact.tsx` if you want it public.
- Theme follows the OS on first visit, then remembers your choice in `localStorage`.
- All animation is inside a `prefers-reduced-motion: no-preference` block, so it disables itself for users who ask.
