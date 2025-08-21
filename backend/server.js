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

// ✅ Allow these domains
const allowedOrigins = [
  "https://carcraze-two.vercel.app",    // frontend
  "https://carcraze-admin.vercel.app"   // admin panel
];

// ✅ CORS middleware
app.use(cors({
  origin: function (origin, callback) {
    if (!origin) return callback(null, true); // for Postman & mobile
    if (allowedOrigins.includes(origin)) {
      return callback(null, true);
    }
    return callback(new Error("Not allowed by CORS"));
  },
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  credentials: true,
}));

// ✅ Important: Handle preflight requests properly
app.options("*", cors());

// Middleware
app.use(express.json());

// Routes
app.use("/admin", adminRoutes);
app.use("/contact", contactRoutes);
app.use("/api/car-data", formRoutes);
app.use("/cars", carRouter);

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
