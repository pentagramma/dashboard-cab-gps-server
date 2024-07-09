const express = require("express");
const Ride = require("./models/Ride");

const router = express.Router();

// Get all rides
router.get("/rides", async (req, res) => {
  try {
    const rides = await Ride.find();
    res.json(rides);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Add a ride
router.post("/rides", async (req, res) => {
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
});

module.exports = router;
