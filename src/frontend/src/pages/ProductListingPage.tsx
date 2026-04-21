/**
 * ProductListingPage — ONE reusable page for all 5 bakery categories.
 *
 * URL: /products/:category (cakes | pastries | cookies | croissants | cupcakes)
 * The category param determines which products and title to show.
 */
import { ProductCard } from "@/components/ProductCard";
import { CATEGORY_LABELS, PRODUCTS } from "@/data/products";
import type { Product } from "@/types/index";
import { ChevronRight } from "lucide-react";
import { Link, useParams } from "react-router-dom";

// Type guard to check if the param is a valid category
function isValidCategory(cat: string): cat is Product["category"] {
  return ["cakes", "pastries", "cookies", "croissants", "cupcakes"].includes(
    cat,
  );
}

// Emoji for each category header
const CATEGORY_EMOJI: Record<Product["category"], string> = {
  cakes: "🎂",
  pastries: "🥐",
  cookies: "🍪",
  croissants: "🥐",
  cupcakes: "🧁",
};

export default function ProductListingPage() {
  const { category } = useParams<{ category: string }>();

  // Validate the category param
  if (!category || !isValidCategory(category)) {
    return (
      <div
        data-ocid="products.error_state"
        className="flex-1 flex items-center justify-center py-20 text-center"
      >
        <div>
          <p className="text-4xl mb-4">🤔</p>
          <h2 className="font-display text-xl font-semibold text-foreground mb-2">
            Category not found
          </h2>
          <p className="text-muted-foreground text-sm mb-6">
            That category doesn't exist. Try browsing our menu.
          </p>
          <Link
            to="/"
            className="text-primary underline underline-offset-2 text-sm"
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    );
  }

  const products = PRODUCTS[category];
  const label = CATEGORY_LABELS[category];
  const emoji = CATEGORY_EMOJI[category];

  return (
    <div className="flex flex-col">
      {/* ── Page header ────────────────────────────────────────────── */}
      <section className="bg-card border-b border-border py-8 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          {/* Breadcrumb */}
          <nav
            data-ocid="products.breadcrumb"
            className="flex items-center gap-1.5 text-xs text-muted-foreground mb-4"
          >
            <Link to="/" className="hover:text-foreground transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-foreground font-medium">{label}</span>
          </nav>

          {/* Title */}
          <div className="flex items-center gap-3">
            <span className="text-3xl">{emoji}</span>
            <div>
              <h1
                data-ocid="products.page_title"
                className="font-display text-3xl font-bold text-foreground"
              >
                Our {label}
              </h1>
              <p className="text-muted-foreground text-sm mt-0.5">
                {products.length} freshly baked items available today
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Product grid ───────────────────────────────────────────── */}
      <section
        data-ocid="products.grid_section"
        className="bg-background py-10 px-4 sm:px-6 flex-1"
      >
        <div className="max-w-7xl mx-auto">
          <div
            data-ocid="products.list"
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5"
          >
            {products.map((product, i) => (
              <ProductCard key={product.id} product={product} index={i + 1} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Cross-sell banner ───────────────────────────────────────── */}
      <section className="bg-muted/40 py-10 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-muted-foreground text-sm mb-4">
            Explore more from our bakery
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            {(
              [
                "cakes",
                "pastries",
                "cookies",
                "croissants",
                "cupcakes",
              ] as const
            )
              .filter((c) => c !== category)
              .map((c) => (
                <Link
                  key={c}
                  to={`/products/${c}`}
                  data-ocid={`products.crosssell.${c}`}
                  className="inline-flex items-center gap-1.5 px-4 py-2 bg-card border border-border rounded-full text-sm font-medium text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-smooth shadow-card"
                >
                  {CATEGORY_EMOJI[c]} {CATEGORY_LABELS[c]}
                </Link>
              ))}
          </div>
        </div>
      </section>
    </div>
  );
}
