import React from "react";

const ProductCard = ({ product, addToCart }) => {
  return (
    <div style={{ border: "1px solid #ddd", padding: "1rem", borderRadius: "10px", margin: "10px" }}>
      <h3>{product.name}</h3>
      <p>₹{product.price}</p>
      <button onClick={() => addToCart(product)}>Add to Cart</button>
    </div>
  );
};

export default ProductCard;
