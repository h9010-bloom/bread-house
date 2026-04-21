module {
  /// A single item within an order
  public type OrderItem = {
    productId : Text;
    name      : Text;
    price     : Float;
    quantity  : Nat;
  };

  /// Input type accepted when placing a new order
  public type OrderItemInput = {
    productId : Text;
    name      : Text;
    price     : Float;
    quantity  : Nat;
  };

  /// A completed order record stored in the backend
  public type Order = {
    orderId   : Text;          // Unique order identifier
    userId    : Text;          // Caller principal as text
    items     : [OrderItem];   // Items included in the order
    total     : Float;         // Total price (sum of item price * quantity)
    status    : Text;          // "Pending" or "Confirmed"
    timestamp : Int;           // Nanosecond timestamp of when order was placed
  };
};
