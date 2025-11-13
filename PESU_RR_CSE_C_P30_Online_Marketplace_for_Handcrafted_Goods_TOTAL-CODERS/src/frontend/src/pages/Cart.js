import React, { useState } from "react";
import CartItem from "../components/CartItem";

const Cart = () => {
  const [cart, setCart] = useState([]);

  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item._id !== id));
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h2>Your Cart</h2>
      {cart.length === 0 ? <p>Cart is empty 🛒</p> : cart.map((item) => (
        <CartItem key={item._id} item={item} removeFromCart={removeFromCart} />
      ))}
    </div>
  );
};

export default Cart;
