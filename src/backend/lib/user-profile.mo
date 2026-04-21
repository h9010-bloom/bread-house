import Map "mo:core/Map";
import Principal "mo:core/Principal";
import Time "mo:core/Time";
import Storage "mo:caffeineai-object-storage/Storage";
import Types "../types/user-profile";

module {
  /// Internal mutable profile record (stored in state)
  public type ProfileInternal = {
    userId     : Text;
    var avatarBlob : ?Storage.ExternalBlob;
    var isAdmin : Bool;   // admin flag; default false
    createdAt  : Int;
  };

  /// Convenience alias used at API boundaries (same shape as Types.UserProfile)
  public type PublicProfile = Types.UserProfile;

  /// Get or auto-create a profile for the caller principal
  public func getOrCreate(
    profiles : Map.Map<Principal, ProfileInternal>,
    caller : Principal,
  ) : ProfileInternal {
    switch (profiles.get(caller)) {
      case (?existing) existing;
      case null {
        let profile : ProfileInternal = {
          userId = caller.toText();
          var avatarBlob = null;
          var isAdmin = false;
          createdAt = Time.now();
        };
        profiles.add(caller, profile);
        profile;
      };
    };
  };

  /// Get an existing profile, returns null if not found
  public func get(
    profiles : Map.Map<Principal, ProfileInternal>,
    caller : Principal,
  ) : ?ProfileInternal {
    profiles.get(caller);
  };

  /// Update the avatar blob reference for the caller's profile
  public func updateAvatar(
    profiles : Map.Map<Principal, ProfileInternal>,
    caller : Principal,
    avatarBlob : Storage.ExternalBlob,
  ) : () {
    switch (profiles.get(caller)) {
      case (?profile) {
        profile.avatarBlob := ?avatarBlob;
      };
      case null {
        let profile : ProfileInternal = {
          userId = caller.toText();
          var avatarBlob = ?avatarBlob;
          var isAdmin = false;
          createdAt = Time.now();
        };
        profiles.add(caller, profile);
      };
    };
  };

  /// Convert internal profile to public API type
  public func toPublic(self : ProfileInternal) : Types.UserProfile {
    {
      userId    = self.userId;
      avatarBlob = self.avatarBlob;
      isAdmin   = self.isAdmin;
      createdAt = self.createdAt;
    };
  };
};
