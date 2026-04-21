import { c as createLucideIcon, a as useCartStore, r as reactExports, j as jsxRuntimeExports, B as Button, L as Link, S as Separator } from "./index-BiZc6_aw.js";
import { u as ue } from "./index-CdqDEkl8.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$3 = [["path", { d: "M5 12h14", key: "1ays0h" }]];
const Minus = createLucideIcon("minus", __iconNode$3);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$2 = [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "M12 5v14", key: "s699le" }]
];
const Plus = createLucideIcon("plus", __iconNode$2);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [
  ["path", { d: "M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z", key: "hou9p0" }],
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M16 10a4 4 0 0 1-8 0", key: "1ltviw" }]
];
const ShoppingBag = createLucideIcon("shopping-bag", __iconNode$1);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6", key: "4alrt4" }],
  ["path", { d: "M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2", key: "v07s0e" }],
  ["line", { x1: "10", x2: "10", y1: "11", y2: "17", key: "1uufr5" }],
  ["line", { x1: "14", x2: "14", y1: "11", y2: "17", key: "xtxkd" }]
];
const Trash2 = createLucideIcon("trash-2", __iconNode);
function CartPage() {
  const {
    items,
    removeItem,
    incrementItem,
    decrementItem,
    clearCart,
    totalPrice
  } = useCartStore();
  const [isPlacingOrder, setIsPlacingOrder] = reactExports.useState(false);
  const total = totalPrice();
  const handlePlaceOrder = async () => {
    if (items.length === 0) return;
    setIsPlacingOrder(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 800));
      const order = {
        orderId: `ord_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`,
        userId: "local",
        items: items.map((item) => ({
          productId: item.id,
          name: item.name,
          price: item.price,
          quantity: item.quantity
        })),
        total,
        status: "confirmed",
        timestamp: Date.now() * 1e6
        // nanoseconds format
      };
      const existing = JSON.parse(
        localStorage.getItem("bread-house-orders") ?? "[]"
      );
      localStorage.setItem(
        "bread-house-orders",
        JSON.stringify([order, ...existing])
      );
      clearCart();
      ue.success("Order placed! Pay on delivery 💵", {
        duration: 5e3,
        position: "bottom-right"
      });
    } catch (err) {
      console.error("Order failed:", err);
      ue.error("Failed to place order. Please try again.", {
        position: "bottom-right"
      });
    } finally {
      setIsPlacingOrder(false);
    }
  };
  if (items.length === 0) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        "data-ocid": "cart.empty_state",
        className: "flex-1 flex flex-col items-center justify-center py-24 px-4 text-center",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(ShoppingBag, { className: "w-16 h-16 text-muted-foreground/40 mb-6" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-2xl font-semibold text-foreground mb-2", children: "Your cart is empty" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm mb-8 max-w-xs", children: "Add some freshly baked goodness to get started!" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { "data-ocid": "cart.start_shopping_button", asChild: true, size: "lg", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/products/cakes", children: "Browse Cakes" }) })
        ]
      }
    );
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 py-10 px-4 sm:px-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-4xl mx-auto", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "h1",
      {
        "data-ocid": "cart.page_title",
        className: "font-display text-3xl font-bold text-foreground mb-8",
        children: "Your Cart"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-3 gap-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          "data-ocid": "cart.items_list",
          className: "lg:col-span-2 flex flex-col gap-4",
          children: items.map((item, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              "data-ocid": `cart.item.${i + 1}`,
              className: "flex items-center gap-4 bg-card border border-border rounded-2xl p-4 shadow-card",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "img",
                  {
                    src: item.imageUrl,
                    alt: item.name,
                    className: "w-16 h-16 rounded-xl object-cover flex-shrink-0"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-foreground text-sm leading-tight truncate", children: item.name }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground capitalize mt-0.5", children: item.category }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm font-bold text-primary mt-1", children: [
                    "$",
                    (item.price * item.quantity).toFixed(2)
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Button,
                    {
                      variant: "outline",
                      size: "icon",
                      className: "w-7 h-7 rounded-lg",
                      "data-ocid": `cart.decrement.${i + 1}`,
                      onClick: () => decrementItem(item.id),
                      "aria-label": "Decrease quantity",
                      children: /* @__PURE__ */ jsxRuntimeExports.jsx(Minus, { className: "w-3 h-3" })
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "span",
                    {
                      className: "w-6 text-center text-sm font-semibold text-foreground",
                      "data-ocid": `cart.quantity.${i + 1}`,
                      children: item.quantity
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Button,
                    {
                      variant: "outline",
                      size: "icon",
                      className: "w-7 h-7 rounded-lg",
                      "data-ocid": `cart.increment.${i + 1}`,
                      onClick: () => incrementItem(item.id),
                      "aria-label": "Increase quantity",
                      children: /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "w-3 h-3" })
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Button,
                  {
                    variant: "ghost",
                    size: "icon",
                    className: "w-8 h-8 text-muted-foreground hover:text-destructive flex-shrink-0",
                    "data-ocid": `cart.delete_button.${i + 1}`,
                    onClick: () => removeItem(item.id),
                    "aria-label": `Remove ${item.name}`,
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { className: "w-4 h-4" })
                  }
                )
              ]
            },
            item.id
          ))
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          "data-ocid": "cart.summary_panel",
          className: "bg-card border border-border rounded-2xl p-6 shadow-card h-fit",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display font-semibold text-foreground text-lg mb-5", children: "Order Summary" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-col gap-3 text-sm", children: items.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-muted-foreground truncate max-w-[70%]", children: [
                item.name,
                " × ",
                item.quantity
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-foreground font-medium", children: [
                "$",
                (item.price * item.quantity).toFixed(2)
              ] })
            ] }, item.id)) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Separator, { className: "my-4" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between text-base font-bold text-foreground mb-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Total" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                "$",
                total.toFixed(2)
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mb-5", children: "💵 Cash on Delivery only" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                "data-ocid": "cart.place_order_button",
                onClick: handlePlaceOrder,
                disabled: isPlacingOrder,
                className: "w-full font-semibold",
                size: "lg",
                children: isPlacingOrder ? "Placing Order…" : "Place Order (COD)"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                variant: "ghost",
                size: "sm",
                className: "w-full mt-2 text-muted-foreground",
                "data-ocid": "cart.continue_shopping_button",
                asChild: true,
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/products/cakes", children: "← Continue Shopping" })
              }
            )
          ]
        }
      )
    ] })
  ] }) });
}
export {
  CartPage as default
};
