/**
 * DefaultAvatar — professional male silhouette SVG for unauthenticated / no-upload state.
 * Mimics the LinkedIn-style grey silhouette on a light background circle.
 */

interface DefaultAvatarProps {
  size?: number;
  className?: string;
}

export function DefaultAvatar({
  size = 40,
  className = "",
}: DefaultAvatarProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={className}
    >
      {/* Background circle */}
      <circle cx="20" cy="20" r="20" fill="hsl(var(--muted))" />

      {/* Head */}
      <circle
        cx="20"
        cy="14.5"
        r="5.5"
        fill="hsl(var(--muted-foreground) / 0.55)"
      />

      {/* Shoulders / body silhouette */}
      <path
        d="M6 37.5c0-7.18 6.268-13 14-13s14 5.82 14 13"
        fill="hsl(var(--muted-foreground) / 0.55)"
      />

      {/* Subtle collar / suit line */}
      <path
        d="M20 24.5l-2.5 3.5 2.5 2 2.5-2-2.5-3.5z"
        fill="hsl(var(--muted-foreground) / 0.35)"
      />
    </svg>
  );
}
