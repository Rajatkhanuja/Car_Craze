// server.js
const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
require("./config/db"); // Just connect DB, no need to assign

const adminRoutes = require("./routes/adminRoutes");
const contactRoutes = require("./routes/contactRoutes");
const formRoutes = require("./routes/formRoutes");
const carRouter = require("./routes/carRouter");
const path = require("path");

dotenv.config();

const app = express();

// ✅ CORS setup for multiple origins
const allowedOrigins = [
  "https://carcraze-two.vercel.app",   // Frontend
  "https://carcraze-admin.vercel.app"  // Admin Panel
];

app.use(cors({
  origin: function (origin, callback) {
    // Allow requests with no origin (like Postman, mobile apps)
    if (!origin) return callback(null, true);
    if (allowedOrigins.includes(origin)) {
      return callback(null, true);
    } else {
      return callback(new Error("Not allowed by CORS"));
    }
  },
  methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
  credentials: true
}));

app.use(express.json());

// Serve static files from uploads directory
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Define routes
app.use("/admin", adminRoutes);           // Admin login and auth
app.use("/contact", contactRoutes);       // Contact form
app.use("/api/car-data", formRoutes);     // Sell car form
app.use("/cars", carRouter);              // Cars list & details

// Health check endpoint
app.get("/", (req, res) => {
  res.json({ status: "Backend is running" });
});

// Global error handler
app.use((err, req, res, next) => {
  console.error("Error Details:", err);
  res.status(500).json({ message: "Internal Server Error", error: err.message });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
