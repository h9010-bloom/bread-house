import Map "mo:core/Map";
import Principal "mo:core/Principal";
import Runtime "mo:core/Runtime";
import AccessControl "mo:caffeineai-authorization/access-control";
import Storage "mo:caffeineai-object-storage/Storage";
import UserProfileLib "../lib/user-profile";
import Types "../types/user-profile";

mixin (
  accessControlState : AccessControl.AccessControlState,
  profiles : Map.Map<Principal, UserProfileLib.ProfileInternal>,
) {
  /// Get caller's profile, auto-creating it on first call
  public shared ({ caller }) func getOrCreateProfile() : async Types.UserProfile {
    if (caller.isAnonymous()) {
      Runtime.trap("Unauthorized: Must be logged in");
    };
    let profile = UserProfileLib.getOrCreate(profiles, caller);
    profile.toPublic();
  };

  /// Get caller's existing profile (returns null if not yet created)
  public query ({ caller }) func getMyProfile() : async ?Types.UserProfile {
    if (caller.isAnonymous()) {
      return null;
    };
    switch (UserProfileLib.get(profiles, caller)) {
      case (?profile) ?profile.toPublic();
      case null null;
    };
  };

  /// Update the caller's avatar using an object-storage asset blob
  public shared ({ caller }) func updateProfileAvatar(avatarBlob : Storage.ExternalBlob) : async () {
    if (caller.isAnonymous()) {
      Runtime.trap("Unauthorized: Must be logged in");
    };
    UserProfileLib.updateAvatar(profiles, caller, avatarBlob);
  };
};
