import React, { useState } from "react";
import axios from "axios";

export default function ForgotPassword() {
  const [phase, setPhase] = useState("request"); // "request" or "verify"
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [message, setMessage] = useState("");

  // step 1: request OTP
  const requestOtp = async (e) => {
    e.preventDefault();
    setMessage("");
    try {
      const res = await axios.post("http://localhost:5000/api/auth/reset-request", { email });
      setMessage(res.data.message || "OTP sent to your email!");
      setPhase("verify");
    } catch (err) {
      setMessage(err.response?.data?.message || "Error sending OTP");
    }
  };

  // step 2: verify OTP + reset password
  const verifyReset = async (e) => {
    e.preventDefault();
    setMessage("");
    try {
      const res = await axios.post("http://localhost:5000/api/auth/reset-verify", {
        email,
        otp,
        newPassword,
      });
      setMessage(res.data.message || "Password reset successful!");
      setTimeout(() => (window.location.href = "/login"), 1500);
    } catch (err) {
      setMessage(err.response?.data?.message || "Invalid OTP or email");
    }
  };

  return (
    <div style={{ maxWidth: 420, margin: "60px auto", padding: 20, border: "1px solid #ddd", borderRadius: 8 }}>
      {phase === "request" ? (
        <>
          <h2 style={{ textAlign: "center" }}>Forgot Password</h2>
          <form onSubmit={requestOtp}>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              style={{ width: "100%", padding: 10, marginBottom: 10 }}
            />
            <button type="submit" style={{ width: "100%", padding: 10 }}>Send OTP</button>
          </form>
        </>
      ) : (
        <>
          <h2 style={{ textAlign: "center" }}>Reset Password</h2>
          <form onSubmit={verifyReset}>
            <input
              type="text"
              placeholder="Enter OTP"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              required
              style={{ width: "100%", padding: 10, marginBottom: 10 }}
            />
            <input
              type="password"
              placeholder="New Password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              required
              style={{ width: "100%", padding: 10, marginBottom: 10 }}
            />
            <button type="submit" style={{ width: "100%", padding: 10 }}>Reset Password</button>
          </form>
          <p style={{ textAlign: "center", marginTop: 10 }}>
            <a href="/forgot-password" onClick={(e) => { e.preventDefault(); setPhase("request"); setOtp(""); setNewPassword(""); setMessage(""); }}>
              Resend OTP / Change email
            </a>
          </p>
        </>
      )}
      {message && <p style={{ marginTop: 12, textAlign: "center" }}>{message}</p>}
    </div>
  );
}
