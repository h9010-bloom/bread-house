import { c as createLucideIcon, j as jsxRuntimeExports, e as cn, f as useAuth, g as useUserProfile, h as ShieldCheck, d as Badge } from "./index-BiZc6_aw.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["path", { d: "m2 2 20 20", key: "1ooewy" }],
  [
    "path",
    {
      d: "M5 5a1 1 0 0 0-1 1v7c0 5 3.5 7.5 7.67 8.94a1 1 0 0 0 .67.01c2.35-.82 4.48-1.97 5.9-3.71",
      key: "1jlk70"
    }
  ],
  [
    "path",
    {
      d: "M9.309 3.652A12.252 12.252 0 0 0 11.24 2.28a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1v7a9.784 9.784 0 0 1-.08 1.264",
      key: "18rp1v"
    }
  ]
];
const ShieldOff = createLucideIcon("shield-off", __iconNode);
function Table({ className, ...props }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      "data-slot": "table-container",
      className: "relative w-full overflow-x-auto",
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        "table",
        {
          "data-slot": "table",
          className: cn("w-full caption-bottom text-sm", className),
          ...props
        }
      )
    }
  );
}
function TableHeader({ className, ...props }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "thead",
    {
      "data-slot": "table-header",
      className: cn("[&_tr]:border-b", className),
      ...props
    }
  );
}
function TableBody({ className, ...props }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "tbody",
    {
      "data-slot": "table-body",
      className: cn("[&_tr:last-child]:border-0", className),
      ...props
    }
  );
}
function TableRow({ className, ...props }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "tr",
    {
      "data-slot": "table-row",
      className: cn(
        "hover:bg-muted/50 data-[state=selected]:bg-muted border-b transition-colors",
        className
      ),
      ...props
    }
  );
}
function TableHead({ className, ...props }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "th",
    {
      "data-slot": "table-head",
      className: cn(
        "text-foreground h-10 px-2 text-left align-middle font-medium whitespace-nowrap [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",
        className
      ),
      ...props
    }
  );
}
function TableCell({ className, ...props }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "td",
    {
      "data-slot": "table-cell",
      className: cn(
        "p-2 align-middle whitespace-nowrap [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",
        className
      ),
      ...props
    }
  );
}
function StatusBadge({ status }) {
  const map = {
    pending: "bg-accent/15 text-accent border-accent/30",
    confirmed: "bg-primary/15 text-primary border-primary/30",
    delivered: "bg-secondary/15 text-secondary border-secondary/30"
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Badge,
    {
      variant: "outline",
      className: `capitalize text-xs ${map[status.toLowerCase()] ?? "bg-muted text-muted-foreground"}`,
      children: status
    }
  );
}
function useAllOrders() {
  const orders = JSON.parse(
    localStorage.getItem("bread-house-orders") ?? "[]"
  );
  return { data: orders, isLoading: false, isError: false };
}
function AdminPage() {
  const { isAuthenticated } = useAuth();
  const { data: profile, isLoading: profileLoading } = useUserProfile(isAuthenticated);
  const { data: orders } = useAllOrders();
  if (!profileLoading && !(profile == null ? void 0 : profile.isAdmin)) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        "data-ocid": "admin.access_restricted",
        className: "flex-1 flex flex-col items-center justify-center py-24 px-4 text-center",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(ShieldOff, { className: "w-14 h-14 text-muted-foreground/40 mb-5" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-2xl font-bold text-foreground mb-2", children: "Access Restricted" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm max-w-xs", children: "This area is for admin users only. If you believe you should have access, please contact the site administrator." })
        ]
      }
    );
  }
  const totalOrders = (orders == null ? void 0 : orders.length) ?? 0;
  const totalRevenue = (orders == null ? void 0 : orders.reduce((s, o) => s + o.total, 0)) ?? 0;
  const pendingCount = (orders == null ? void 0 : orders.filter((o) => o.status === "pending").length) ?? 0;
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 py-10 px-4 sm:px-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(ShieldCheck, { className: "w-6 h-6 text-primary" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "h1",
        {
          "data-ocid": "admin.page_title",
          className: "font-display text-3xl font-bold text-foreground",
          children: "Admin Panel"
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        "data-ocid": "admin.stats_section",
        className: "grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10",
        children: [
          { label: "Total Orders", value: totalOrders, icon: "📦" },
          {
            label: "Total Revenue",
            value: `$${totalRevenue.toFixed(2)}`,
            icon: "💰"
          },
          { label: "Pending Orders", value: pendingCount, icon: "⏳" }
        ].map((stat) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "bg-card border border-border rounded-2xl p-5 shadow-card flex items-center gap-4",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-3xl", children: stat.icon }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: stat.label }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-2xl font-bold text-foreground", children: stat.value })
              ] })
            ]
          },
          stat.label
        ))
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        "data-ocid": "admin.orders_table",
        className: "bg-card border border-border rounded-2xl overflow-hidden shadow-card",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-5 py-4 border-b border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display font-semibold text-foreground", children: "All Orders" }) }),
          !orders || orders.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              "data-ocid": "admin.empty_state",
              className: "flex flex-col items-center justify-center py-16 text-center",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-3xl mb-3", children: "📭" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm", children: "No orders yet." })
              ]
            }
          ) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Table, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(TableHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(TableRow, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { className: "text-xs", children: "Order ID" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { className: "text-xs", children: "User ID" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { className: "text-xs", children: "Items" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { className: "text-xs text-right", children: "Total" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { className: "text-xs", children: "Status" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { className: "text-xs", children: "Date" })
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TableBody, { children: orders.map((order, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
              TableRow,
              {
                "data-ocid": `admin.order_row.${i + 1}`,
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(TableCell, { className: "text-xs font-mono text-muted-foreground", children: [
                    "#",
                    order.orderId.slice(0, 10).toUpperCase()
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(TableCell, { className: "text-xs font-mono text-muted-foreground max-w-[120px] truncate", children: [
                    order.userId.length > 15 ? order.userId.slice(0, 15) : order.userId,
                    "…"
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(TableCell, { className: "text-xs text-muted-foreground", children: [
                    order.items.length,
                    " item",
                    order.items.length !== 1 ? "s" : ""
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(TableCell, { className: "text-xs font-bold text-primary text-right", children: [
                    "$",
                    order.total.toFixed(2)
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(StatusBadge, { status: order.status }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "text-xs text-muted-foreground", children: new Date(
                    order.timestamp / 1e6
                  ).toLocaleDateString() })
                ]
              },
              order.orderId
            )) })
          ] }) })
        ]
      }
    )
  ] }) });
}
export {
  AdminPage as default
};
