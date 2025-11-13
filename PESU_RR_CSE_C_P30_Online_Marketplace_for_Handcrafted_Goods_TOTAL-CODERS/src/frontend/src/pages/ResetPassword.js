import React, { useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

export default function ResetPassword() {
  const { token } = useParams();
  const [newPassword, setNewPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    try {
      const res = await axios.post(`http://localhost:5000/api/auth/reset-password/${token}`, { newPassword });
      setMessage(res.data.message || "Password reset successful ✅");
      setTimeout(() => navigate("/login"), 1500);
    } catch (err) {
      setMessage(err.response?.data?.message || "Error resetting password ❌");
    }
  };

  return (
    <div style={{ maxWidth: 420, margin: "40px auto", padding: 20, border: "1px solid #ddd", borderRadius: 10 }}>
      <h2 style={{ textAlign: "center" }}>Reset Password</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="password"
          placeholder="Enter new password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          required
          style={{ width: "100%", marginBottom: 10, padding: 10 }}
        />
        <button type="submit" style={{ width: "100%", padding: 10 }}>Update Password</button>
      </form>
      {message && <p style={{ textAlign: "center", marginTop: 10 }}>{message}</p>}
    </div>
  );
}
