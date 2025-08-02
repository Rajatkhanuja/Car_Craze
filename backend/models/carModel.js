const mongoose = require('mongoose');

const carSchema = new mongoose.Schema({
    name: { type: String, required: true },
    model: { type: String, required: true },
    running: { type: String, required: true },
    insurance: { type: String, required: true },
    ownership: { type: String, required: true },
    fuel: { type: String, required: true },
    year: { type: Number, required: true },
    registration: { type: String, required: true },
    price: { type: Number, required: true },
    photo1: { type: String },
    photo2: { type: String },
    photo3: { type: String },
    photo4: { type: String },
    photo5: { type: String }
}, {
    timestamps: true
});

module.exports = mongoose.model('Car', carSchema);