import { ProductCard } from "@/components/ProductCard";
/**
 * HomePage — Landing page with hero banner and category highlights.
 * Single-page layout with smooth scroll to sections.
 */
import { Button } from "@/components/ui/button";
import { CATEGORY_LABELS, PRODUCTS } from "@/data/products";
import type { Product } from "@/types/index";
import { ChefHat, Star } from "lucide-react";
import { Link } from "react-router-dom";

// Featured picks — one from each category
const FEATURED: Product[] = [
  PRODUCTS.cakes[0],
  PRODUCTS.pastries[0],
  PRODUCTS.cookies[0],
  PRODUCTS.croissants[0],
  PRODUCTS.cupcakes[0],
];

const CATEGORY_CARDS = [
  {
    key: "cakes" as const,
    emoji: "🎂",
    description: "Celebration and everyday layer cakes",
    color: "bg-primary/10",
  },
  {
    key: "pastries" as const,
    emoji: "🥐",
    description: "Flaky pastries and choux perfection",
    color: "bg-accent/10",
  },
  {
    key: "cookies" as const,
    emoji: "🍪",
    description: "Chewy, crisp, and melt-in-mouth",
    color: "bg-secondary/10",
  },
  {
    key: "croissants" as const,
    emoji: "🥐",
    description: "Buttery laminated croissants",
    color: "bg-primary/10",
  },
  {
    key: "cupcakes" as const,
    emoji: "🧁",
    description: "Single-serve indulgent cupcakes",
    color: "bg-accent/10",
  },
];

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* ── Hero ─────────────────────────────────────────────────────── */}
      <section
        data-ocid="home.hero_section"
        className="relative bg-primary overflow-hidden py-20 px-4 sm:px-6"
      >
        {/* Decorative blob */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-accent rounded-full -translate-y-1/2 translate-x-1/3 blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary rounded-full translate-y-1/2 -translate-x-1/4 blur-2xl" />
        </div>

        <div className="relative max-w-3xl mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-6">
            <ChefHat className="w-6 h-6 text-primary-foreground/80" />
            <span className="text-primary-foreground/80 text-sm font-medium uppercase tracking-widest">
              Freshly Baked Daily
            </span>
          </div>
          <h1 className="font-display text-4xl sm:text-6xl font-bold text-primary-foreground leading-tight mb-6">
            Indulge In Heavenly
            <br />
            Sweet Delights
          </h1>
          <p className="text-primary-foreground/75 text-lg sm:text-xl mb-10 leading-relaxed max-w-xl mx-auto">
            Artisan cakes, pastries, cookies, croissants, and cupcakes —
            handcrafted with love every single morning.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button
              data-ocid="home.shop_now_button"
              size="lg"
              variant="secondary"
              className="font-semibold text-foreground shadow-elevated"
              asChild
            >
              <Link to="/products/cakes">Shop Now</Link>
            </Button>
            <Button
              data-ocid="home.view_all_button"
              size="lg"
              variant="outline"
              className="border-primary-foreground/30 text-black hover:bg-primary-foreground/10"
              asChild
            >
              <Link to="/products/pastries">Explore Pastries</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* ── Category cards ───────────────────────────────────────────── */}
      <section
        data-ocid="home.categories_section"
        className="bg-muted/40 py-14 px-4 sm:px-6"
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="font-display text-3xl font-bold text-foreground text-center mb-10">
            Browse by Category
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {CATEGORY_CARDS.map((cat) => (
              <Link
                key={cat.key}
                to={`/products/${cat.key}`}
                data-ocid={`home.category_card.${cat.key}`}
                className="group flex flex-col items-center gap-3 p-5 bg-card border border-border rounded-2xl shadow-card hover:shadow-elevated hover:-translate-y-1 transition-smooth text-center"
              >
                <span className="text-4xl">{cat.emoji}</span>
                <div>
                  <p className="font-display font-semibold text-foreground text-sm">
                    {CATEGORY_LABELS[cat.key]}
                  </p>
                  <p className="text-xs text-muted-foreground mt-0.5 leading-snug line-clamp-2">
                    {cat.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Featured products ────────────────────────────────────────── */}
      <section
        data-ocid="home.featured_section"
        className="bg-background py-14 px-4 sm:px-6"
      >
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-10 justify-center">
            <Star className="w-5 h-5 text-accent" />
            <h2 className="font-display text-3xl font-bold text-foreground">
              Staff Picks
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
            {FEATURED.map((product, i) => (
              <ProductCard key={product.id} product={product} index={i + 1} />
            ))}
          </div>
        </div>
      </section>

      {/* ── About banner ─────────────────────────────────────────────── */}
      <section
        data-ocid="home.about_section"
        className="bg-muted/40 py-14 px-4 sm:px-6"
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-display text-3xl font-bold text-foreground mb-5">
            Why Bread House?
          </h2>
          <p className="text-muted-foreground text-base leading-relaxed mb-8 max-w-2xl mx-auto">
            We use only the finest ingredients — French butter, single-origin
            chocolate, and locally-sourced seasonal fruits. Every item is
            handcrafted in our open kitchen each morning, so you always get the
            freshest bite possible.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              {
                icon: "🌾",
                title: "Premium Ingredients",
                desc: "Sourced from trusted local farms and international artisan suppliers",
              },
              {
                icon: "👨‍🍳",
                title: "Expert Bakers",
                desc: "Our pastry chefs have trained in Paris, Vienna, and Tokyo",
              },
              {
                icon: "🚀",
                title: "Fresh Daily",
                desc: "Everything baked from scratch every morning — never day-old",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-card border border-border rounded-2xl p-6 shadow-card text-center"
              >
                <span className="text-3xl block mb-3">{item.icon}</span>
                <h3 className="font-display font-semibold text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
