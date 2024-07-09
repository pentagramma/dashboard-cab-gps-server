const Ride = require('../models/ride.model')
const getRides = async (req, res) => {
    try {
        const rides = await Ride.find();
        res.json(rides);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

const createRide = async (req, res) => {
    const ride = new Ride({
        driver: req.body.driver,
        rider: req.body.rider,
        distance: req.body.distance,
        fare: req.body.fare,
    });

    try {
        const newRide = await ride.save();
        res.status(201).json(newRide);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
}
module.exports = { getRides, createRide }