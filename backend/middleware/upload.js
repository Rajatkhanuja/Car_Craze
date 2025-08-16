const multer = require('multer');
const { CloudinaryStorage } = require('multer-storage-cloudinary');
const cloudinary = require('../config/cloudinary');

// Cloudinary Storage Setup
const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: 'carcraze_uploads', // Cloudinary me folder ka naam
    allowed_formats: ['jpg', 'jpeg', 'png', 'webp'],
  },
});

// Multer Setup (multiple fields)
const upload = multer({
  storage,
  limits: { fileSize: 5 * 1024 * 1024 }, // 5MB limit
}).fields([
  { name: 'photo1', maxCount: 1 },
  { name: 'photo2', maxCount: 1 },
  { name: 'photo3', maxCount: 1 },
  { name: 'photo4', maxCount: 1 },
  { name: 'photo5', maxCount: 1 },
  { name: 'photo6', maxCount: 1 }, // Added
  { name: 'photo7', maxCount: 1 }, // Added
  { name: 'photo8', maxCount: 1 }, // Added
  { name: 'photo9', maxCount: 1 }, // Added
  { name: 'photo10', maxCount: 1 }, // Added
]);

module.exports = upload;