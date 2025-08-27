const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
require("./config/db"); // MongoDB connection

// Routes
const adminRoutes = require("./routes/adminRoutes");
const contactRoutes = require("./routes/contactRoutes");
const formRoutes = require("./routes/formRoutes");
const carRouter = require("./routes/carRouter");

dotenv.config();
const app = express();

// ✅ Flexible CORS setup for frontend & admin
app.use(cors({
  origin: (origin, callback) => {
    const allowedOrigins = [
      "https://carcraze-two.vercel.app",   // Main frontend
      "https://carcraze-admin.vercel.app",  // Admin panel
      "https://carcraze.co.in",            // Live frontend
      "https://www.carcraze.co.in",        // Live frontend with www
      "https://admin.carcraze.co.in"       // Live admin panel
    ];
    if (!origin) return callback(null, true); // Allow Postman, mobile apps
    if (allowedOrigins.includes(origin) || origin.endsWith("vercel.app")) {
      return callback(null, true);
    }
    return callback(new Error("Not allowed by CORS"));
  },
  methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
  credentials: true
}));

// Middleware
app.use(express.json());

// ❌ Local uploads folder serving is removed
// ✅ Cloudinary will handle file storage & access via its URLs

// Routes
app.use("/admin", adminRoutes);           // Admin login & auth
app.use("/contact", contactRoutes);       // Contact form
app.use("/api/car-data", formRoutes);     // Sell car form
app.use("/cars", carRouter);              // Cars list & details

// Health check
app.get("/", (req, res) => {
  res.json({ status: "Backend is running" });
});

// Global error handler
app.use((err, req, res, next) => {
  console.error("Error Details:", err);
  res.status(500).json({ 
    message: "Internal Server Error", 
    error: err.message 
  });
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
