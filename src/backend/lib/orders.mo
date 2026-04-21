import Map "mo:core/Map";
import List "mo:core/List";
import Principal "mo:core/Principal";
import Runtime "mo:core/Runtime";
import Types "../types/orders";

module {
  /// Returns all orders placed by a specific user principal
  public func getByUser(
    _orders : List.List<Types.Order>,
    _userId : Text,
  ) : [Types.Order] {
    Runtime.trap("not implemented");
  };

  /// Returns every order stored (admin only — caller check is done in mixin)
  public func getAll(
    _orders : List.List<Types.Order>,
  ) : [Types.Order] {
    Runtime.trap("not implemented");
  };

  /// Creates and stores a new order for the given caller, returns the saved Order
  public func place(
    _orders    : List.List<Types.Order>,
    _caller    : Principal,
    _items     : [Types.OrderItemInput],
    _orderId   : Text,
    _timestamp : Int,
  ) : Types.Order {
    Runtime.trap("not implemented");
  };
};
