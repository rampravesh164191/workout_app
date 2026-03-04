const express = require("express");
const router = express.Router();

const workoutController = require("../controllers/workout.controller");

router.get("/", workoutController.getWorkouts);

module.exports = router;