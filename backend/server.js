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

// ✅ CORS Setup
const allowedOrigins = [
  "https://carcraze-two.vercel.app",
  "https://carcraze-admin.vercel.app"
];

const corsOptions = {
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  credentials: true,
  allowedHeaders: ["Content-Type", "Authorization"]
};

// ✅ CORS middleware
app.use(cors(corsOptions));

// ✅ Handle preflight requests
app.options("*", cors(corsOptions));

// Body parser
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
    error: err.message,
  });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
