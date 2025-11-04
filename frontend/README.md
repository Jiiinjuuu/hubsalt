# Challenger - Frontend Mock (React + Vite)

This is a small React scaffold that reproduces the main landing page UI shown in the attachments. It's intentionally minimal and focuses on layout + styles.

## Quick start

1. From the `frontend` directory, install deps:

```bash
cd /Users/carpbreadj/Project/Challenger/frontend
npm install
```

2. Run dev server:

```bash
npm run dev
```

3. Open the URL printed by Vite (usually http://localhost:5173).

## What I added

- `index.html`, `package.json` (Vite + React)
- `src/main.jsx`, `src/App.jsx`
- `src/components/*` : `Hero`, `Categories`, `Coaching`, `MentorsGrid`, `Testimonials`, `FAQ`, `Contact`, `Footer`
- `src/styles.css` : global styles approximating the screenshot (dark hero, cards, layout)

## Notes & next steps

- Images are placeholders (black blocks). Replace `.media-placeholder` with real images.
- Font: I used system fonts and `Noto Sans KR` fallback; you may import a webfont if desired.
- Accessibility: buttons and links are minimal — add proper ARIA attributes if needed.
- Interactions: expand/collapse FAQ, card hover effects, and dynamic data loading can be added easily.

## Figma & design

This implementation was created to match a Figma wireframe you provided. To reproduce the Figma design exactly:

- Share the Figma file with "Anyone with the link can view" or invite the editor/viewer account.
- Provide font files or confirm the web font names used in Figma so I can import them.
- Provide high-resolution images/SVGs (or allow export from Figma) if you want pixel-perfect assets.

If you share the Figma file access I'll continue implementing remaining visual polish (fonts, icons, exact spacing) and responsive tweaks.

If you want, I can:
- Connect this to a JSON data file or CMS for dynamic content.
- Replace placeholders with real assets and responsive breakpoints tuned for tablets/phones.
- Convert to TypeScript and add unit tests.
