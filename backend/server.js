import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";
import authRoutes from "./routes/auth.js";
import homeRoutes from "./routes/captainHome.js";
import dashboardRoutes from "./routes/dashboard.js";
import { protect } from "./middleware/verifyToken.js";

const app = express();
dotenv.config();

//Middleware
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

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
app.use("/api/home", protect, homeRoutes);
app.use("/api/dashboard", protect, dashboardRoutes);

const PORT = process.env.PORT;

app.listen(PORT, () => {
  connectDB();
  console.log(`Server is running on ${PORT} `);
});
