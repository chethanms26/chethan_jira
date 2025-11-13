// src/database/seed.js
import mongoose from "mongoose";
import connectDB from "./connection.js";
import Product from "../backend/models/Product.js";
import User from "../backend/models/User.js";
import Order from "../backend/models/Order.js";
import products from "./products.json" assert { type: "json" };
import users from "./users.json" assert { type: "json" };
import orders from "./orders.json" assert { type: "json" };

const seedDatabase = async () => {
  await connectDB();

  await Product.deleteMany({});
  await User.deleteMany({});
  await Order.deleteMany({});

  await Product.insertMany(products);
  await User.insertMany(users);
  await Order.insertMany(orders);

  console.log("✅ Database seeded successfully!");
  mongoose.connection.close();
};

seedDatabase();
