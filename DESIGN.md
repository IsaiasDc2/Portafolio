# Design notes

This document explains the visual and interaction decisions behind the portfolio. It is meant for anyone editing the site later, not as a general design manifesto.

## Direction

The brief asked for a forge: dark workshop, orange ember, light mode on paper. The result is a quiet technical portfolio with one warm accent, not a landing page full of effects.

Three rules shaped the work:

1. **The projects carry the page.** The hero is short, the case studies are detailed and the decoration never competes with a screenshot or a diagram.
2. **Every claim is traceable.** Real repositories, real demos, real counts. No skill percentages, no invented client names, no fake testimonials.
3. **Motion explains, then gets out of the way.** Entrances are short, reveals happen once and everything stops for `prefers-reduced-motion`.

The tone stays first person and concrete. Copy avoids "passionate about technology", "cutting-edge" and similar filler.

## Visual language

- **Dark theme:** near-black `#0B0B0F` with a warm ember glow. Surfaces are blue-black, not pure gray, so the orange stays warm.
- **Light theme:** warm paper `#FAF7F2` with white cards. The accent becomes a darker burnt orange for contrast.
- **Texture:** a faint grid, a soft radial glow and a low-opacity noise layer. They suggest a workbench without adding image weight.
- **Frames:** project images sit inside a browser chrome with three dots and a URL. The POS case study uses the same frame, but labels it as an architecture diagram, because it is one.
- **Hairlines over shadows:** most separation comes from 1px borders. Shadows are reserved for floating cards, the modal and the hero frame.

## Tokens

All tokens live in `src/app/globals.css`. Components use the semantic names, not the raw palette.

| Token | Dark | Light |
| --- | --- | --- |
| `--bg` | `#0B0B0F` | `#FAF7F2` |
| `--surface` | `#14141B` | `#FFFFFF` |
| `--surface-2` | `#1B1B25` | `#F2EDE4` |
| `--border` | `#23232E` | `#E7E2DA` |
| `--text` | `#E8E8EE` | `#1A1A1F` |
| `--muted` | `#9A9AA8` | `#5B5B66` |
| `--accent` | `#FF6B1A` | `#C2410C` |
| `--accent-2` | `#FFB347` | `#B45309` |

Other decisions:

- Container: `1100px`, with `clamp(1.25rem, 5vw, 2rem)` side padding.
- Nav height: `72px`, used by scroll padding and sticky offsets.
- Radii: `18px` for image frames, `16px` for cards, `12px` for buttons, pills for tags.
- Section spacing: `clamp(4rem, 9vw, 7.5rem)`.
- Focus ring: 2px accent with a 3px offset.

The light theme darkens the accent for text. The browser-bar "Live" badge uses `--ember-800` in light mode because `#C2410C` on `#F2EDE4` lands at 4.44:1, just under the 4.5:1 threshold for small text.

## Typography

| Role | Family | Usage |
| --- | --- | --- |
| Display | Space Grotesk | Name, section titles, project names, dialog titles |
| Body | Inter | Paragraphs, labels, buttons, navigation |
| Meta | JetBrains Mono | Indexes, years, stack tags, small labels |

- `display-1`: `clamp(2.75rem, 6.5vw, 4.5rem)`, tight tracking, for the hero name.
- `display-2`: `clamp(1.9rem, 4vw, 2.75rem)`, for section and project titles.
- `display-3`: `clamp(1.25rem, 2vw, 1.5rem)`, for cards and dialog titles.
- `mono-label`: uppercase, wide tracking, used for indexes and field labels.
- Body measure stays around 60 to 68 characters.

Fonts load through `next/font`, so there is no render-blocking request to a third party.

## Page structure

1. **Navbar:** fixed, transparent at the top, blurred surface after 16px of scroll. Active section tracked with `IntersectionObserver`. A thin spring-driven scroll progress line sits at the bottom edge.
2. **Hero:** availability, name, typed role, two paragraphs, primary and secondary CTAs, social links and the HefestoTech screenshot in a browser frame.
3. **Featured projects:** two alternating rows. Each has a screenshot or diagram, metadata, a short pitch, stack tags, links and a case-study button.
4. **More projects:** two cards for Forja Gym and Tgamx, then a link to the rest of GitHub.
5. **About:** portrait with a caption, two paragraphs, four facts and a short "looking for" note.
6. **Skills:** six groups. Names only, no bars or percentages.
7. **Education and experience:** a vertical timeline and a sticky CV card.
8. **Contact:** direct contact rows on the left, form on the right, plus a response-time note.
9. **Footer and 404:** compact, same tokens, no new patterns.

The case-study dialog opens from both the image and the "Read case study" button. It is a real `<dialog>` built with Radix, with a sticky header, the image or diagram, and sections for problem, solution, role, architecture, challenges, results and improvements.

## Motion

- Hero content staggers in at 80ms intervals with a 600ms ease-out.
- Section content uses a `Reveal` wrapper: 24px rise, fade, 550ms, triggered once at `-80px` from the viewport.
- The ember canvas draws 34 particles on desktop and 14 on mobile. It pauses when the hero leaves the viewport or the tab is hidden, and stops entirely when reduced motion is requested.
- The mobile menu slides from the right; the project dialog scales from 0.96 with a fade.
- Hover states are limited to small lifts, a 1.02 image scale and arrow movement.
- `MotionConfig reducedMotion="user"` plus a hydration-safe `useReducedMotionSafe` hook keep server and client markup in sync. The hook returns `false` on the server and the real preference after hydration.

## Interaction and accessibility

- Skip link to `#contenido`.
- One `h1`, labeled sections and `aria-current="location"` on the active nav item.
- Radix handles focus trapping, Escape and focus return for both the mobile menu and the project dialog.
- The mobile menu title is "Menú" while the trigger is "Abrir menú". Screen readers get a real dialog title instead of the action label.
- Contact rows are a list, not a definition list. Each row contains an icon, a label and a value. Linked rows use a full-row overlay so the whole row is clickable without nesting interactive elements.
- The form validates name, email and a 20-character minimum message. Errors use `role="alert"`, `aria-invalid` and `aria-describedby`; focus moves to the first invalid field. A honeypot is hidden off-screen.
- The form does not fake a network request. It opens `mailto:` with the message, then shows a "message ready" state.
- All images have localized alt text. Decorative browser chrome and ember canvas are `aria-hidden`.
- The light and dark themes both pass Lighthouse contrast checks. The custom `browser-live` color handles the one borderline case.

## Responsive behavior

- Single column below `lg`, two columns for the hero and featured projects at `lg`.
- Nav links collapse into the drawer below `lg`. The language toggle hides below `sm` in the header and appears inside the drawer.
- The CV button shortens to "CV" until `xl`.
- Project cards explicitly use `min-w-0` so long monospace URLs cannot push the grid wider than the viewport.
- The browser-bar URL is truncated and the "Live" badge is hidden on small screens.
- The contact form stacks its name and email fields below `sm`.
- Tested at 1440px and 390px, dark and light, ES and EN. No horizontal overflow at 390px.

## Language

`L10n` is a simple `{ es, en }` object. The locale lives in `localStorage`, updates `<html lang>` and re-renders through `useSyncExternalStore`. Spanish is the default and the server-rendered language.

Tradeoff: this is a client-side toggle, not localized routes. It keeps the site a single static page, but search engines see one URL and the initial HTML is Spanish. If SEO in English becomes important, move to `/es` and `/en` routes with server-rendered translations.

## SEO and metadata

- `metadataBase` and canonical URL come from `NEXT_PUBLIC_SITE_URL`.
- Open Graph and Twitter metadata use `public/og-image.png` at 1200 × 630.
- JSON-LD describes a `Person` and a `WebSite`.
- `robots.txt` and `sitemap.xml` are generated from the same site URL.
- Manifest, SVG icon and Apple touch icon are included.
- Project facts and counts in the case studies match the repositories.

## Known tradeoffs

- The POS project has no public demo, so the card uses its real architecture diagram and offers a demo on interview. That is more honest than a mocked UI screenshot.
- The portrait is cropped from a full-body photo. A brighter, higher-resolution headshot would improve the About section.
- The CV is Spanish only. An English version needs a second HTML source and PDF.
- Education currently shows the qualification and country, not the institution or year, because those details were not confirmed.
- The fallback site URL is a placeholder until the production domain is set in `NEXT_PUBLIC_SITE_URL`.
