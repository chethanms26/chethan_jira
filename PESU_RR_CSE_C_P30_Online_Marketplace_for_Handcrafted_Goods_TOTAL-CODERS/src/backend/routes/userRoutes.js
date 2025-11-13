import express from "express";
import User from "../models/User.js";

const router = express.Router();

// Register a new user
router.post("/register", async (req, res) => {
  const newUser = new User(req.body);
  const savedUser = await newUser.save();
  res.status(201).json(savedUser);
});

// Get all users
router.get("/", async (req, res) => {
  const users = await User.find();
  res.json(users);
});

export default router;
