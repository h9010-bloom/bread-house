# Design Brief

## Direction

Bread House — warm, inviting bakery e-commerce with card-based product showcase celebrating fresh-baked goods through approachable, handcrafted visual language.

## Tone

Warm nostalgia meets handcrafted charm: rich chocolate brown palette, generous spacing, tactile card shadows that evoke pastry boxes, serif display typography for elegance without stuffiness.

## Differentiation

Cards feel like pastry boxes with layered shadows; Fraunces serif headings create warmth; warm caramel accents for CTAs; cream background invites exploration without sterility.

## Color Palette

| Token      | OKLCH         | Role                               |
| ---------- | ------------- | ---------------------------------- |
| background | 0.97 0.008 60  | warm cream base (#e8f3f1 region)   |
| foreground | 0.2 0.03 40    | deep chocolate brown text           |
| card       | 0.94 0.015 50  | light caramel product cards         |
| primary    | 0.42 0.18 35   | rich chocolate brown (#6F4E37)     |
| secondary  | 0.58 0.12 30   | warm brown tones (#8B4513)         |
| accent     | 0.65 0.2 40    | caramel highlights, "Add to Cart"  |

## Typography

- Display: Fraunces — section headings, product names, hero text with serif elegance
- Body: General Sans — product descriptions, prices, UI labels, navigation
- Scale: hero `text-5xl md:text-7xl font-display font-bold`, h2 `text-3xl md:text-4xl font-display`, body `text-base`

## Elevation & Depth

Layered box shadows create tactile depth: product cards use `shadow-card` (subtle), hero and featured sections use `shadow-elevated` (pronounced); borders on cards emphasize product boundaries without harshness.

## Structural Zones

| Zone            | Background         | Border              | Notes                                  |
| --------------- | ------------------ | ------------------- | -------------------------------------- |
| Navbar          | bg-primary         | —                   | fixed, sticky, cream text              |
| Hero Section    | gradient primary   | —                   | full-width, image-driven with overlay  |
| Product Cards   | bg-card            | border-border       | grid layout, shadow-card for depth     |
| Footer          | bg-primary         | border-t border-primary | matches navbar                         |

## Spacing & Rhythm

Sections use `py-16 md:py-20` rhythm; product grids use `gap-8` for breathing room; cards use `p-6` internal padding; navbar uses `px-8 py-4` for proportion.

## Component Patterns

- Product Cards: `bg-card rounded-lg shadow-card border border-border`, price in warm accent, "Add to Cart" button in `bg-accent hover:bg-accent/90`
- Buttons: primary `bg-primary text-white rounded-lg px-6 py-3`, secondary `border-2 border-primary text-primary rounded-lg px-6 py-3`
- Badges: cart count `bg-accent text-primary rounded-full text-xs font-bold w-6 h-6 flex items-center justify-center`

## Motion

- Entrance: cards fade in with subtle `scale-95` → `scale-100` on page load
- Hover: product cards lift with `shadow-elevated` on hover, slight `translate-y-[-4px]`
- Transitions: all interactions use `transition-smooth` (0.3s cubic-bezier)

## Constraints

- All colors from warm brown/chocolate palette — no cool tones
- Cards must have visible borders and shadows (not flat)
- Serif display font used only for headings, not body text
- Images are hero/showcase elements, placed intentionally not scattered

## Signature Detail

Product cards elevate on hover with dual-layer shadow simulating paper depth; combined with warm accent color on CTAs, creates distinctive "warm box" feel that signals baked-good quality.

