/**
 * AdminPage — Admin dashboard for viewing all orders and user management.
 * Access controlled: shows a friendly message if the user is not an admin.
 * In a full implementation the backend placeOrder / getAllOrders is used.
 */
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useAuth } from "@/hooks/use-auth";
import { useUserProfile } from "@/hooks/use-user-profile";
import type { Order } from "@/types/index";
import { ShieldCheck, ShieldOff } from "lucide-react";

// Status badge styling
function StatusBadge({ status }: { status: string }) {
  const map: Record<string, string> = {
    pending: "bg-accent/15 text-accent border-accent/30",
    confirmed: "bg-primary/15 text-primary border-primary/30",
    delivered: "bg-secondary/15 text-secondary border-secondary/30",
  };
  return (
    <Badge
      variant="outline"
      className={`capitalize text-xs ${map[status.toLowerCase()] ?? "bg-muted text-muted-foreground"}`}
    >
      {status}
    </Badge>
  );
}

// Read all orders from localStorage
function useAllOrders() {
  const orders: Order[] = JSON.parse(
    localStorage.getItem("bread-house-orders") ?? "[]",
  );
  return { data: orders, isLoading: false, isError: false };
}

export default function AdminPage() {
  const { isAuthenticated } = useAuth();
  const { data: profile, isLoading: profileLoading } =
    useUserProfile(isAuthenticated);
  const { data: orders } = useAllOrders();

  // Show access-restricted message if not an admin
  if (!profileLoading && !profile?.isAdmin) {
    return (
      <div
        data-ocid="admin.access_restricted"
        className="flex-1 flex flex-col items-center justify-center py-24 px-4 text-center"
      >
        <ShieldOff className="w-14 h-14 text-muted-foreground/40 mb-5" />
        <h2 className="font-display text-2xl font-bold text-foreground mb-2">
          Access Restricted
        </h2>
        <p className="text-muted-foreground text-sm max-w-xs">
          This area is for admin users only. If you believe you should have
          access, please contact the site administrator.
        </p>
      </div>
    );
  }

  // Summary stats derived from orders
  const totalOrders = orders?.length ?? 0;
  const totalRevenue = orders?.reduce((s, o) => s + o.total, 0) ?? 0;
  const pendingCount =
    orders?.filter((o) => o.status === "pending").length ?? 0;

  return (
    <div className="flex-1 py-10 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        {/* Page header */}
        <div className="flex items-center gap-3 mb-8">
          <ShieldCheck className="w-6 h-6 text-primary" />
          <h1
            data-ocid="admin.page_title"
            className="font-display text-3xl font-bold text-foreground"
          >
            Admin Panel
          </h1>
        </div>

        {/* Stats cards */}
        <div
          data-ocid="admin.stats_section"
          className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10"
        >
          {[
            { label: "Total Orders", value: totalOrders, icon: "📦" },
            {
              label: "Total Revenue",
              value: `$${totalRevenue.toFixed(2)}`,
              icon: "💰",
            },
            { label: "Pending Orders", value: pendingCount, icon: "⏳" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="bg-card border border-border rounded-2xl p-5 shadow-card flex items-center gap-4"
            >
              <span className="text-3xl">{stat.icon}</span>
              <div>
                <p className="text-xs text-muted-foreground">{stat.label}</p>
                <p className="font-display text-2xl font-bold text-foreground">
                  {stat.value}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Orders table */}
        <div
          data-ocid="admin.orders_table"
          className="bg-card border border-border rounded-2xl overflow-hidden shadow-card"
        >
          <div className="px-5 py-4 border-b border-border">
            <h2 className="font-display font-semibold text-foreground">
              All Orders
            </h2>
          </div>

          {!orders || orders.length === 0 ? (
            <div
              data-ocid="admin.empty_state"
              className="flex flex-col items-center justify-center py-16 text-center"
            >
              <p className="text-3xl mb-3">📭</p>
              <p className="text-muted-foreground text-sm">No orders yet.</p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="text-xs">Order ID</TableHead>
                    <TableHead className="text-xs">User ID</TableHead>
                    <TableHead className="text-xs">Items</TableHead>
                    <TableHead className="text-xs text-right">Total</TableHead>
                    <TableHead className="text-xs">Status</TableHead>
                    <TableHead className="text-xs">Date</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {orders.map((order, i) => (
                    <TableRow
                      key={order.orderId}
                      data-ocid={`admin.order_row.${i + 1}`}
                    >
                      <TableCell className="text-xs font-mono text-muted-foreground">
                        #{order.orderId.slice(0, 10).toUpperCase()}
                      </TableCell>
                      <TableCell className="text-xs font-mono text-muted-foreground max-w-[120px] truncate">
                        {order.userId.length > 15
                          ? order.userId.slice(0, 15)
                          : order.userId}
                        …
                      </TableCell>
                      <TableCell className="text-xs text-muted-foreground">
                        {order.items.length} item
                        {order.items.length !== 1 ? "s" : ""}
                      </TableCell>
                      <TableCell className="text-xs font-bold text-primary text-right">
                        ${order.total.toFixed(2)}
                      </TableCell>
                      <TableCell>
                        <StatusBadge status={order.status} />
                      </TableCell>
                      <TableCell className="text-xs text-muted-foreground">
                        {new Date(
                          order.timestamp / 1_000_000,
                        ).toLocaleDateString()}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
