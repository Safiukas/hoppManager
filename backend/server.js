const path = require("path");
const express = require("express");
const app = express();
const connectDB = require("./config/db");
const { errorHandler } = require("./middleware/errorMiddleware");
const dotenv = require("dotenv").config();

// DB connection
connectDB();

//Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//error handler
app.use(errorHandler);

// Routes
app.use("/", mainRoutes);
app.use("/home", homeRoutes);
app.use("/accidentReport", accidentRoutes);
app.use("/shiftReport", shiftRoutes);
app.use("/dailyReport", dailyCarRoutes);

const PORT = process.env.PORT;

app.listen(PORT, console.log(`Server is running on port: ${PORT}`));
