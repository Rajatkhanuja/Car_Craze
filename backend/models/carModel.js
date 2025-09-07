const mongoose = require('mongoose');

const carSchema = new mongoose.Schema({
    name: { type: String, required: true },
    model: { type: String, required: true },
    year: { type: Number, required: true }, // Reg. Year
    fuel: { type: String, required: true },
    running: { type: String, required: true }, // Km Driven
    transmission: { type: String, required: true },
    ownership: { type: String, required: true },
    insurance: { type: String, required: true },
    registration: { type: String, required: true }, // Reg. No
    price: { type: String, required: true },

    // ✅ Booked (true = Booked, false = Not Booked)
    booked: { 
        type: Boolean, 
        default: false 
    },

    photo1: { type: String },
    photo2: { type: String },
    photo3: { type: String },
    photo4: { type: String },
    photo5: { type: String },
    photo6: { type: String }, 
    photo7: { type: String }, 
    photo8: { type: String }, 
    photo9: { type: String }, 
    photo10: { type: String } 
}, {
    timestamps: true
});

module.exports = mongoose.model('Car', carSchema);
