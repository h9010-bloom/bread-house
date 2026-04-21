/**
 * SearchPage — Search across all 25 products by name or description.
 * URL: /search?q=query
 */
import { ProductCard } from "@/components/ProductCard";
import { Input } from "@/components/ui/input";
import { ALL_PRODUCTS } from "@/data/products";
import { Search } from "lucide-react";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

export default function SearchPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialQuery = searchParams.get("q") ?? "";
  const [query, setQuery] = useState(initialQuery);

  // Sync URL param → local state when navigating
  useEffect(() => {
    setQuery(searchParams.get("q") ?? "");
  }, [searchParams]);

  // Update URL as the user types
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setQuery(val);
    if (val.trim()) {
      setSearchParams({ q: val.trim() });
    } else {
      setSearchParams({});
    }
  };

  // Filter products by name or description (case-insensitive)
  const results =
    query.trim().length > 0
      ? ALL_PRODUCTS.filter(
          (p) =>
            p.name.toLowerCase().includes(query.toLowerCase()) ||
            p.description.toLowerCase().includes(query.toLowerCase()) ||
            p.category.toLowerCase().includes(query.toLowerCase()),
        )
      : [];

  return (
    <div className="flex-1 py-10 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="font-display text-3xl font-bold text-foreground mb-6">
          Search
        </h1>

        {/* Search input */}
        <div className="relative max-w-xl mb-10">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input
            data-ocid="search.input"
            type="search"
            placeholder="Search cakes, pastries, cookies…"
            value={query}
            onChange={handleChange}
            className="pl-10 h-11 text-sm bg-card border-input"
            autoFocus
            autoCapitalize="none"
            autoCorrect="off"
            spellCheck={false}
          />
        </div>

        {/* Results */}
        {query.trim() === "" ? (
          <div
            data-ocid="search.empty_state"
            className="flex flex-col items-center justify-center py-20 text-center"
          >
            <Search className="w-12 h-12 text-muted-foreground/30 mb-4" />
            <p className="text-muted-foreground text-sm">
              Type a product name to search our bakery
            </p>
          </div>
        ) : results.length === 0 ? (
          <div
            data-ocid="search.no_results_state"
            className="flex flex-col items-center justify-center py-20 text-center"
          >
            <p className="text-3xl mb-4">🥺</p>
            <h2 className="font-display text-xl font-semibold text-foreground mb-2">
              No results for "{query}"
            </h2>
            <p className="text-muted-foreground text-sm">
              Try searching for "cake", "croissant", or "cookie"
            </p>
          </div>
        ) : (
          <>
            <p
              data-ocid="search.result_count"
              className="text-sm text-muted-foreground mb-6"
            >
              {results.length} result{results.length !== 1 ? "s" : ""} for "
              {query}"
            </p>
            <div
              data-ocid="search.results_list"
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5"
            >
              {results.map((product, i) => (
                <ProductCard key={product.id} product={product} index={i + 1} />
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
