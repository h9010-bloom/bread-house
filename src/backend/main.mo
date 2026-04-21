import Map "mo:core/Map";
import List "mo:core/List";
import Principal "mo:core/Principal";
import AccessControl "mo:caffeineai-authorization/access-control";
import MixinAuthorization "mo:caffeineai-authorization/MixinAuthorization";
import MixinObjectStorage "mo:caffeineai-object-storage/Mixin";
import UserProfileLib "lib/user-profile";
import UserProfileApi "mixins/user-profile-api";
import OrderTypes "types/orders";
import OrdersApi "mixins/orders-api";



actor {
  let accessControlState = AccessControl.initState();
  include MixinAuthorization(accessControlState);
  include MixinObjectStorage();

  let profiles = Map.empty<Principal, UserProfileLib.ProfileInternal>();
  include UserProfileApi(accessControlState, profiles);

  // Orders state
  let orders = List.empty<OrderTypes.Order>();
  include OrdersApi(profiles, orders);
};
