import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");

    try {
      // step 1: send login request
      const res = await axios.post("http://localhost:5000/api/auth/login", formData);

      setMessage(res.data.message || "OTP sent to your email!");
      localStorage.setItem("email", formData.email); // save email for OTP screen

      // ✅ navigate to OTP page after small delay
      setTimeout(() => navigate("/verify-otp"), 1000);
    } catch (err) {
      setMessage(err.response?.data?.message || "Invalid credentials");
    }
  };

  return (
    <div style={{ maxWidth: 400, margin: "60px auto", padding: 20, border: "1px solid #ddd", borderRadius: 8 }}>
      <h2 style={{ textAlign: "center" }}>Login</h2>

      <form onSubmit={handleSubmit}>
        <input
          name="email"
          type="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
          style={{ width: "100%", padding: 10, marginBottom: 10 }}
        />
        <input
          name="password"
          type="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
          style={{ width: "100%", padding: 10, marginBottom: 10 }}
        />
        <button type="submit" style={{ width: "100%", padding: 10 }}>Login</button>
      </form>

      {message && <p style={{ marginTop: 10, textAlign: "center" }}>{message}</p>}

      <p style={{ textAlign: "center", marginTop: 12 }}>
        <a href="/forgot-password">Forgot Password?</a>
      </p>
    </div>
  );
}
