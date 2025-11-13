import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const linkStyle = {
    color: "white",
    marginRight: "1rem",
    textDecoration: "none",
    fontSize: "18px",
  };

  return (
    <nav
      style={{
        background: "#282c34",
        padding: "1rem",
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
      }}
    >
      <Link to="/" style={linkStyle}>
        Home
      </Link>
      <Link to="/catalog" style={linkStyle}>
        Catalog
      </Link>
      <Link to="/cart" style={linkStyle}>
        Cart
      </Link>
      <Link to="/login" style={linkStyle}>
        Login
      </Link>
      <Link to="/register" style={linkStyle}>
        Register
      </Link>

      {/* ✅ Optional Testing Links (remove later) */}
      <Link to="/otp" style={linkStyle}>
        OTP
      </Link>
      <Link to="/forgot-password" style={linkStyle}>
        Forgot Password
      </Link>
      <Link to="/reset-password/testtoken" style={linkStyle}>
        Reset
      </Link>
    </nav>
  );
};

export default Navbar;
