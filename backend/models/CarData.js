const mongoose = require('mongoose');

const carDataSchema = new mongoose.Schema({
  brand: {
    type: String,
    required: true,
    enum: [
      "Audi", "BMW", "Ford", "Honda", "Hyundai", "Jaguar", "Kia",
      "Mahindra", "Maruti Suzuki", "Mercedes-Benz", "Skoda", "Tata",
      "Toyota", "Volkswagen", "Morris Garage", "Chevrolet",
      "Datsun", "Fiat", "Jeep", "Land Rover", "Nissan", "Renault","Citroen"
    ],
  },
  modelAndVariant: { type: String, required: true },
  manufacturingYear: { type: String, required: true },
  owner: {
    type: String,
    required: true,
    enum: ['First Owner', 'Second Owner', 'Third Owner', 'Four or More'],
  },
  kmsDriven: {
  type: String,
  required: true,
  enum: [
    "Upto 10,000 km",
    "10,000 - 20,000 km",
    "20,000 - 30,000 km",
    "30,000 - 40,000 km",
    "40,000 - 50,000 km",
    "50,000 - 60,000 km",
    "60,000 - 70,000 km",
    "70,000 - 80,000 km",
    "80,000 - 90,000 km",
    "90,000 - 1,00,000 km",
    "Above 1,00,000 km"
  ]
},

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
    enum: ['Petrol', 'Diesel', 'CNG', 'LPG', 'Electric'],
  },
  name: { type: String, required: true },
  mobileNo: { type: String, required: true },
  email: { type: String },
}, { timestamps: true });

module.exports = mongoose.model('CarData', carDataSchema);
