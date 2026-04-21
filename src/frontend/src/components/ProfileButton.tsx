import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useAuth } from "@/hooks/use-auth";
import { useUserProfile } from "@/hooks/use-user-profile";
import { useState } from "react";
import { DefaultAvatar } from "./DefaultAvatar";
import { ProfilePopover } from "./ProfilePopover";

/**
 * ProfileButton — navbar profile icon with registration badge.
 *
 * - Shows a filled indigo dot when the user is registered (has a profile).
 * - Opens a ProfilePopover card on click.
 * - Uses DefaultAvatar when no image is uploaded.
 */
export function ProfileButton() {
  const { isAuthenticated } = useAuth();
  const { data: profile, isLoading } = useUserProfile(isAuthenticated);
  const [open, setOpen] = useState(false);

  const avatarUrl = profile?.avatarBlob
    ? profile.avatarBlob.getDirectURL()
    : null;

  // Show registration badge when profile is confirmed loaded and exists
  const isRegistered = !isLoading && !!profile;

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <button
          type="button"
          data-ocid="navbar.profile_button"
          aria-label="Open profile menu"
          aria-expanded={open}
          aria-haspopup="dialog"
          className="relative flex items-center justify-center rounded-full ring-2 ring-transparent hover:ring-primary/30 focus-visible:ring-primary/60 focus:outline-none transition-all duration-200"
          style={{ width: 40, height: 40 }}
        >
          {/* Avatar image or default silhouette */}
          {avatarUrl ? (
            <img
              src={avatarUrl}
              alt="Profile avatar"
              className="w-10 h-10 rounded-full object-cover"
            />
          ) : (
            <div className="w-10 h-10 rounded-full overflow-hidden">
              <DefaultAvatar size={40} />
            </div>
          )}

          {/* Registration indicator dot:
              - filled indigo = registered
              - only shown when authenticated and registered */}
          {isAuthenticated && isRegistered && (
            <span
              data-ocid="navbar.registered_indicator"
              aria-label="Account registered"
              className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-primary border-2 border-card shadow-sm"
            />
          )}

          {/* Loading pulse when still resolving */}
          {isAuthenticated && isLoading && (
            <span
              data-ocid="navbar.profile_loading_state"
              className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-muted-foreground/40 border-2 border-card animate-pulse"
            />
          )}
        </button>
      </PopoverTrigger>

      <PopoverContent
        data-ocid="navbar.profile_popover"
        align="end"
        sideOffset={10}
        className="p-0 w-72 border-0 shadow-none bg-transparent"
      >
        <ProfilePopover onClose={() => setOpen(false)} />
      </PopoverContent>
    </Popover>
  );
}
