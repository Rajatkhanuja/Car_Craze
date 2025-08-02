const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const router = express.Router();

// Environment configuration
require("dotenv").config();

// Simulated database for demonstration purposes (replace with a real database)
let adminConfig = null; // Admin configuration stored in memory temporarily

// Function to initialize admin user (should be run during app setup/migration)
async function initializeAdmin() {
  if (adminConfig) return; // Prevent re-initialization
  try {
    const hashedPassword = await bcrypt.hash(process.env.ADMIN_PASSWORD, 10);

    // Store the hashed password securely
    adminConfig = {
      username: process.env.ADMIN_USERNAME || "admin",
      password: hashedPassword,
    };

    console.log("Admin user initialized successfully");
  } catch (error) {
    console.error("Error initializing admin:", error);
    throw error;
  }
}

// Middleware to ensure adminConfig is initialized
const ensureAdminInitialized = async (req, res, next) => {
  if (!adminConfig) {
    try {
      await initializeAdmin();
    } catch (error) {
      return res.status(500).json({ message: "Error initializing admin" });
    }
  }
  next();
};

// Admin login route
router.post("/login", ensureAdminInitialized, async (req, res) => {
  try {
    const { username, password } = req.body;

    // Validate input
    if (!username || !password) {
      return res.status(400).json({ message: "Username and password are required" });
    }

    // Check username
    if (username.trim() !== adminConfig.username) {
      return res.status(401).json({ message: "Invalid username" });
    }

    // Compare passwords
    const isPasswordValid = await bcrypt.compare(password, adminConfig.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: "Invalid password" });
    }

    // Generate JWT token
    const token = jwt.sign(
      { username: adminConfig.username },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    // Successful login
    res.status(200).json({
      message: "Login successful",
      token,
    });

  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({ message: "Server error during login" });
  }
});

module.exports = router;
