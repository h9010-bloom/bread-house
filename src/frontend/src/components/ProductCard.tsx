/**
 * ProductCard — reusable card for displaying a single bakery product.
 * Used by ProductListingPage and SearchPage.
 */
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useCartStore } from "@/store/cart-store";
import type { Product } from "@/types/index";
import { ShoppingCart } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

interface ProductCardProps {
  product: Product;
  /** Position index for data-ocid markers (1-based) */
  index: number;
}

export function ProductCard({ product, index }: ProductCardProps) {
  const addItem = useCartStore((s) => s.addItem);
  const [added, setAdded] = useState(false);

  const discount = Math.round(
    ((product.originalPrice - product.price) / product.originalPrice) * 100,
  );

  const handleAddToCart = () => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      category: product.category,
      imageUrl: product.imageUrl,
    });

    // Brief visual confirmation
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);

    toast.success(`${product.name} added to cart!`, {
      duration: 2500,
      position: "bottom-right",
    });
  };

  return (
    <div
      data-ocid={`product.item.${index}`}
      className="bg-card border border-border rounded-2xl overflow-hidden shadow-card hover:shadow-elevated transition-smooth group"
    >
      {/* Product image */}
      <div className="relative aspect-square overflow-hidden bg-muted">
        <img
          src={product.imageUrl}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-smooth"
          loading="lazy"
        />
        {/* Discount badge */}
        {discount > 0 && (
          <Badge
            data-ocid={`product.discount_badge.${index}`}
            className="absolute top-3 left-3 bg-primary text-primary-foreground text-xs font-semibold px-2 py-0.5"
          >
            {discount}% OFF
          </Badge>
        )}
      </div>

      {/* Product info */}
      <div className="p-4 flex flex-col gap-3">
        <div>
          <h3 className="font-display font-semibold text-foreground text-base leading-snug line-clamp-1">
            {product.name}
          </h3>
          <p className="text-xs text-muted-foreground mt-1 line-clamp-2 leading-relaxed">
            {product.description}
          </p>
        </div>

        {/* Pricing row */}
        <div className="flex items-baseline gap-2">
          <span className="text-lg font-bold text-primary font-display">
            ${product.price.toFixed(2)}
          </span>
          <span className="text-sm text-muted-foreground line-through">
            ${product.originalPrice.toFixed(2)}
          </span>
        </div>

        {/* Add to cart button */}
        <Button
          data-ocid={`product.add_to_cart.${index}`}
          onClick={handleAddToCart}
          size="sm"
          className={`w-full gap-2 text-sm font-medium transition-smooth ${
            added
              ? "bg-accent text-accent-foreground"
              : "bg-primary text-primary-foreground hover:bg-primary/90"
          }`}
        >
          <ShoppingCart className="w-4 h-4" />
          {added ? "Added!" : "Add to Cart"}
        </Button>
      </div>
    </div>
  );
}
