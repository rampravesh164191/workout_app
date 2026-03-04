const express = require("express");
const router = express.Router();

const userController = require("../controllers/user.controller");

router.post("/:userId/workouts/:workoutId/complete", userController.completeWorkout);
router.get("/:userId/workout-history", userController.getWorkoutHistory);
router.get("/:userId/streak", userController.getUserStreak);

module.exports = router;