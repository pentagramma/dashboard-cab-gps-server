const mongoose = require('mongoose');

const RideSchema = new mongoose.Schema({
  driver: String,
  rider: String,
  distance: Number,
  fare: Number,
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Ride', RideSchema);
