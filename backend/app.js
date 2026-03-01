require("dotenv").config();
const express = require("express");
const app = express();

const connectDB = require("./config/db");
const cors = require("cors");

// Middlewares
app.use(cors());
app.use(express.json());

connectDB();


app.get("/", (req, res) => {
  res.json({ message: "API is running..." });
});
// app.use(unknownEndpoint);
// app.use(errorHandler);

module.exports = app;
