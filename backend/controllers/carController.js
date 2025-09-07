const Car = require('../models/carModel');
const mongoose = require('mongoose');
const cloudinary = require('../config/cloudinary');

// Add Car (Cloudinary upload)
exports.addCar = async (req, res) => {
  try {
    const { name, model, running, insurance, ownership, fuel, year, registration, price, transmission } = req.body;

    const photoFields = {};
    if (req.files) {
      Object.keys(req.files).forEach(key => {
        // Cloudinary URL
        photoFields[key] = req.files[key][0].path;
      });
    }

    const car = new Car({
      name,
      model,
      running,
      insurance,
      ownership,
      fuel,
      year,
      registration,
      price,
      transmission,
      ...photoFields
    });

    const savedCar = await car.save();
    res.status(201).json(savedCar);
  } catch (err) {
    console.error('Add car error:', err);
    res.status(400).json({ message: err.message });
  }
};

// Get all cars
exports.getCars = async (req, res) => {
  try {
    const cars = await Car.find().sort({ createdAt: -1 });
    res.status(200).json(cars);
  } catch (err) {
    console.error('Get cars error:', err);
    res.status(500).json({ message: err.message });
  }
};

// Get car by ID
exports.getCarById = async (req, res) => {
  try {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ message: "Invalid ID format" });
    }

    const car = await Car.findById(id);
    if (!car) {
      return res.status(404).json({ message: "Car not found" });
    }

    res.status(200).json(car);
  } catch (err) {
    console.error('Get car by ID error:', err);
    res.status(500).json({ message: err.message });
  }
};

// ✅ Update car (multiple fields)
exports.updateCar = async (req, res) => {
  try {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ message: "Invalid ID format" });
    }

    const car = await Car.findById(id);
    if (!car) {
      return res.status(404).json({ message: "Car not found" });
    }

    // ✅ Fields that can be updated
    const updatableFields = [
      "name",
      "model",
      "price",
      "year",          // Reg. Year
      "fuel",
      "running",       // KM Driven
      "transmission",
      "ownership",
      "insurance",
      "registration"   // Reg. No
    ];

    updatableFields.forEach((field) => {
      if (req.body[field] !== undefined && req.body[field] !== "") {
        // year should always be a number
        if (field === "year") {
          car[field] = Number(req.body[field]);
        } else {
          car[field] = req.body[field];
        }
      }
    });

    const updatedCar = await car.save();
    res.status(200).json(updatedCar);
  } catch (err) {
    console.error("Update car error:", err);
    res.status(500).json({ message: err.message });
  }
};


// Delete car + Cloudinary images
exports.deleteCar = async (req, res) => {
  try {
    const car = await Car.findById(req.params.id);
    if (!car) {
      return res.status(404).json({ message: "Car not found" });
    }

    // Delete images from Cloudinary
    const photoKeys = ['photo1', 'photo2', 'photo3', 'photo4', 'photo5', 'photo6', 'photo7', 'photo8', 'photo9', 'photo10']; 
    for (let key of photoKeys) {
      if (car[key]) {
        try {
          // Extract public_id from Cloudinary URL
          const publicId = car[key].split('/').pop().split('.')[0];
          await cloudinary.uploader.destroy(`carcraze_uploads/${publicId}`);
        } catch (err) {
          console.error(`Failed to delete ${key} from Cloudinary:`, err);
        }
      }
    }

    await Car.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Car deleted successfully" });
  } catch (err) {
    console.error('Delete car error:', err);
    res.status(500).json({ message: err.message });
  }
};
