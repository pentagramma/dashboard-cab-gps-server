const mongoose = require("mongoose");

const LocationSchema = new mongoose.Schema({
    lat: { type: Number, required: true },
    long: { type: Number, required: true },
});

const DriveLocationSchema = new mongoose.Schema({
    start_location: { type: [LocationSchema], required: true },
    end_location: { type: [LocationSchema], required: true },
});
const RideSchema = new mongoose.Schema({
    mmi_id: { type: String, required: true },
    start_time: { type: Number, required: true },
    end_time: { type: Number, required: true },
    distance: { type: Number, required: true },
    movement_duration: { type: Number, required: true },
    idle_duration: { type: Number, required: true },
    stoppage_duration: { type: Number, required: true },
    average_speed: { type: Number, required: true },
    drive_locations: { type: [DriveLocationSchema], required: true },
    record_date: { type: Number, required: true },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Rides", RideSchema);
