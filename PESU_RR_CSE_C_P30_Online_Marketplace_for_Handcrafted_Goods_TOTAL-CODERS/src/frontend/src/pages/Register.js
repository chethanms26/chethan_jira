import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    role: "buyer",
  });
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();

  const change = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const submit = async (e) => {
    e.preventDefault();
    setMsg("");

    try {
      await axios.post("http://localhost:5000/api/auth/register", form);
      setMsg("Registered successfully ✅");

      // ✅ Redirect to login after 1 second
      setTimeout(() => navigate("/login"), 1000);
    } catch (err) {
      setMsg(err.response?.data?.message || "Error during registration ❌");
    }
  };

  return (
    <div className="card">
      <h2>Create Account</h2>
      <form onSubmit={submit}>
        <div className="form-row">
          <input
            className="input"
            name="name"
            placeholder="Full name"
            value={form.name}
            onChange={change}
            required
          />
        </div>
        <div className="form-row">
          <input
            className="input"
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={change}
            required
          />
        </div>
        <div className="form-row">
          <input
            className="input"
            type="password"
            name="password"
            placeholder="Password"
            value={form.password}
            onChange={change}
            required
          />
        </div>
        <div className="form-row">
          <select
            name="role"
            className="select"
            value={form.role}
            onChange={change}
          >
            <option value="buyer">Buyer</option>
            <option value="artisan">Artisan</option>
          </select>
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <button className="btn" type="submit">
            Register
          </button>
        </div>
      </form>
      {msg && (
        <p className={`msg ${msg.toLowerCase().includes("success") ? "ok" : "err"}`}>
          {msg}
        </p>
      )}
      <p className="helper">
        Already have an account? <a href="/login">Login</a>
      </p>
    </div>
  );
}
