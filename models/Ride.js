const mongoose = require('mongoose');

const RideSchema = new mongoose.Schema({
    driver: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    startLocation: { type: String, required: true },
    endLocation: { type: String, required: true },
    date: { type: Date, required: true },
    time: { type: String, required: true },
    availableSeats: { type: Number, required: true },
    riders: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }]
});

module.exports = mongoose.model('Ride', RideSchema);
