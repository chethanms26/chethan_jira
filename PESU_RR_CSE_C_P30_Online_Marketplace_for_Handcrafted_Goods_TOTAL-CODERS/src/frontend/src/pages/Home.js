import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div style={{ textAlign: "center", marginTop: "2rem" }}>
      <h1>Welcome to the Handcrafted Goods Marketplace 🛍</h1>
      <Link to="/catalog">
        <button style={{ marginTop: "1rem", padding: "10px 20px" }}>Shop Now</button>
      </Link>
    </div>
  );
};

export default Home;
