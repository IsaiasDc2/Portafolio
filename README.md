# Isaias Duran · Portfolio

Single-page portfolio for Isaias Duran, a junior full stack developer based in Argentina. It presents two main case studies, two smaller projects, a short profile, the stack, education and a contact form.

Live site: **https://isaiasdc2.github.io/Portafolio/**

The site is in Spanish and English. The interface is light only, built around a warm paper palette and a single ember accent ("Chapa y fragua"). All project data comes from real repositories, demos and UI captures. There are no invented metrics or placeholder testimonials.

![Portfolio social preview](public/og-image.png)

## Stack

| Layer | Choice |
| --- | --- |
| Framework | Next.js 16, App Router, Turbopack |
| UI | React 19, TypeScript, Tailwind CSS v4 |
| Motion | `motion/react` |
| Icons | Phosphor Icons |
| Dialog | Radix Dialog |
| Fonts | Space Grotesk, Inter, JetBrains Mono via `next/font` |
| Analytics | Vercel Analytics, enabled only when `VERCEL=1` |
| Deploy | Static export on GitHub Pages via GitHub Actions |

## Run locally

Requires Node.js 20.9 or newer.

```bash
npm install
npm run dev
```

Open `http://localhost:3000`. Development runs without a base path.

```bash
npm run build   # static export in out/, built for /Portafolio
npm run lint    # ESLint
```

To preview the production export exactly as GitHub Pages serves it, put `out/` inside a folder named `Portafolio` and serve the parent folder:

```bash
mkdir -p ../pages-root
cp -r out ../pages-root/Portafolio
npx serve ../pages-root
# http://localhost:3000/Portafolio/
```

## Structure

```text
src/
  app/
    layout.tsx        fonts, metadata, JSON-LD, locale script
    page.tsx          section order
    globals.css       light tokens, components, motion rules
    not-found.tsx     404 page
    robots.ts         robots.txt
    sitemap.ts        sitemap.xml
    manifest.ts       web app manifest
  components/         Navbar, Hero, projects, About, Skills, Education, Contact, Footer
  data/
    site.ts           all ES/EN interface copy and contact data
    projects.ts       featured projects, case studies, screenshots and smaller projects
    skills.ts         skill groups
    education.ts      timeline
    types.ts          project types
  lib/
    i18n.ts           L10n types
    utils.ts          cn() and withBasePath()
    use-reduced-motion.ts
  assets/images/      optimized WebP screenshots, diagrams and portrait
public/
  cv.pdf              one-page CV
  og-image.png        1200 × 630 social preview
  .nojekyll           keeps GitHub Pages from running Jekyll
.github/workflows/
  deploy.yml          lint, build and deploy to Pages
scripts/
  cv.html             editable source for the CV
  source/             original images used for the WebP assets
```

## Editing content

Most changes do not touch components.

- **Interface copy, email, GitHub, site URL:** `src/data/site.ts`. Every string uses `{ es, en }`.
- **Projects and case studies:** `src/data/projects.ts`. Keep `links` honest: use `private` or `email` for anything without a public URL.
- **Skills and timeline:** `src/data/skills.ts` and `src/data/education.ts`.
- **Images:** add a WebP to `src/assets/images`, import it in the data file and update the alt text in both languages. Featured cards use a 16:10 frame. The POS case study uses `image` for the main screenshot, `screenshots` for the gallery and `architectureImage` for the diagram.
- **CV:** edit `scripts/cv.html` and regenerate `public/cv.pdf` with any Chromium browser:

```bash
chrome --headless=new --disable-gpu --no-pdf-header-footer \
  --print-to-pdf=public/cv.pdf "file:///absolute/path/to/scripts/cv.html"
```

## Deploy to GitHub Pages

The repository deploys from `main` with `.github/workflows/deploy.yml`.

1. Push to `main`.
2. The workflow runs `npm ci`, `npm run lint`, `npm run build` and uploads `out/`.
3. `actions/configure-pages` enables Pages with GitHub Actions as the source.
4. The deploy job publishes `https://isaiasdc2.github.io/Portafolio/`.

`next.config.ts` sets `output: "export"`, `trailingSlash`, unoptimized images and `basePath: "/Portafolio"` for production. If the repository is renamed, update `repoName` there. `withBasePath()` prefixes plain public-folder links such as the CV; Next handles `<Link>`, `<Image>` and static imports.

The site URL defaults to `https://isaiasdc2.github.io/Portafolio` and can be overridden with `NEXT_PUBLIC_SITE_URL` for a custom domain. That value feeds canonical URLs, Open Graph metadata, JSON-LD, `sitemap.xml` and `robots.txt`.

## Accessibility and performance

- Semantic landmarks, one `h1`, visible focus rings and a skip link.
- The language control is keyboard accessible.
- The project dialog traps focus, closes with Escape and returns focus to the trigger.
- The POS screenshots open at full size in a new tab from the case study.
- Form errors are announced and focus moves to the first invalid field. The form never claims to send anything: it opens the visitor's mail client with the message prepared.
- `prefers-reduced-motion` disables reveals, typing, the cursor heat effect and the mobile menu motion without changing the layout.
- Images are local WebP files served through `next/image`; fonts are self-hosted by `next/font`.
- Lighthouse is run on the exported production build at `/Portafolio/`.

## Before publishing

These are real gaps in the available data. They are intentionally hidden or marked instead of filled with invented details.

| Item | Current state | Where to update |
| --- | --- | --- |
| Custom domain | Using the GitHub Pages URL | `NEXT_PUBLIC_SITE_URL` and `src/data/site.ts` |
| Education institution and year | Timeline says "Formación técnica · Argentina" | `src/data/education.ts` |
| English level | "Inglés técnico", self-assessed, no certificate listed | `src/data/site.ts` and `scripts/cv.html` |
| Professional photo | Cropped from a full-body shot; a brighter headshot would work better | `src/assets/images/portrait.webp` |
| POS demo | Repository and demo are private; the case study shows real UI screenshots and a demo is available on interview | `src/data/projects.ts` if a public demo is deployed |
| English CV | `public/cv.pdf` is Spanish only | `scripts/cv.html` plus a second PDF |

The POS Multi-Sucursal case study uses three real screenshots (sale, home and sign-in) plus its architecture diagram. Forja Gym and Tgamx link to their public demos and repositories.

## Contact

- Email: [isaduran644@gmail.com](mailto:isaduran644@gmail.com)
- GitHub: [github.com/IsaiasDc2](https://github.com/IsaiasDc2)
- LinkedIn: [linkedin.com/in/isaias-duran-671347421](https://www.linkedin.com/in/isaias-duran-671347421)

The copy, images, CV and project case studies belong to Isaias Duran.
