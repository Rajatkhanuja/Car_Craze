const Car = require('../models/carModel');
const fs = require('fs');
const path = require('path');
const mongoose = require('mongoose');  // Import mongoose here

exports.addCar = async (req, res) => {
  try {
    const { name, model, running, insurance, ownership, fuel, year, registration, price } = req.body;

    const photoFields = {};
    if (req.files) {
      Object.keys(req.files).forEach(key => {
        photoFields[key] = req.files[key][0].path.replace(/\\/g, '/'); // Normalize path for Windows
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
      ...photoFields
    });

    const savedCar = await car.save();
    res.status(201).json(savedCar);
  } catch (err) {
    console.error('Add car error:', err);
    res.status(400).json({ message: err.message });
  }
};

exports.getCars = async (req, res) => {
  try {
    const cars = await Car.find().sort({ createdAt: -1 });
    res.status(200).json(cars);
  } catch (err) {
    console.error('Get cars error:', err);
    res.status(500).json({ message: err.message });
  }
};

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

exports.updateCar = async (req, res) => {
  try {
    const { id } = req.params;
    const { price } = req.body;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ message: "Invalid ID format" });
    }

    const car = await Car.findById(id);
    if (!car) {
      return res.status(404).json({ message: "Car not found" });
    }

    car.price = price;
    const updatedCar = await car.save();

    res.status(200).json(updatedCar);
  } catch (err) {
    console.error('Update car error:', err);
    res.status(500).json({ message: err.message });
  }
};

exports.deleteCar = async (req, res) => {
  try {
    const car = await Car.findById(req.params.id);
    if (!car) {
      return res.status(404).json({ message: "Car not found" });
    }

    // Delete associated photos
    ['photo1', 'photo2', 'photo3', 'photo4', 'photo5'].forEach(photoKey => {
      if (car[photoKey]) {
        const photoPath = path.join(__dirname, '..', car[photoKey]);
        try {
          fs.unlinkSync(photoPath);
        } catch (err) {
          console.error(`Failed to delete photo ${photoKey}:`, err);
        }
      }
    });

    await Car.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Car deleted successfully" });
  } catch (err) {
    console.error('Delete car error:', err);
    res.status(500).json({ message: err.message });
  }
};
