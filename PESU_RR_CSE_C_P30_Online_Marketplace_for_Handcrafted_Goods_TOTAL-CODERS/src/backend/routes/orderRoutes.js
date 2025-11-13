import express from "express";
import Order from "../models/Order.js";

const router = express.Router();

// Place a new order
router.post("/", async (req, res) => {
  const newOrder = new Order(req.body);
  const savedOrder = await newOrder.save();
  res.status(201).json(savedOrder);
});

// Get all orders
router.get("/", async (req, res) => {
  const orders = await Order.find().populate("user").populate("products.product");
  res.json(orders);
});

export default router;
