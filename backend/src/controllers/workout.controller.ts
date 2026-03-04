const workoutService = require("../services/workout.service");

const getWorkouts = async (req, res) => {
  try {
    const workouts = await workoutService.getAllWorkouts();

    res.status(200).json(workouts);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to fetch workouts" });
  }
};

module.exports = {
  getWorkouts,
};