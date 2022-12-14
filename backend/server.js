import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";
import connectDB from "./config/db.js";
import authRoutes from "./routes/auth.js";
import homeRoutes from "./routes/captainHome.js";
import dashboardRoutes from "./routes/dashboard.js";
import adminReports from "./routes/adminReports.js";
import { protect } from "./middleware/verifyToken.js";

const app = express();
dotenv.config();

//Middleware
app.use(bodyParser.json({ limit: "50mb" }));
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));

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
app.use("/api/dashboard/dailyCarReports", protect, adminReports);

const PORT = process.env.PORT;

app.listen(PORT, () => {
  connectDB();
  console.log(`Server is running on ${PORT} `);
});
