/**
 * App.tsx — Router configuration, providers, and the global Navbar.
 *
 * Routes:
 *   /               → Home (landing / hero page)
 *   /products/:category → ProductListingPage (cakes, pastries, cookies, croissants, cupcakes)
 *   /cart           → CartPage
 *   /orders         → OrdersPage
 *   /admin          → AdminPage
 *   /search         → SearchPage
 */
import { ProfileButton } from "@/components/ProfileButton";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import LoginPage from "@/pages/LoginPage";
import { useCartStore } from "@/store/cart-store";
import { useInternetIdentity } from "@caffeineai/core-infrastructure";
import {
  ChefHat,
  ChevronDown,
  ClipboardList,
  Search,
  Settings,
  ShoppingCart,
} from "lucide-react";
import { Suspense, lazy, useState } from "react";
import {
  Link,
  Route,
  BrowserRouter as Router,
  Routes,
  useNavigate,
} from "react-router-dom";

// Lazy-load pages so each chunk only loads when needed
const HomePage = lazy(() => import("@/pages/HomePage"));
const ProductListingPage = lazy(() => import("@/pages/ProductListingPage"));
const CartPage = lazy(() => import("@/pages/CartPage"));
const OrdersPage = lazy(() => import("@/pages/OrdersPage"));
const AdminPage = lazy(() => import("@/pages/AdminPage"));
const SearchPage = lazy(() => import("@/pages/SearchPage"));

// ── Category nav data ──────────────────────────────────────────────────────────
const CATEGORIES = [
  { label: "Cakes", path: "/products/cakes" },
  { label: "Pastries", path: "/products/pastries" },
  { label: "Cookies", path: "/products/cookies" },
  { label: "Croissants", path: "/products/croissants" },
  { label: "Cupcakes", path: "/products/cupcakes" },
] as const;

// ── Navbar ─────────────────────────────────────────────────────────────────────
function Navbar({ isAuthenticated }: { isAuthenticated: boolean }) {
  const totalCount = useCartStore((s) => s.totalCount());
  const [searchValue, setSearchValue] = useState("");
  const navigate = useNavigate();

  // Submit search on Enter key or clicking search icon
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchValue.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchValue.trim())}`);
      setSearchValue("");
    }
  };

  return (
    <header
      data-ocid="navbar"
      className="sticky top-0 z-50 bg-card border-b border-border shadow-card"
    >
      {/* Top bar */}
      <div className="flex items-center justify-between px-4 sm:px-6 h-14 gap-3">
        {/* Brand logo */}
        <Link
          to="/"
          data-ocid="navbar.home_link"
          className="flex items-center gap-2 flex-shrink-0"
        >
          <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center shadow-sm">
            <ChefHat className="w-4 h-4 text-primary-foreground" />
          </div>
          <span className="font-display font-semibold text-foreground tracking-tight hidden sm:block">
            Bread House
          </span>
        </Link>

        {/* Search bar (desktop) */}
        <form
          onSubmit={handleSearch}
          className="hidden md:flex items-center flex-1 max-w-sm mx-4"
        >
          <div className="relative w-full">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              data-ocid="navbar.search_input"
              type="search"
              placeholder="Search products…"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              className="pl-9 h-9 bg-background border-input text-sm"
              autoCapitalize="none"
              autoCorrect="off"
              spellCheck={false}
            />
          </div>
        </form>

        {/* Right side actions */}
        <div className="flex items-center gap-1 sm:gap-2">
          {/* Orders link */}
          {isAuthenticated && (
            <Button
              variant="ghost"
              size="sm"
              asChild
              className="hidden sm:flex gap-1.5 text-sm"
              data-ocid="navbar.orders_link"
            >
              <Link to="/orders">
                <ClipboardList className="w-4 h-4" />
                <span className="hidden lg:inline">My Orders</span>
              </Link>
            </Button>
          )}

          {/* Admin link */}
          {isAuthenticated && (
            <Button
              variant="ghost"
              size="sm"
              asChild
              className="hidden sm:flex gap-1.5 text-sm"
              data-ocid="navbar.admin_link"
            >
              <Link to="/admin">
                <Settings className="w-4 h-4" />
                <span className="hidden lg:inline">Admin</span>
              </Link>
            </Button>
          )}

          {/* Cart icon with item count badge */}
          <Button
            variant="ghost"
            size="sm"
            asChild
            className="relative"
            data-ocid="navbar.cart_button"
          >
            <Link to="/cart">
              <ShoppingCart className="w-5 h-5" />
              {/* Badge showing total cart item count */}
              {totalCount > 0 && (
                <Badge
                  data-ocid="navbar.cart_badge"
                  className="absolute -top-1 -right-1 w-5 h-5 p-0 flex items-center justify-center text-[10px] font-bold bg-primary text-primary-foreground border-2 border-card rounded-full"
                >
                  {totalCount > 99 ? "99+" : totalCount}
                </Badge>
              )}
            </Link>
          </Button>

          {/* Profile button (or login indicator) */}
          {isAuthenticated ? (
            <ProfileButton />
          ) : (
            <Link to="/" data-ocid="navbar.login_link">
              <Button size="sm" className="text-sm">
                Sign In
              </Button>
            </Link>
          )}
        </div>
      </div>

      {/* Category navigation row */}
      <nav
        data-ocid="navbar.category_nav"
        className="flex items-center gap-0.5 px-4 sm:px-6 py-1 border-t border-border/50 overflow-x-auto"
      >
        {/* Products dropdown */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              size="sm"
              className="gap-1 text-xs font-medium text-muted-foreground hover:text-foreground flex-shrink-0"
              data-ocid="navbar.products_dropdown"
            >
              All Products
              <ChevronDown className="w-3 h-3" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="start" className="w-40">
            {CATEGORIES.map((cat) => (
              <DropdownMenuItem key={cat.path} asChild>
                <Link
                  to={cat.path}
                  data-ocid={`navbar.category.${cat.label.toLowerCase()}`}
                  className="cursor-pointer"
                >
                  {cat.label}
                </Link>
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>

        {/* Individual category quick links */}
        {CATEGORIES.map((cat) => (
          <Button
            key={cat.path}
            variant="ghost"
            size="sm"
            asChild
            className="text-xs font-medium text-muted-foreground hover:text-foreground flex-shrink-0"
            data-ocid={`navbar.quick.${cat.label.toLowerCase()}`}
          >
            <Link to={cat.path}>{cat.label}</Link>
          </Button>
        ))}

        {/* Mobile search shortcut */}
        <Button
          variant="ghost"
          size="sm"
          asChild
          className="ml-auto flex-shrink-0 md:hidden"
          data-ocid="navbar.mobile_search_button"
        >
          <Link to="/search">
            <Search className="w-4 h-4" />
          </Link>
        </Button>
      </nav>
    </header>
  );
}

// ── Page loader skeleton ───────────────────────────────────────────────────────
function PageLoader() {
  return (
    <div
      data-ocid="page.loading_state"
      className="flex-1 flex items-center justify-center min-h-[60vh]"
    >
      <div className="flex flex-col items-center gap-4">
        <div className="w-8 h-8 rounded-full border-2 border-primary border-t-transparent animate-spin" />
        <p className="text-sm text-muted-foreground">Loading…</p>
      </div>
    </div>
  );
}

// ── Authenticated app shell ────────────────────────────────────────────────────
function AuthenticatedApp({ isAuthenticated }: { isAuthenticated: boolean }) {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar isAuthenticated={isAuthenticated} />
      <main className="flex-1 flex flex-col">
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route
              path="/products/:category"
              element={<ProductListingPage />}
            />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/orders" element={<OrdersPage />} />
            <Route path="/admin" element={<AdminPage />} />
            <Route path="/search" element={<SearchPage />} />
            {/* Catch-all redirects to home */}
            <Route path="*" element={<HomePage />} />
          </Routes>
        </Suspense>
      </main>
      <footer className="bg-card border-t border-border py-4 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Bread House. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground">
            Built with love using{" "}
            <a
              href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(typeof window !== "undefined" ? window.location.hostname : "")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-2 hover:text-foreground transition-colors"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}

// ── Root App ───────────────────────────────────────────────────────────────────
export default function App() {
  const { isAuthenticated, isInitializing } = useInternetIdentity();

  if (isInitializing) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <div className="w-8 h-8 rounded-full border-2 border-primary border-t-transparent animate-spin" />
          <p className="text-sm text-muted-foreground">Loading Bread House…</p>
        </div>
      </div>
    );
  }

  // Wrap in Router so Navbar can use useNavigate
  return (
    <Router>
      {isAuthenticated ? (
        <AuthenticatedApp isAuthenticated={isAuthenticated} />
      ) : (
        <LoginPage />
      )}
    </Router>
  );
}
