// server.js
const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const mongoose = require("./config/db");
const adminRoutes = require("./routes/adminRoutes");
const contactRoutes = require("./routes/contactRoutes");
const formRoutes = require("./routes/formRoutes");
const carRouter = require("./routes/carRouter");
const path = require("path");

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Serve static files from uploads directory
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Define routes
app.use("/admin", adminRoutes);
app.use("/contact", contactRoutes);
app.use("/api/car-data", formRoutes);
app.use('/cars', carRouter);

// Global error handler
app.use((err, req, res, next) => {
  console.error("Error Details:", err);
  res.status(500).json({ message: "Internal Server Error", error: err.message });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));