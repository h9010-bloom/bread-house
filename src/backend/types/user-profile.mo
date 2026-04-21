import Storage "mo:caffeineai-object-storage/Storage";

module {
  /// Public profile type returned to frontend (all shared types)
  public type UserProfile = {
    userId    : Text;                   // Principal as text
    avatarBlob : ?Storage.ExternalBlob; // null if no avatar uploaded
    isAdmin   : Bool;                   // true if user has admin privileges
    createdAt : Int;                    // Nanosecond timestamp
  };
};
