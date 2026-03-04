const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const { calculateStreak } = require("../utils/streak.util");


const completeWorkout = async (userId, workoutId, completedAt) => {

  const user = await prisma.user.findUnique({
    where: { id: Number(userId) }
  });

  if (!user) {
    throw new Error("User not found");
  }

  const workout = await prisma.workout.findUnique({
    where: { id: Number(workoutId) }
  });

  if (!workout) {
    throw new Error("Workout not found");
  }

  const record = await prisma.userWorkout.create({
    data: {
      userId: Number(userId),
      workoutId: Number(workoutId),
      completedAt: new Date(completedAt)
    }
  });

  return record;
};

const getWorkoutHistory = async (userId) => {

  const history = await prisma.userWorkout.findMany({
    where: {
      userId: Number(userId)
    },
    include: {
      workout: true
    },
    orderBy: {
      completedAt: "desc"
    }
  });

  return history.map(entry => ({
    id: entry.id,
    title: entry.workout.title,
    durationMinutes: entry.workout.durationMinutes,
    difficulty: entry.workout.difficulty,
    completedAt: entry.completedAt
  }));
};

const getUserStreak = async (userId) => {

  const workouts = await prisma.userWorkout.findMany({
    where: {
      userId: Number(userId)
    },
    orderBy: {
      completedAt: "desc"
    }
  });

  const result = calculateStreak(workouts);

  return result;
};

module.exports = {
  completeWorkout,
  getWorkoutHistory,
  getUserStreak
};