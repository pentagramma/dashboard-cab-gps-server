const express = require("express");
const Ride = require("./Model");
const { getRides, createRide } = require("./controllers/ride.controller");

const router = express.Router();

// Get all rides
router.get("/rides", getRides);

// Add a ride
router.post("/rides", createRide);

module.exports = router;
