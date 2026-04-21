/**
 * Zustand cart store with localStorage persistence.
 *
 * Usage:
 *   const { items, addItem, removeItem, clearCart } = useCartStore();
 *
 * The cart is automatically saved to localStorage so it survives page refreshes.
 */
import type { CartItem } from "@/types/index";
import { create } from "zustand";
import { persist } from "zustand/middleware";

interface CartState {
  /** All items currently in the cart */
  items: CartItem[];

  /** Add a product to cart, or increment quantity if it already exists */
  addItem: (item: Omit<CartItem, "quantity">) => void;

  /** Remove a single item completely from the cart by id */
  removeItem: (id: string) => void;

  /** Increase quantity of an existing item by 1 */
  incrementItem: (id: string) => void;

  /** Decrease quantity by 1; removes item if quantity reaches 0 */
  decrementItem: (id: string) => void;

  /** Empty the entire cart */
  clearCart: () => void;

  /** Total number of individual units across all cart items */
  totalCount: () => number;

  /** Total price of all items in the cart */
  totalPrice: () => number;
}

export const useCartStore = create<CartState>()(
  // persist middleware saves/restores cart to localStorage automatically
  persist(
    (set, get) => ({
      items: [],

      addItem: (item) => {
        set((state) => {
          const existing = state.items.find((i) => i.id === item.id);
          if (existing) {
            // Increment quantity if item is already in cart
            return {
              items: state.items.map((i) =>
                i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i,
              ),
            };
          }
          // Add new item with quantity 1
          return { items: [...state.items, { ...item, quantity: 1 }] };
        });
      },

      removeItem: (id) => {
        set((state) => ({
          items: state.items.filter((i) => i.id !== id),
        }));
      },

      incrementItem: (id) => {
        set((state) => ({
          items: state.items.map((i) =>
            i.id === id ? { ...i, quantity: i.quantity + 1 } : i,
          ),
        }));
      },

      decrementItem: (id) => {
        set((state) => {
          const item = state.items.find((i) => i.id === id);
          if (!item) return state;
          if (item.quantity <= 1) {
            // Remove item entirely if quantity hits 0
            return { items: state.items.filter((i) => i.id !== id) };
          }
          return {
            items: state.items.map((i) =>
              i.id === id ? { ...i, quantity: i.quantity - 1 } : i,
            ),
          };
        });
      },

      clearCart: () => set({ items: [] }),

      totalCount: () => get().items.reduce((sum, i) => sum + i.quantity, 0),

      totalPrice: () =>
        get().items.reduce((sum, i) => sum + i.price * i.quantity, 0),
    }),
    {
      // localStorage key for persistence
      name: "bread-house-cart",
    },
  ),
);
