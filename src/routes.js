const express = require("express");
const Ride = require("./Model");
const { getRides, createRide } = require("./controllers/ride.controller");

const router = express.Router();

// Get all rides
router.get("/rides", getRides);

// Add a ride
router.post("/rides", createRide);

router.get("/", function (req, res) {
  res.send("Hello World");
});

module.exports = router;
