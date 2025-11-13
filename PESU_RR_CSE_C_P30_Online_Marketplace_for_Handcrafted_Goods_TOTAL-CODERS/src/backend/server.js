// backend/server.js
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";
import connectDB from "./database/connection.js";
import authRoutes from "./routes/authRoutes.js";
import { sendMail } from "./utils/mailer.js";

// ✅ Correct dotenv setup
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config({ path: path.join(__dirname, ".env") });

// Debug info
console.log("🧠 Working Directory:", process.cwd());
console.log("📦 .env Path:", path.join(__dirname, ".env"));
console.log("🧾 SMTP_USER:", process.env.SMTP_USER);
console.log("🧾 SMTP_PASS:", process.env.SMTP_PASS ? "(password OK)" : "(missing password)");

// Initialize app
const app = express();
app.use(cors());
app.use(express.json());

// Connect DB
connectDB();

// Routes
app.use("/api/auth", authRoutes);

// Test routes
app.get("/", (req, res) => res.send("✅ Backend running with Gmail OTP + Reset Password"));

app.get("/test-email", async (req, res) => {
  try {
    await sendMail({
      to: process.env.SMTP_USER,
      subject: "✅ Test Email from Backend",
      html: "<p>This is a test email from your marketplace backend — success!</p>",
    });
    res.send("✅ Email sent successfully!");
  } catch (err) {
    console.error("❌ Email test failed:", err.message);
    res.status(500).send("Email test failed!");
  }
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
