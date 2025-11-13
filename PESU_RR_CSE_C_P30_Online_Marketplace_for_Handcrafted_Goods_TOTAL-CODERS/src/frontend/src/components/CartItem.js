import React from "react";

const CartItem = ({ item, removeFromCart }) => {
  return (
    <div style={{ borderBottom: "1px solid #ccc", padding: "10px" }}>
      <h4>{item.name}</h4>
      <p>₹{item.price}</p>
      <button onClick={() => removeFromCart(item._id)}>Remove</button>
    </div>
  );
};

export default CartItem;
