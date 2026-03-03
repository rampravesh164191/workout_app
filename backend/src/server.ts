import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { PrismaClient } from "@prisma/client";
const PORT = 3000;

dotenv.config();

const app = express();
const prisma = new PrismaClient();

app.use(cors());
app.use(express.json());


app.get("/seed", async (req: any, res: any) => {
  try {
    // Create test user
    const user = await prisma.user.create({
      data: {
        name: "Test User",
        email: "test@tonegarage.com",
      },
    });

    // Create workouts
    await prisma.workout.createMany({
      data: [
        {
          title: "Full Body Workout",
          description: "Complete full body workout routine",
          durationMinutes: 45,
          difficulty: "Intermediate",
        },
        {
          title: "Morning Yoga",
          description: "Gentle yoga for flexibility",
          durationMinutes: 30,
          difficulty: "Beginner",
        },
        {
          title: "HIIT Cardio",
          description: "High intensity cardio workout",
          durationMinutes: 20,
          difficulty: "Advanced",
        },
      ],
    });

    res.json({ message: "Seed data inserted" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Seeding failed" });
  }
});

app.get("/", (req, res) => {
  res.send("Workout Tracker API Running");
});


app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});