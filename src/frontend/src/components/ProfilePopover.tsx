import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Skeleton } from "@/components/ui/skeleton";
import { useAuth } from "@/hooks/use-auth";
import {
  useUpdateProfileAvatar,
  useUserProfile,
} from "@/hooks/use-user-profile";
import { Check, Copy, LogOut, Upload } from "lucide-react";
import { useRef, useState } from "react";
import { DefaultAvatar } from "./DefaultAvatar";

interface ProfilePopoverProps {
  onClose?: () => void;
}

export function ProfilePopover({ onClose }: ProfilePopoverProps) {
  const { isAuthenticated, principalText, logout } = useAuth();
  const { data: profile, isLoading: profileLoading } =
    useUserProfile(isAuthenticated);

  const updateAvatarMutation = useUpdateProfileAvatar();
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [copied, setCopied] = useState(false);

  const userId = profile?.userId ?? principalText ?? "";
  const avatarUrl = profile?.avatarBlob
    ? profile.avatarBlob.getDirectURL()
    : null;

  const shortId =
    userId.length > 24 ? `${userId.slice(0, 12)}…${userId.slice(-8)}` : userId;

  const handleCopy = async () => {
    if (!userId) return;
    try {
      await navigator.clipboard.writeText(userId);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // clipboard API not available
    }
  };

  const handleLogout = () => {
    onClose?.();
    logout();
  };

  const handleUploadClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    await updateAvatarMutation.mutateAsync(file);
    // reset input so the same file can be re-selected
    e.target.value = "";
  };

  return (
    <div
      data-ocid="profile.card"
      className="w-72 bg-popover border border-border rounded-2xl shadow-xl overflow-hidden"
    >
      {/* ── Avatar + account header ── */}
      <div className="flex items-center gap-3 px-4 pt-4 pb-3">
        <div className="relative flex-shrink-0">
          {avatarUrl ? (
            <img
              src={avatarUrl}
              alt="Profile avatar"
              className="w-12 h-12 rounded-full object-cover ring-2 ring-border"
            />
          ) : (
            <div className="rounded-full ring-2 ring-border overflow-hidden">
              <DefaultAvatar size={48} />
            </div>
          )}
          {isAuthenticated && (
            <span
              data-ocid="profile.registered_indicator"
              className="absolute bottom-0.5 right-0.5 w-2.5 h-2.5 rounded-full bg-primary border-2 border-popover"
              aria-label="Registered"
            />
          )}
        </div>

        <div className="min-w-0 flex-1">
          {profileLoading ? (
            <>
              <Skeleton className="h-4 w-28 mb-1.5" />
              <Skeleton className="h-3 w-20" />
            </>
          ) : (
            <>
              <p className="text-sm font-semibold text-foreground font-display leading-tight truncate">
                My Account
              </p>
              <p className="text-xs text-muted-foreground mt-0.5">
                Internet Identity
              </p>
            </>
          )}
        </div>
      </div>

      <Separator />

      {/* ── User ID section ── */}
      <div className="px-4 py-3">
        <p className="text-[10px] font-semibold text-muted-foreground uppercase tracking-widest mb-2">
          User ID
        </p>
        {profileLoading ? (
          <Skeleton className="h-9 w-full rounded-lg" />
        ) : (
          <div className="flex items-center gap-1.5 bg-muted/70 border border-border rounded-lg px-3 py-2">
            <code
              data-ocid="profile.user_id_display"
              title={userId}
              className="text-xs text-foreground font-mono flex-1 truncate leading-snug"
            >
              {shortId || "—"}
            </code>
            <button
              type="button"
              data-ocid="profile.copy_id_button"
              onClick={handleCopy}
              aria-label={copied ? "Copied!" : "Copy user ID"}
              className="flex-shrink-0 p-1.5 rounded-md hover:bg-border transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-ring"
            >
              {copied ? (
                <Check className="w-3.5 h-3.5 text-[color:var(--success,oklch(0.65_0.18_145))]" />
              ) : (
                <Copy className="w-3.5 h-3.5 text-muted-foreground" />
              )}
            </button>
          </div>
        )}
        {copied && (
          <p
            data-ocid="profile.copy_success_state"
            className="text-[11px] text-[color:var(--success,oklch(0.60_0.18_145))] mt-1.5 font-medium pl-1"
          >
            Copied to clipboard!
          </p>
        )}
      </div>

      <Separator />

      {/* ── Upload avatar ── */}
      <div className="px-4 py-3">
        <input
          ref={fileInputRef}
          type="file"
          accept="image/jpeg,image/png,image/webp"
          className="hidden"
          onChange={handleFileChange}
          aria-label="Upload profile picture"
        />
        <Button
          type="button"
          data-ocid="profile.upload_button"
          variant="outline"
          size="sm"
          className="w-full gap-2 text-xs font-medium"
          onClick={handleUploadClick}
          disabled={updateAvatarMutation.isPending}
        >
          {updateAvatarMutation.isPending ? (
            <>
              <span className="w-3.5 h-3.5 rounded-full border-2 border-muted-foreground border-t-foreground animate-spin" />
              <span data-ocid="profile.upload_loading_state">Uploading…</span>
            </>
          ) : (
            <>
              <Upload className="w-3.5 h-3.5" />
              Upload Profile Picture
            </>
          )}
        </Button>
      </div>

      <Separator />

      {/* ── Logout ── */}
      <div className="p-2">
        <button
          type="button"
          data-ocid="profile.logout_button"
          onClick={handleLogout}
          className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium text-foreground hover:bg-destructive/10 hover:text-destructive transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-ring group"
        >
          <LogOut className="w-4 h-4 text-muted-foreground group-hover:text-destructive transition-colors" />
          Log Out
        </button>
      </div>
    </div>
  );
}
