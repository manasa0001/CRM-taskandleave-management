
// server.jconst dotenv = require("dotenv");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();  // 👈 MUST be before using process.env

const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");

const taskRoutes = require("./routes/taskRoutes");
const leaveRoutes = require("./routes/leaveRoutes");

// Connect to DB
connectDB();
const app = express();
app.use(cors({
    origin: 'http://localhost:3000', // Change this to your React app's URL
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allow specific methods
    allowedHeaders: ['Content-Type', 'Authorization'], // Allow specific headers
  }));
app.use(cors());
app.use(express.json());
app.use("/api/uploads", express.static("uploads"));
app.use("/api/tasks", taskRoutes);
app.use("/api/leaves", leaveRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));
