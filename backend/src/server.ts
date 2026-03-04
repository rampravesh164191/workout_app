const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

const workoutRoutes = require("./routes/workout.routes");
const userRoutes = require("./routes/user.routes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/workouts", workoutRoutes);
app.use("/api/users", userRoutes);

app.get("/", (req, res) => {
  res.send("Workout Tracker API Running");
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});