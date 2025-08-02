const express = require('express');
const router = express.Router();
const { addCar, getCars, getCarById,  updateCar, deleteCar } = require('../controllers/carController'); // Include getCarById
const upload = require('../middleware/upload');

router.post('/', upload, addCar);
router.get('/', getCars);
router.get('/:id', getCarById);
router.patch('/:id', updateCar); // Fetch car by ID
router.delete('/:id', deleteCar);

module.exports = router;
