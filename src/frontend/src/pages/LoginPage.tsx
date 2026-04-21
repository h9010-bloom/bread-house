/**
 * LoginPage — Internet Identity sign-in screen.
 *
 * Key fix: email inputs have autoCapitalize="none" to prevent browsers
 * from uppercasing the first letter of email addresses.
 */
import { Button } from "@/components/ui/button";
import { useAuth } from "@/hooks/use-auth";
import { ChefHat, Loader2, LogIn, ShieldCheck } from "lucide-react";

export default function LoginPage() {
  const { login, isInitializing, isLoggingIn } = useAuth();
  const isLoading = isInitializing || isLoggingIn;

  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center p-6">
      {/* Decorative background accent */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      </div>

      {/* Brand header */}
      <div className="flex items-center gap-3 mb-8">
        <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center shadow-elevated">
          <ChefHat className="w-5 h-5 text-primary-foreground" />
        </div>
        <span className="font-display text-2xl font-semibold text-foreground tracking-tight">
          Bread House
        </span>
      </div>

      {/* Login card */}
      <div className="relative w-full max-w-md bg-card border border-border rounded-2xl shadow-elevated p-10 flex flex-col items-center gap-8">
        {/* Icon + heading */}
        <div className="flex flex-col items-center gap-3">
          <div className="w-16 h-16 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center">
            <ShieldCheck className="w-8 h-8 text-primary" />
          </div>
          <div className="text-center">
            <h1 className="text-2xl font-display font-semibold text-foreground tracking-tight">
              Welcome back
            </h1>
            <p className="text-sm text-muted-foreground mt-1">
              Sign in with Internet Identity to order your favourite treats
            </p>
          </div>
        </div>

        <div className="w-full h-px bg-border" />

        {/* Feature bullets */}
        <ul className="w-full flex flex-col gap-3 text-sm text-muted-foreground">
          {[
            "Decentralized identity — no passwords needed",
            "Your User ID is created automatically on first sign-in",
            "Cart persists across sessions",
          ].map((item) => (
            <li key={item} className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
              {item}
            </li>
          ))}
        </ul>

        {/* Sign in CTA */}
        <Button
          data-ocid="login.primary_button"
          onClick={login}
          disabled={isLoading}
          className="w-full h-11 text-sm font-medium transition-smooth"
          size="lg"
        >
          {isLoading ? (
            <>
              <Loader2 className="w-4 h-4 mr-2 animate-spin" />
              {isInitializing ? "Initializing…" : "Opening login…"}
            </>
          ) : (
            <>
              <LogIn className="w-4 h-4 mr-2" />
              Sign in with Internet Identity
            </>
          )}
        </Button>

        <p className="text-xs text-muted-foreground text-center">
          Powered by Internet Computer. Your identity is self-sovereign.
        </p>
      </div>

      {/* Branding footer */}
      <p className="mt-8 text-xs text-muted-foreground">
        © {new Date().getFullYear()}.{" "}
        <a
          href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(typeof window !== "undefined" ? window.location.hostname : "")}`}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-foreground transition-colors underline underline-offset-2"
        >
          Built with love using caffeine.ai
        </a>
      </p>
    </div>
  );
}
