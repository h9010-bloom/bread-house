import { c as createLucideIcon, j as jsxRuntimeExports, C as ChefHat, B as Button, L as Link } from "./index-BiZc6_aw.js";
import { C as CATEGORY_LABELS, P as PRODUCTS, a as ProductCard } from "./products-BZ6r0uDb.js";
import "./index-CdqDEkl8.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  [
    "path",
    {
      d: "M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",
      key: "r04s7s"
    }
  ]
];
const Star = createLucideIcon("star", __iconNode);
const FEATURED = [
  PRODUCTS.cakes[0],
  PRODUCTS.pastries[0],
  PRODUCTS.cookies[0],
  PRODUCTS.croissants[0],
  PRODUCTS.cupcakes[0]
];
const CATEGORY_CARDS = [
  {
    key: "cakes",
    emoji: "🎂",
    description: "Celebration and everyday layer cakes",
    color: "bg-primary/10"
  },
  {
    key: "pastries",
    emoji: "🥐",
    description: "Flaky pastries and choux perfection",
    color: "bg-accent/10"
  },
  {
    key: "cookies",
    emoji: "🍪",
    description: "Chewy, crisp, and melt-in-mouth",
    color: "bg-secondary/10"
  },
  {
    key: "croissants",
    emoji: "🥐",
    description: "Buttery laminated croissants",
    color: "bg-primary/10"
  },
  {
    key: "cupcakes",
    emoji: "🧁",
    description: "Single-serve indulgent cupcakes",
    color: "bg-accent/10"
  }
];
function HomePage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "section",
      {
        "data-ocid": "home.hero_section",
        className: "relative bg-primary overflow-hidden py-20 px-4 sm:px-6",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-0 opacity-10", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-0 right-0 w-96 h-96 bg-accent rounded-full -translate-y-1/2 translate-x-1/3 blur-3xl" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-0 left-0 w-64 h-64 bg-secondary rounded-full translate-y-1/2 -translate-x-1/4 blur-2xl" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative max-w-3xl mx-auto text-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-center gap-2 mb-6", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(ChefHat, { className: "w-6 h-6 text-primary-foreground/80" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary-foreground/80 text-sm font-medium uppercase tracking-widest", children: "Freshly Baked Daily" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "font-display text-4xl sm:text-6xl font-bold text-primary-foreground leading-tight mb-6", children: [
              "Indulge In Heavenly",
              /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
              "Sweet Delights"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-primary-foreground/75 text-lg sm:text-xl mb-10 leading-relaxed max-w-xl mx-auto", children: "Artisan cakes, pastries, cookies, croissants, and cupcakes — handcrafted with love every single morning." }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-4 justify-center", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Button,
                {
                  "data-ocid": "home.shop_now_button",
                  size: "lg",
                  variant: "secondary",
                  className: "font-semibold text-foreground shadow-elevated",
                  asChild: true,
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/products/cakes", children: "Shop Now" })
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Button,
                {
                  "data-ocid": "home.view_all_button",
                  size: "lg",
                  variant: "outline",
                  className: "border-primary-foreground/30 text-black hover:bg-primary-foreground/10",
                  asChild: true,
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/products/pastries", children: "Explore Pastries" })
                }
              )
            ] })
          ] })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "section",
      {
        "data-ocid": "home.categories_section",
        className: "bg-muted/40 py-14 px-4 sm:px-6",
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-3xl font-bold text-foreground text-center mb-10", children: "Browse by Category" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4", children: CATEGORY_CARDS.map((cat) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Link,
            {
              to: `/products/${cat.key}`,
              "data-ocid": `home.category_card.${cat.key}`,
              className: "group flex flex-col items-center gap-3 p-5 bg-card border border-border rounded-2xl shadow-card hover:shadow-elevated hover:-translate-y-1 transition-smooth text-center",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-4xl", children: cat.emoji }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display font-semibold text-foreground text-sm", children: CATEGORY_LABELS[cat.key] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-0.5 leading-snug line-clamp-2", children: cat.description })
                ] })
              ]
            },
            cat.key
          )) })
        ] })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "section",
      {
        "data-ocid": "home.featured_section",
        className: "bg-background py-14 px-4 sm:px-6",
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-10 justify-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: "w-5 h-5 text-accent" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-3xl font-bold text-foreground", children: "Staff Picks" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5", children: FEATURED.map((product, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(ProductCard, { product, index: i + 1 }, product.id)) })
        ] })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "section",
      {
        "data-ocid": "home.about_section",
        className: "bg-muted/40 py-14 px-4 sm:px-6",
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-4xl mx-auto text-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-3xl font-bold text-foreground mb-5", children: "Why Bread House?" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-base leading-relaxed mb-8 max-w-2xl mx-auto", children: "We use only the finest ingredients — French butter, single-origin chocolate, and locally-sourced seasonal fruits. Every item is handcrafted in our open kitchen each morning, so you always get the freshest bite possible." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-3 gap-6", children: [
            {
              icon: "🌾",
              title: "Premium Ingredients",
              desc: "Sourced from trusted local farms and international artisan suppliers"
            },
            {
              icon: "👨‍🍳",
              title: "Expert Bakers",
              desc: "Our pastry chefs have trained in Paris, Vienna, and Tokyo"
            },
            {
              icon: "🚀",
              title: "Fresh Daily",
              desc: "Everything baked from scratch every morning — never day-old"
            }
          ].map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "bg-card border border-border rounded-2xl p-6 shadow-card text-center",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-3xl block mb-3", children: item.icon }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-semibold text-foreground mb-2", children: item.title }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground leading-relaxed", children: item.desc })
              ]
            },
            item.title
          )) })
        ] })
      }
    )
  ] });
}
export {
  HomePage as default
};
