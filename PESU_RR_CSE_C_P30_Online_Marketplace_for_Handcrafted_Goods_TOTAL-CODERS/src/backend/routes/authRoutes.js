// backend/routes/authRoutes.js
import express from "express";
import {
  register,
  login,
  verifyOTP,
  resetRequest,
  resetVerify,
} from "../controllers/authController.js";

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.post("/verify-otp", verifyOTP);
router.post("/reset-request", resetRequest);
router.post("/reset-verify", resetVerify);

export default router;
