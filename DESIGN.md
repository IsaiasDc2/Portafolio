# Design notes

This document explains the visual and interaction decisions behind the portfolio. It is meant for anyone editing the site later, not as a general design manifesto.

## Direction

The portfolio uses a single light palette: warm paper, near-black ink and one ember accent. The internal name for the direction is "Chapa y fragua" (sheet metal and forge). The hero name behaves like a metal sheet: it is oversized, masked and heats up near the pointer. There is no theme switch, no dark mode and no decorative particle layer.

Three rules shaped the work:

1. **The projects carry the page.** The hero is a short poster, the work index jumps straight to the case studies, and screenshots or diagrams never compete with decoration.
2. **Every claim is traceable.** Real repositories, real demos, real counts and real UI captures. No skill percentages, no invented client names, no fake testimonials.
3. **Motion explains, then gets out of the way.** Entrances are short, the heat effect follows the pointer and everything stops for `prefers-reduced-motion`.

The tone stays first person and concrete. Copy avoids "passionate about technology", "cutting-edge" and similar filler.

## Visual language

- **Paper:** `#F3EFE6` background with `#FAF7F0` cards and `#E9E3D6` secondary surfaces.
- **Ink:** `#17140F` for text and the logo tile.
- **Ember:** `#B93A0A` for links, labels and the primary button. `#FF5A14` is reserved for the heat spot in the hero name.
- **Hairlines:** 1px borders in warm gray. Shadows are subtle and only lift floating cards, frames and the modal.
- **No texture:** the old grid, radial glow and noise layers were removed. The paper color and type carry the page.
- **Frames:** project images sit inside a browser chrome with three dots and a URL. When the project has a real screenshot, the frame shows it and the badge says "Captura real".

## Tokens

All tokens live in `src/app/globals.css`. Components use the semantic names, not the raw palette.

| Token | Value |
| --- | --- |
| `--bg` | `#F3EFE6` |
| `--surface` | `#FAF7F0` |
| `--surface-2` | `#E9E3D6` |
| `--surface-3` | `#DDD5C4` |
| `--border` | `#DDD5C4` |
| `--border-strong` | `#B9AF9B` |
| `--text` | `#17140F` |
| `--muted` | `#5A5347` |
| `--muted-2` | `#6B6254` |
| `--accent` | `#B93A0A` |
| `--accent-2` | `#9A3412` |
| `--heat` | `#FF5A14` |
| `--success` | `#15803D` |
| `--danger` | `#B91C1C` |

Other decisions:

- Container: `1100px`, with `clamp(1.25rem, 5vw, 2rem)` side padding.
- Nav height: `72px`, used by scroll padding and sticky offsets.
- Radii: `18px` for image frames, `16px` for cards, `12px` for buttons, pills for tags.
- Section spacing: `clamp(4rem, 9vw, 7.5rem)`.
- Focus ring: 2px accent with a 3px offset.

The browser-bar badge sits on `--surface-2`, where the accent lands at 4.47:1. It uses `--accent-2` (`#9A3412`) to stay above 4.5:1. Placeholder text uses `--muted-2`, which is darker than the old light-theme placeholder token for the same reason.

## Typography

| Role | Family | Usage |
| --- | --- | --- |
| Display | Space Grotesk | Hero name, section titles, project names, dialog titles |
| Body | Inter | Paragraphs, labels, buttons, navigation |
| Meta | JetBrains Mono | Indexes, years, stack tags, small labels |

- Hero name: `clamp(4.5rem, 17vw, 14rem)`, line-height `0.86`, tracking `-0.045em`.
- `display-1`: `clamp(2.75rem, 6.5vw, 4.5rem)`, used by the 404 page.
- `display-2`: `clamp(1.9rem, 4vw, 2.75rem)`, for section and project titles.
- `display-3`: `clamp(1.25rem, 2vw, 1.5rem)`, for cards and dialog titles.
- `mono-label`: uppercase, wide tracking, used for indexes and field labels.
- Body measure stays around 60 to 68 characters.

Fonts load through `next/font`, so there is no render-blocking request to a third party.

## Page structure

1. **Navbar:** fixed, transparent at the top, blurred paper surface after 16px of scroll. Active section tracked with `IntersectionObserver`. A thin spring-driven scroll progress line sits at the bottom edge.
2. **Hero:** availability, oversized masked name, typed role, lead paragraph, projects/contact/CV actions, a two-row work index and a small portrait of the current featured screenshot.
3. **Featured projects:** two alternating rows. Each has a browser-framed image, metadata, a short pitch, stack tags, links and a case-study button. The POS row uses its real sale screen.
4. **More projects:** two cards for Forja Gym and Tgamx, then a link to the rest of GitHub.
5. **About:** portrait with a caption, two paragraphs, four facts and a short "looking for" note.
6. **Skills:** six groups. Names only, no bars or percentages.
7. **Education and experience:** a vertical timeline and a sticky CV card.
8. **Contact:** direct contact rows on the left, form on the right, plus a response-time note.
9. **Footer and 404:** compact, same tokens, no new patterns.

The case-study dialog opens from both the image and the "Read case study" button. It is a real dialog built with Radix, with a sticky header, the main screenshot, and sections for problem, solution, role, screenshots, architecture, challenges, results and improvements.

The POS case study contains:

- the sale screen as the main image and project card;
- a two-column gallery with the home panel and sign-in screen, each linked to the full-size file;
- the architecture diagram inside the architecture section.

## Motion

- Hero name lines are painted from the start; a paper curtain lifts off each line with a 90ms stagger.
- The pointer heats the name through an `aria-hidden` copy with a radial gradient clipped to the glyphs. The visible copy stays solid ink, so the name is painted as normal text on the first frame. The hot spot follows with inertia (lerp) and only runs on fine pointers. It is disabled for reduced motion and falls back to solid text in forced-colors mode.
- The work rows slide 12px to the right on hover and the arrow moves with them.
- Section content uses a `Reveal` wrapper: 24px rise, fade, 550ms, triggered once at `-80px` from the viewport.
- The mobile menu slides from the right; the project dialog scales from 0.96 with a fade.
- `MotionConfig reducedMotion="user"` plus a hydration-safe `useReducedMotionSafe` hook keep server and client markup in sync. The hook returns `false` on the server and the real preference after hydration.

## Interaction and accessibility

- Skip link to `#contenido`.
- One `h1`, labeled sections and `aria-current="location"` on the active nav item.
- Radix handles focus trapping, Escape and focus return for both the mobile menu and the project dialog.
- The mobile menu title is "Menú" while the trigger is "Abrir menú". Screen readers get a real dialog title instead of the action label.
- Contact rows are a list, not a definition list. Each row contains an icon, a label and a value.
- The form validates name, email and a 20-character minimum message. Errors use `role="alert"`, `aria-invalid` and `aria-describedby`; focus moves to the first invalid field. A honeypot is hidden off-screen.
- The form does not fake a network request. It opens `mailto:` with the message, then shows a "message ready" state.
- All images have localized alt text. Decorative browser chrome is `aria-hidden`.
- The language toggle updates `<html lang>` and persists the choice in `localStorage`. There is no theme control.

## Responsive behavior

- Single column below `lg`, two columns for the hero and featured projects at `lg`.
- The hero work index stacks its label under the project name so long metadata never collides inside the narrow right column.
- The small hero portrait is hidden below `sm`.
- Nav links collapse into the drawer below `lg`. The language toggle hides below `sm` in the header and appears inside the drawer.
- The CV button shortens to "CV" until `xl`.
- Project cards explicitly use `min-w-0` so long monospace URLs cannot push the grid wider than the viewport.
- The browser-bar URL is truncated and the badge is hidden on small screens.
- The contact form stacks its name and email fields below `sm`.
- Tested at 1440px, 1000px and 390px in ES and EN. No horizontal overflow at 390px.

## Language

`L10n` is a simple `{ es, en }` object. The locale lives in `localStorage`, updates `<html lang>` and re-renders through `useSyncExternalStore`. Spanish is the default and the server-rendered language.

Tradeoff: this is a client-side toggle, not localized routes. It keeps the site a single static page, but search engines see one URL and the initial HTML is Spanish. If SEO in English becomes important, move to `/es` and `/en` routes with server-rendered translations.

## SEO, metadata and deployment

- The site is a static export deployed to GitHub Pages under `/Portafolio`.
- `metadataBase`, canonical, Open Graph and Twitter metadata use `site.url`, which defaults to `https://isaiasdc2.github.io/Portafolio`.
- `withBasePath()` prefixes public-folder links such as `/cv.pdf` and the manifest icons. Next handles `basePath` for assets, `<Link>` and `<Image>`.
- The manifest, SVG icon and Apple touch icon are included in `out/`.
- `public/.nojekyll` ships with the export so GitHub Pages does not process the files with Jekyll.
- JSON-LD describes a `Person` and a `WebSite`.
- `robots.txt` and `sitemap.xml` are generated from the same site URL.
- The GitHub Actions workflow runs lint and build, then deploys `out/`.
- Project facts and counts in the case studies match the repositories.

## Known tradeoffs

- The POS project has no public demo, so the card offers a demo on interview. Its screenshots are real UI captures, not mockups.
- The portrait is cropped from a full-body photo. A brighter, higher-resolution headshot would improve the About section.
- The CV is Spanish only. An English version needs a second HTML source and PDF.
- Education currently shows the qualification and country, not the institution or year, because those details were not confirmed.
- The OG image is a static 1200 × 630 PNG generated outside the build; regenerate it when the name, role or stack changes.
