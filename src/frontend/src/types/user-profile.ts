import type { ExternalBlob } from "../backend.d";

export interface UserProfile {
  userId: string;
  avatarBlob: ExternalBlob | null;
  createdAt: bigint;
  isAdmin: boolean;
}

/** @deprecated — kept for reference only; backend now returns UserProfile directly */
export interface RawUserProfile {
  userId: string;
  avatarBlob: { __kind__: "Some"; value: ExternalBlob } | { __kind__: "None" };
  createdAt: bigint;
}
