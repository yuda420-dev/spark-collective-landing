# Spark Collective — AI Creative Studios Landing Page

## Project Scope
Landing page for Spark Collective, a membership-based platform offering physical AI creative studios worldwide. Showcases membership tiers, studio locations, impact metrics, and collects email signups.

## Tech Stack
- React 18.2 / Vite 5.0
- Tailwind CSS 3.3 + PostCSS
- Vercel deployment

## Key Files
```
src/
├── App.jsx    ← Main landing page (~459 lines, single component)
├── main.jsx   ← Entry point
└── index.css  ← Tailwind imports
```

## Quick Start
```bash
npm install
npm run dev      # Vite dev server
npm run build    # Production build
```

## Page Sections
Hero (email capture) → How It Works → Problem/Solution → Testimonials (auto-rotating) → Impact Stats → Pricing (4 tiers $50-$500/mo) → Studios Map → CTA → Footer

## Design Notes
- Warm workshop palette (copper #D4A574, charcoal #2D2A24, cream #FAF7F2)
- Georgia serif headings, sans-serif body
- Inline styles mixed with Tailwind
- Auto-cycling testimonials (5s intervals)

## Cross-Project Reference
- Shared patterns: ~/orginize/knowledge/patterns.md
- Master registry: ~/orginize/CLAUDE.md

## GitHub
- Repo: yuda420-dev/spark-collective-landing
- Push requires: `gh auth switch --user yuda420-dev`
