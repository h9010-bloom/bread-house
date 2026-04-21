/**
 * Shared types for Bread House bakery app.
 * These are used across the cart, products, and orders features.
 */

/** A single product available in the bakery shop */
export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  originalPrice: number;
  category: "cakes" | "pastries" | "cookies" | "croissants" | "cupcakes";
  imageUrl: string;
}

/** An item stored in the shopping cart (product + quantity) */
export interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  category: Product["category"];
  imageUrl: string;
}

/** A single line item within an order */
export interface OrderItem {
  productId: string;
  name: string;
  price: number;
  quantity: number;
}

/** A completed order placed by the user */
export interface Order {
  orderId: string;
  userId: string;
  items: OrderItem[];
  total: number;
  status: "pending" | "confirmed" | "delivered" | string;
  timestamp: number;
}
