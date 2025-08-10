// ✅ Mongoose Model (models/CarData.js)
const mongoose = require('mongoose');

const carDataSchema = new mongoose.Schema({
  brand: { type: String, required: true },                   // ✅ was 'car'
  modelAndVariant: { type: String, required: true },         // ✅ was 'model'
  manufacturingYear: { type: String, required: true },       // ✅ was 'monthAndYear'
  owner: {
    type: String,
    required: true,
    enum: ['First Owner', 'Second Owner', 'Third Owner', 'Four or More'],
  },
  kmsDriven: { type: String, required: true },               // ✅ newly added
  registrationNo: { type: String, required: true },
  carInsurance: {
    type: String,
    required: true,
    enum: ['Comprehensive', 'Third Party', 'No Insurance'],
  },
  isAccidental: {
    type: String,
    required: true,
    enum: ['Yes', 'No'],
  },
  fuel: {
    type: String,
    required: true,
    enum: ['Petrol', 'Diesel', 'CNG', 'Electric', 'Hybrid'],
  },
  name: { type: String, required: true },
  mobileNo: { type: String, required: true },
  email: { type: String, required: true },
}, { timestamps: true });

module.exports = mongoose.model('CarData', carDataSchema);
