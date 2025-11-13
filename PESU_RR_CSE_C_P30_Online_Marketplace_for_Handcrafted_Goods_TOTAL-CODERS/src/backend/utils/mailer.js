// backend/utils/mailer.js
import nodemailer from "nodemailer";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

// ✅ Load environment variables manually here as well
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config({ path: path.resolve(__dirname, "../.env") });

// ✅ Use Gmail service (simpler and secure)
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

// 🧠 Debug log
console.log("📩 Loaded Email Config:");
console.log("SMTP_USER:", process.env.SMTP_USER || "(missing)");
console.log("SMTP_PASS:", process.env.SMTP_PASS ? "(password OK)" : "(missing password)");
console.log("FROM_EMAIL:", process.env.FROM_EMAIL || "(missing)");

export const sendMail = async ({ to, subject, html }) => {
  try {
    const info = await transporter.sendMail({
      from: process.env.FROM_EMAIL || process.env.SMTP_USER,
      to,
      subject,
      html,
    });
    console.log(`✅ Email sent to ${to} → ${info.messageId}`);
  } catch (err) {
    console.error("❌ Email send error:", err.message);
    throw err;
  }
};
