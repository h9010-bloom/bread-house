import { c as createLucideIcon, u as useParams, j as jsxRuntimeExports, L as Link } from "./index-BiZc6_aw.js";
import { C as CATEGORY_LABELS, P as PRODUCTS, a as ProductCard } from "./products-BZ6r0uDb.js";
import "./index-CdqDEkl8.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]];
const ChevronRight = createLucideIcon("chevron-right", __iconNode);
function isValidCategory(cat) {
  return ["cakes", "pastries", "cookies", "croissants", "cupcakes"].includes(
    cat
  );
}
const CATEGORY_EMOJI = {
  cakes: "🎂",
  pastries: "🥐",
  cookies: "🍪",
  croissants: "🥐",
  cupcakes: "🧁"
};
function ProductListingPage() {
  const { category } = useParams();
  if (!category || !isValidCategory(category)) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        "data-ocid": "products.error_state",
        className: "flex-1 flex items-center justify-center py-20 text-center",
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-4xl mb-4", children: "🤔" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-xl font-semibold text-foreground mb-2", children: "Category not found" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm mb-6", children: "That category doesn't exist. Try browsing our menu." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Link,
            {
              to: "/",
              className: "text-primary underline underline-offset-2 text-sm",
              children: "← Back to Home"
            }
          )
        ] })
      }
    );
  }
  const products = PRODUCTS[category];
  const label = CATEGORY_LABELS[category];
  const emoji = CATEGORY_EMOJI[category];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-card border-b border-border py-8 px-4 sm:px-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "nav",
        {
          "data-ocid": "products.breadcrumb",
          className: "flex items-center gap-1.5 text-xs text-muted-foreground mb-4",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/", className: "hover:text-foreground transition-colors", children: "Home" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "w-3 h-3" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground font-medium", children: label })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-3xl", children: emoji }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "h1",
            {
              "data-ocid": "products.page_title",
              className: "font-display text-3xl font-bold text-foreground",
              children: [
                "Our ",
                label
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-muted-foreground text-sm mt-0.5", children: [
            products.length,
            " freshly baked items available today"
          ] })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "section",
      {
        "data-ocid": "products.grid_section",
        className: "bg-background py-10 px-4 sm:px-6 flex-1",
        children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-7xl mx-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            "data-ocid": "products.list",
            className: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5",
            children: products.map((product, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(ProductCard, { product, index: i + 1 }, product.id))
          }
        ) })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-muted/40 py-10 px-4 sm:px-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm mb-4", children: "Explore more from our bakery" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-3 justify-center", children: [
        "cakes",
        "pastries",
        "cookies",
        "croissants",
        "cupcakes"
      ].filter((c) => c !== category).map((c) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Link,
        {
          to: `/products/${c}`,
          "data-ocid": `products.crosssell.${c}`,
          className: "inline-flex items-center gap-1.5 px-4 py-2 bg-card border border-border rounded-full text-sm font-medium text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-smooth shadow-card",
          children: [
            CATEGORY_EMOJI[c],
            " ",
            CATEGORY_LABELS[c]
          ]
        },
        c
      )) })
    ] }) })
  ] });
}
export {
  ProductListingPage as default
};
