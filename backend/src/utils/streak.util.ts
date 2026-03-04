const calculateStreak = (workouts) => {

  const dates = [...new Set(
    workouts.map(w => new Date(w.completedAt).toISOString().split("T")[0])
  )];

  const today = new Date().toISOString().split("T")[0];

  if (!dates.includes(today)) {
    return {
      streak: 0,
      lastWorkoutDate: dates[0] || null
    };
  }

  let streak = 0;
  let currentDate = new Date(today);

  for (let date of dates) {
    const formatted = currentDate.toISOString().split("T")[0];

    if (date === formatted) {
      streak++;
      currentDate.setDate(currentDate.getDate() - 1);
    } else {
      break;
    }
  }

  return {
    streak,
    lastWorkoutDate: dates[0]
  };
};

module.exports = {
  calculateStreak
};