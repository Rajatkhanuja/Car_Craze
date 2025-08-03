const express = require('express');
const router = express.Router();
const { addCar, getCars, getCarById, updateCar, deleteCar } = require('../controllers/carController');
const upload = require('../middleware/upload');

// Add Car with multiple image uploads (Cloudinary)
router.post('/', upload, (req, res, next) => {
  try {
    // Collect Cloudinary image URLs
    const uploadedFiles = {};
    if (req.files) {
      Object.keys(req.files).forEach(key => {
        uploadedFiles[key] = req.files[key][0].path; // Cloudinary URL
      });
    }

    // Attach uploadedFiles to req.body so controller can use it
    req.body.images = uploadedFiles;

    next(); // Move to addCar controller
  } catch (error) {
    console.error("Upload Error:", error);
    return res.status(500).json({ message: "Image upload failed" });
  }
}, addCar);

router.get('/', getCars);
router.get('/:id', getCarById);
router.patch('/:id', updateCar);
router.delete('/:id', deleteCar);

module.exports = router;
