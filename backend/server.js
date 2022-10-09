import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import connectDB from "./config/db.js";
import authRoutes from "./routes/auth.js";
import homeRoutes from "./routes/captainHome.js";
import { verifyToken } from "./middleware/verifyToken.js";

const app = express();
dotenv.config();

//Middleware
app.use(cookieParser());
app.use(express.json());

//error handler
app.use((err, req, res, next) => {
  const status = err.status || 500;
  const message = err.message || "Something went wrong!";
  return res.status(status).json({
    success: false,
    status,
    message,
  });
});

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/home", verifyToken, homeRoutes);

const PORT = process.env.PORT;

app.listen(PORT, () => {
  connectDB();
  console.log(`Server is running on ${PORT} `);
});
