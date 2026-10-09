# adam-gajek-dev

Personal portfolio of Adam Gajek, .NET developer. Static site built with [Astro](https://astro.build), English at `/` and Polish at `/pl/`, hosted for free on Cloudflare Pages.

## Develop

```sh
npm install
npm run dev        # http://localhost:4321
npm run build      # static output in dist/
npm run preview    # serve dist/ locally
```

## Edit content

All text lives in `src/i18n/content.ts`, one object per language. Both languages must state the same facts as the CV.

| What | Where |
| --- | --- |
| Text, roles, skills, contact | `src/i18n/content.ts` |
| Layout and markup | `src/components/Portfolio.astro` |
| Colors, type, spacing, motion | `src/styles/global.css` (tokens at the top) |
| Theme toggle, nav highlight, copy button | `src/scripts/ui.ts` |
| Share image | `public/og.png` (1200×630) |

## Deploy

One-time login:

```sh
npx wrangler login
```

Then every deploy:

```sh
npm run deploy     # builds and uploads dist/ to the Cloudflare Pages project "adam-gajek"
```

Production URL: https://adam-gajek.pages.dev
