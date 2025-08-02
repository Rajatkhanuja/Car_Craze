const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const CarData = require('../models/CarData');

// POST Route: Save form data
router.post('/', async (req, res) => {
    try {
        const carData = req.body;
        const newCarData = new CarData(carData);
        await newCarData.save();
        res.status(201).json({ message: 'Car data saved successfully!' });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Error saving car data', details: error.message });
    }
});

// GET Route: Fetch all data for admin
router.get('/', async (req, res) => {
    try {
        const carDataList = await CarData.find();
        res.status(200).json(carDataList);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching car data', details: error.message });
    }
});

// DELETE Route: Delete car data by ID
router.delete('/:id', async (req, res) => {
    try {
        const { id } = req.params;

        // Check if the ID is a valid MongoDB ObjectId
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({ message: "Invalid ID format" });
        }

        const deletedCarData = await CarData.findByIdAndDelete(id);

        if (!deletedCarData) {
            return res.status(404).json({ message: "Car data not found" });
        }

        res.status(200).json({ message: "Car data deleted successfully", deletedCarData });
    } catch (error) {
        console.error('Error deleting car data:', error);
        res.status(500).json({ error: 'Error deleting car data', details: error.message });
    }
});

module.exports = router;
