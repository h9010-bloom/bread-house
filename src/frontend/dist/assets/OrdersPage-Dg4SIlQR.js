import { c as createLucideIcon, j as jsxRuntimeExports, b as ClipboardList, B as Button, L as Link, d as Badge } from "./index-BiZc6_aw.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["path", { d: "m16 16 2 2 4-4", key: "gfu2re" }],
  [
    "path",
    {
      d: "M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14",
      key: "e7tb2h"
    }
  ],
  ["path", { d: "m7.5 4.27 9 5.15", key: "1c824w" }],
  ["polyline", { points: "3.29 7 12 12 20.71 7", key: "ousv84" }],
  ["line", { x1: "12", x2: "12", y1: "22", y2: "12", key: "a4e8g8" }]
];
const PackageCheck = createLucideIcon("package-check", __iconNode);
function StatusBadge({ status }) {
  const colorMap = {
    pending: "bg-accent/20 text-accent border-accent/30",
    confirmed: "bg-primary/20 text-primary border-primary/30",
    delivered: "bg-secondary/20 text-secondary border-secondary/30"
  };
  const cls = colorMap[status.toLowerCase()] ?? "bg-muted text-muted-foreground";
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Badge,
    {
      variant: "outline",
      className: `capitalize text-xs font-semibold ${cls}`,
      children: status
    }
  );
}
function loadOrders() {
  try {
    return JSON.parse(localStorage.getItem("bread-house-orders") ?? "[]");
  } catch {
    return [];
  }
}
function OrdersPage() {
  const orders = loadOrders();
  if (orders.length === 0) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        "data-ocid": "orders.empty_state",
        className: "flex-1 flex flex-col items-center justify-center py-24 px-4 text-center",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(ClipboardList, { className: "w-14 h-14 text-muted-foreground/40 mb-6" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-2xl font-semibold text-foreground mb-2", children: "No orders yet" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm mb-8 max-w-xs", children: "Place your first order and it will appear here." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { "data-ocid": "orders.shop_now_button", asChild: true, size: "lg", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/products/cakes", children: "Start Shopping" }) })
        ]
      }
    );
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 py-10 px-4 sm:px-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-3xl mx-auto", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(PackageCheck, { className: "w-6 h-6 text-primary" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "h1",
        {
          "data-ocid": "orders.page_title",
          className: "font-display text-3xl font-bold text-foreground",
          children: "My Orders"
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { "data-ocid": "orders.list", className: "flex flex-col gap-4", children: orders.map((order, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        "data-ocid": `orders.item.${i + 1}`,
        className: "bg-card border border-border rounded-2xl p-5 shadow-card",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between gap-4 mb-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground font-mono mb-0.5", children: [
                "Order #",
                order.orderId.slice(0, 12).toUpperCase()
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: new Date(order.timestamp / 1e6).toLocaleDateString(
                void 0,
                { year: "numeric", month: "short", day: "numeric" }
              ) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(StatusBadge, { status: order.status })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "flex flex-col gap-1.5 mb-3", children: order.items.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "li",
            {
              className: "flex justify-between text-sm",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-muted-foreground", children: [
                  item.name,
                  " × ",
                  item.quantity
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-foreground font-medium", children: [
                  "$",
                  (item.price * item.quantity).toFixed(2)
                ] })
              ]
            },
            item.productId
          )) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between pt-3 border-t border-border", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground", children: "💵 Cash on Delivery" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-bold text-primary", children: [
              "Total: $",
              order.total.toFixed(2)
            ] })
          ] })
        ]
      },
      order.orderId
    )) })
  ] }) });
}
export {
  OrdersPage as default
};
