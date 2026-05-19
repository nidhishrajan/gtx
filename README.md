# GTX Landing Page — v3

Live preview: https://dancing-mooncake-3ab338.netlify.app/v3.html

Single-file landing page for Global Talent Exchange (globaltalex.com).  
All CSS is inline. No build step required. No external dependencies.

---

## For the Developer (Next.js Integration)

### Option A — Static File (Simplest)

1. Copy `v3.html` into your Next.js project's `/public` folder
2. Access it at `yourdomain.com/v3.html`
3. Done — no conversion needed

This is the fastest way to get it live. Suitable for a standalone campaign page.

---

### Option B — Next.js Page Component (Recommended for production)

Convert `v3.html` into a proper Next.js page:

1. Create `/app/landing/page.tsx` (or `/pages/landing.tsx` for Pages Router)
2. Move all `<style>` content into a CSS module or Tailwind classes
3. Copy the `<body>` HTML into the component's JSX (convert `class` → `className`, `for` → `htmlFor`)
4. Move all `<script>` blocks into `useEffect` hooks
5. Move `<head>` meta/link tags into `<Head>` (Pages Router) or `export const metadata` (App Router)

Key scripts to migrate to `useEffect`:
- Counter animation (`count` class, `data-to` / `data-suffix` attributes)
- Scroll reveal animation (`.reveal` class, IntersectionObserver)
- Marquee pause on hover (already CSS animation, no JS needed)
- Multi-step form logic (step progression, validation)
- FAQ accordion toggle

---

## File Structure

```
landing-page/
├── v3.html        ← production landing page (use this)
├── v2.html        ← dark theme variant (reference only)
├── v1.html        ← early prototype (reference only)
└── README.md
```

---

## Tech Notes

- Fonts: Urbanist (Google Fonts)
- Icons: Inline SVG (no icon library)
- Logos: Inline brand-colored SVGs (no external CDN)
- Form: 3-step multi-field form (pure HTML/JS, no library)
- Animations: CSS keyframes + IntersectionObserver scroll reveal
- Responsive breakpoints: 800px (tablet), 640px (mobile)
