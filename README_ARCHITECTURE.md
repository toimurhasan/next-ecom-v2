Project architecture (scaffolded)

- src/components

  - layout: Header, Footer, Layout
  - ui: generic UI elements (Button, Card)
  - common: shared helpers (ImageOptimized)
  - product: ProductCard, ProductGrid
  - cart: CartSidebar, CartItem
  - forms: SearchBar
  - icons: small svg icons

- src/hooks: custom hooks `useCart`, `useFetch`
- src/store: Redux store and `cartSlice`
- src/lib: API and SEO helpers
- src/utils: small utilities
- src/types: shared TypeScript types

Conventions:

- Use `Image` from `next/image` via `ImageOptimized` for responsive, optimized images.
- Keep components small and pure. Pass data via props and use hooks for state.
- Use Redux Toolkit for cart state; keep API calls in `src/lib` or dedicated hooks.
- Keep styles in Tailwind utility classes; add component-level CSS only when necessary.

Next steps:

- Wire `src/store` into `src/app/layout.tsx` using `<Provider>`.
- Replace placeholders with real markup and accessibility attributes.
- Add image CDNs or `next.config.js` remotePatterns for optimized delivery.
