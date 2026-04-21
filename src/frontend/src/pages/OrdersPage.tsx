/**
 * OrdersPage — Shows all orders placed by the current user.
 * Orders are stored in localStorage by CartPage after a successful order placement.
 */
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import type { Order } from "@/types/index";
import { ClipboardList, PackageCheck } from "lucide-react";
import { Link } from "react-router-dom";

// Status badge with color coding by status type
function StatusBadge({ status }: { status: string }) {
  const colorMap: Record<string, string> = {
    pending: "bg-accent/20 text-accent border-accent/30",
    confirmed: "bg-primary/20 text-primary border-primary/30",
    delivered: "bg-secondary/20 text-secondary border-secondary/30",
  };
  const cls =
    colorMap[status.toLowerCase()] ?? "bg-muted text-muted-foreground";
  return (
    <Badge
      variant="outline"
      className={`capitalize text-xs font-semibold ${cls}`}
    >
      {status}
    </Badge>
  );
}

// Load orders from localStorage (set by CartPage when user places order)
function loadOrders(): Order[] {
  try {
    return JSON.parse(localStorage.getItem("bread-house-orders") ?? "[]");
  } catch {
    return [];
  }
}

export default function OrdersPage() {
  const orders = loadOrders();

  if (orders.length === 0) {
    return (
      <div
        data-ocid="orders.empty_state"
        className="flex-1 flex flex-col items-center justify-center py-24 px-4 text-center"
      >
        <ClipboardList className="w-14 h-14 text-muted-foreground/40 mb-6" />
        <h2 className="font-display text-2xl font-semibold text-foreground mb-2">
          No orders yet
        </h2>
        <p className="text-muted-foreground text-sm mb-8 max-w-xs">
          Place your first order and it will appear here.
        </p>
        <Button data-ocid="orders.shop_now_button" asChild size="lg">
          <Link to="/products/cakes">Start Shopping</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="flex-1 py-10 px-4 sm:px-6">
      <div className="max-w-3xl mx-auto">
        {/* Page heading */}
        <div className="flex items-center gap-3 mb-8">
          <PackageCheck className="w-6 h-6 text-primary" />
          <h1
            data-ocid="orders.page_title"
            className="font-display text-3xl font-bold text-foreground"
          >
            My Orders
          </h1>
        </div>

        {/* Orders list */}
        <div data-ocid="orders.list" className="flex flex-col gap-4">
          {orders.map((order, i) => (
            <div
              key={order.orderId}
              data-ocid={`orders.item.${i + 1}`}
              className="bg-card border border-border rounded-2xl p-5 shadow-card"
            >
              {/* Order header row */}
              <div className="flex items-start justify-between gap-4 mb-3">
                <div>
                  <p className="text-xs text-muted-foreground font-mono mb-0.5">
                    Order #{order.orderId.slice(0, 12).toUpperCase()}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {new Date(order.timestamp / 1_000_000).toLocaleDateString(
                      undefined,
                      { year: "numeric", month: "short", day: "numeric" },
                    )}
                  </p>
                </div>
                <StatusBadge status={order.status} />
              </div>

              {/* Items breakdown */}
              <ul className="flex flex-col gap-1.5 mb-3">
                {order.items.map((item) => (
                  <li
                    key={item.productId}
                    className="flex justify-between text-sm"
                  >
                    <span className="text-muted-foreground">
                      {item.name} × {item.quantity}
                    </span>
                    <span className="text-foreground font-medium">
                      ${(item.price * item.quantity).toFixed(2)}
                    </span>
                  </li>
                ))}
              </ul>

              {/* Total + payment method */}
              <div className="flex items-center justify-between pt-3 border-t border-border">
                <span className="text-xs text-muted-foreground">
                  💵 Cash on Delivery
                </span>
                <span className="font-bold text-primary">
                  Total: ${order.total.toFixed(2)}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
