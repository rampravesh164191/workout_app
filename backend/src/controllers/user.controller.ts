const userService = require("../services/user.service");

const completeWorkout = async (req, res) => {
  try {
    const { userId, workoutId } = req.params;
    const { completedAt } = req.body;

    if (!completedAt) {
      return res.status(400).json({ message: "completedAt is required" });
    }

    const result = await userService.completeWorkout(userId, workoutId, completedAt);

    res.status(200).json({
      message: "Workout completed successfully",
      data: result
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to complete workout" });
  }
};

const getWorkoutHistory = async (req, res) => {
  try {
    const { userId } = req.params;

    const history = await userService.getWorkoutHistory(userId);

    res.status(200).json(history);

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to fetch workout history" });
  }
};

const getUserStreak = async (req, res) => {
  try {
    const { userId } = req.params;

    const result = await userService.getUserStreak(userId);

    res.status(200).json(result);

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to calculate streak" });
  }
};

module.exports = {
  completeWorkout,
  getWorkoutHistory,
  getUserStreak
};