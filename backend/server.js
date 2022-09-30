const express = require("express");
const app = express();
const { errorHandler } = require("./middleware/errorMiddleware");
const dotenv = require("dotenv").config();

//Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
//error handler
app.use(errorHandler);

const PORT = process.env.PORT;

app.listen(PORT, console.log(`Server is running on port: ${PORT}`));
