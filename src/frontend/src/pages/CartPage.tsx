/**
 * CartPage — View and manage cart items, then place an order (Cash on Delivery).
 */
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { useCartStore } from "@/store/cart-store";
import { Minus, Plus, ShoppingBag, Trash2 } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "sonner";

export default function CartPage() {
  const {
    items,
    removeItem,
    incrementItem,
    decrementItem,
    clearCart,
    totalPrice,
  } = useCartStore();
  const [isPlacingOrder, setIsPlacingOrder] = useState(false);

  const total = totalPrice();

  // Place order — stores in localStorage since backend order methods are not yet wired
  const handlePlaceOrder = async () => {
    if (items.length === 0) return;
    setIsPlacingOrder(true);
    try {
      // Simulate a brief processing delay for UX feedback
      await new Promise((resolve) => setTimeout(resolve, 800));

      // Save order to localStorage so OrdersPage can display it
      const order = {
        orderId: `ord_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`,
        userId: "local",
        items: items.map((item) => ({
          productId: item.id,
          name: item.name,
          price: item.price,
          quantity: item.quantity,
        })),
        total,
        status: "confirmed",
        timestamp: Date.now() * 1_000_000, // nanoseconds format
      };

      const existing = JSON.parse(
        localStorage.getItem("bread-house-orders") ?? "[]",
      );
      localStorage.setItem(
        "bread-house-orders",
        JSON.stringify([order, ...existing]),
      );

      clearCart();
      toast.success("Order placed! Pay on delivery 💵", {
        duration: 5000,
        position: "bottom-right",
      });
    } catch (err) {
      console.error("Order failed:", err);
      toast.error("Failed to place order. Please try again.", {
        position: "bottom-right",
      });
    } finally {
      setIsPlacingOrder(false);
    }
  };

  // Empty cart state
  if (items.length === 0) {
    return (
      <div
        data-ocid="cart.empty_state"
        className="flex-1 flex flex-col items-center justify-center py-24 px-4 text-center"
      >
        <ShoppingBag className="w-16 h-16 text-muted-foreground/40 mb-6" />
        <h2 className="font-display text-2xl font-semibold text-foreground mb-2">
          Your cart is empty
        </h2>
        <p className="text-muted-foreground text-sm mb-8 max-w-xs">
          Add some freshly baked goodness to get started!
        </p>
        <Button data-ocid="cart.start_shopping_button" asChild size="lg">
          <Link to="/products/cakes">Browse Cakes</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="flex-1 py-10 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto">
        <h1
          data-ocid="cart.page_title"
          className="font-display text-3xl font-bold text-foreground mb-8"
        >
          Your Cart
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* ── Cart items list ──────────────────────────────────── */}
          <div
            data-ocid="cart.items_list"
            className="lg:col-span-2 flex flex-col gap-4"
          >
            {items.map((item, i) => (
              <div
                key={item.id}
                data-ocid={`cart.item.${i + 1}`}
                className="flex items-center gap-4 bg-card border border-border rounded-2xl p-4 shadow-card"
              >
                {/* Product thumbnail */}
                <img
                  src={item.imageUrl}
                  alt={item.name}
                  className="w-16 h-16 rounded-xl object-cover flex-shrink-0"
                />

                {/* Name + category */}
                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-foreground text-sm leading-tight truncate">
                    {item.name}
                  </p>
                  <p className="text-xs text-muted-foreground capitalize mt-0.5">
                    {item.category}
                  </p>
                  <p className="text-sm font-bold text-primary mt-1">
                    ${(item.price * item.quantity).toFixed(2)}
                  </p>
                </div>

                {/* Quantity controls */}
                <div className="flex items-center gap-2">
                  <Button
                    variant="outline"
                    size="icon"
                    className="w-7 h-7 rounded-lg"
                    data-ocid={`cart.decrement.${i + 1}`}
                    onClick={() => decrementItem(item.id)}
                    aria-label="Decrease quantity"
                  >
                    <Minus className="w-3 h-3" />
                  </Button>
                  <span
                    className="w-6 text-center text-sm font-semibold text-foreground"
                    data-ocid={`cart.quantity.${i + 1}`}
                  >
                    {item.quantity}
                  </span>
                  <Button
                    variant="outline"
                    size="icon"
                    className="w-7 h-7 rounded-lg"
                    data-ocid={`cart.increment.${i + 1}`}
                    onClick={() => incrementItem(item.id)}
                    aria-label="Increase quantity"
                  >
                    <Plus className="w-3 h-3" />
                  </Button>
                </div>

                {/* Remove */}
                <Button
                  variant="ghost"
                  size="icon"
                  className="w-8 h-8 text-muted-foreground hover:text-destructive flex-shrink-0"
                  data-ocid={`cart.delete_button.${i + 1}`}
                  onClick={() => removeItem(item.id)}
                  aria-label={`Remove ${item.name}`}
                >
                  <Trash2 className="w-4 h-4" />
                </Button>
              </div>
            ))}
          </div>

          {/* ── Order summary panel ──────────────────────────────── */}
          <div
            data-ocid="cart.summary_panel"
            className="bg-card border border-border rounded-2xl p-6 shadow-card h-fit"
          >
            <h2 className="font-display font-semibold text-foreground text-lg mb-5">
              Order Summary
            </h2>

            <div className="flex flex-col gap-3 text-sm">
              {items.map((item) => (
                <div key={item.id} className="flex justify-between">
                  <span className="text-muted-foreground truncate max-w-[70%]">
                    {item.name} × {item.quantity}
                  </span>
                  <span className="text-foreground font-medium">
                    ${(item.price * item.quantity).toFixed(2)}
                  </span>
                </div>
              ))}
            </div>

            <Separator className="my-4" />

            <div className="flex justify-between text-base font-bold text-foreground mb-1">
              <span>Total</span>
              <span>${total.toFixed(2)}</span>
            </div>
            <p className="text-xs text-muted-foreground mb-5">
              💵 Cash on Delivery only
            </p>

            <Button
              data-ocid="cart.place_order_button"
              onClick={handlePlaceOrder}
              disabled={isPlacingOrder}
              className="w-full font-semibold"
              size="lg"
            >
              {isPlacingOrder ? "Placing Order…" : "Place Order (COD)"}
            </Button>

            <Button
              variant="ghost"
              size="sm"
              className="w-full mt-2 text-muted-foreground"
              data-ocid="cart.continue_shopping_button"
              asChild
            >
              <Link to="/products/cakes">← Continue Shopping</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
