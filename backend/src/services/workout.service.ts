const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const getAllWorkouts = async () => {
  const workouts = await prisma.workout.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });

  return workouts;
};

module.exports = {
  getAllWorkouts,
};