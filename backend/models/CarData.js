const mongoose = require('mongoose');

const carDataSchema = new mongoose.Schema({
    car: { type: String, required: true },
    model: { type: String, required: true },
    monthAndYear: { type: String, required: true },  // This is where the combined month and year will go
    owner: {
        type: String, 
        required: true, 
        enum: ['First Owner', 'Second Owner', 'Third Owner', 'Four or More'],
    },
    colour: { type: String, required: true },
    registrationNo: { type: String, required: true },
    registrationAt: { type: String, required: true },
    lifeTimeTax: {
        type: String,
        required: true,
        enum: ['Individual', 'Corporate'],
    },
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
    name: { type: String, required: true },
    mobileNo: { type: String, required: true },
    email: { type: String, required: true },
}, { timestamps: true });

module.exports = mongoose.model('CarData', carDataSchema);
