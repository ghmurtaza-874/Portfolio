# Premium Frontend Developer Portfolio

A beautiful, dark-themed, **frontend-only** developer portfolio built with
**React + TypeScript + Vite + Bootstrap 5 + plain CSS + Lucide React**.

No backend, no Tailwind, no Material UI — just clean, maintainable TypeScript
and hand-written CSS.

![stack](https://img.shields.io/badge/React-19-8B5CF6) ![stack](https://img.shields.io/badge/TypeScript-5-3B82F6) ![stack](https://img.shields.io/badge/Vite-6-22D3EE) ![stack](https://img.shields.io/badge/Bootstrap-5-F472B6)

## Sections

| # | Section | Highlights |
|---|---------|-----------|
| 1 | **Navbar** | Sticky, transparent → glass on scroll, scrollspy underline, reading-progress bar, animated mobile menu |
| 2 | **Hero** | Animated gradient name, mono role pill, availability badge, avatar placeholder with orbiting chips, tech marquee |
| 3 | **About** | Syntax-highlighted `profile.ts` code card, journey story, highlight mini-cards |
| 4 | **Skills** | 4 categorized glass cards, honest level badges (Comfortable / Improving / Familiar) + animated bars |
| 5 | **Projects** | Category filters, honest `shipped` / `placeholder` badges, tech chips, GitHub + demo links |
| 6 | **Journey** | Elegant alternating vertical timeline with glowing center line |
| 7 | **What I Can Build** | Bento grid of 5 capability cards |
| 8 | **Contact** | Client-side validated form (ARIA errors, char counter) → honest “no backend” success panel with one-click mailto draft |
| 9 | **Footer** | Quick links, tech chips, socials, copyright, back-to-top |

## Quick start

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # type-checks (tsc -b) + production build → dist/
npm run preview  # serve the production build locally
```

## Make it yours (2 minutes)

1. **`src/data/profile.ts`** — name, role, tagline, email, location, social URLs.
   This single file re-skins the navbar, hero, about, contact and footer.
2. **Hero photo** — replace the `.avatar-glass` div in `src/components/Hero.tsx`
   with `<img className="avatar-img" src="/your-photo.jpg" alt="Portrait of …" />`.
3. **Projects** — edit `src/data/projects.ts`. Set `status: 'shipped'`, add real
   `github` / `demo` URLs and an optional `image` when you ship a project.
4. **Skills** — adjust levels/labels in `src/data/skills.ts` (keep it honest 🙂).
5. Optional: swap the Google Fonts link in `index.html`.

## Adding it to an existing Vite + React + TS project

- Copy `src/components`, `src/data`, `src/hooks`, `src/styles` into your `src/`.
- Copy `src/main.tsx` (it imports Bootstrap CSS **before** `styles/global.css`) or
  add these two imports to your own entry, in this order:
  ```ts
  import 'bootstrap/dist/css/bootstrap.min.css';
  import './styles/global.css';
  ```
- Copy `src/App.tsx` (or mount its sections inside your own layout).
- Install runtime deps: `npm i bootstrap lucide-react` (React/Vite you already have).
- Merge any `index.html` bits you like: `data-bs-theme="dark"`, fonts, meta, favicon.

## Architecture

```
src/
├── components/   # 9 section components (one per concern)
├── data/         # profile, skills, projects, journey, services — all typed
├── hooks/        # useScrollReveal (shared IntersectionObserver)
├── styles/       # global.css design system + one CSS file per component
├── App.tsx
└── main.tsx
```

- **Bootstrap 5** is used for the responsive grid + utilities only
  (`container-xxl`, `row`, `col-*`, `g-*`, `d-*`…). No Bootstrap JS — the mobile
  menu is React state, so there's no Popper/bundle dependency.
- **Performance**: IntersectionObserver reveals, transform/opacity-only
  animations, `prefers-reduced-motion` respected, lazy-loaded images support.
- **Accessibility**: semantic landmarks, skip link, labeled inputs with
  `aria-invalid` / `aria-describedby`, keyboard-friendly menu, focus-visible rings.
- **Backend-ready later**: all data flows through `src/data/*`; swap a data file
  for an API call in one place — nothing else changes.

## Honest-by-design

Skill levels are self-assessed and labeled, and every project card states
whether it is `shipped` or a `placeholder`. The contact form explicitly says
nothing is sent to a server and offers a real mailto: draft instead.
