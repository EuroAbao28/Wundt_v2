// Import required modules
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

require("dotenv").config();
require("colors");

const port = process.env.PORT || 5000;

// Initialize Express app
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_DB_URI)
  .then(() => console.log("Connected to MongoDB".blue.underline))
  .catch((err) => console.error("Failed to connect to MongoDB:", err));

// Routes
app.use("/api", require("./routers/availableDateRoute"));

// Start the server
app.listen(port, () => {
  console.log(`Server running on port:${port}`.yellow.underline);
});
