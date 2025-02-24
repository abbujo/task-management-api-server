import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import helmet from "helmet";

// Import Routes
import authRoutes from "./routes/auth";
import projectRoutes from "./routes/projects";
import taskRoutes from "./routes/tasks";
import userRoutes from "./routes/users";
import logRoutes from "./routes/logs";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(cors());
app.use(helmet());

// Register Routes
app.use("/auth", authRoutes);
app.use("/projects", projectRoutes);
app.use("/tasks", taskRoutes);
app.use("/users", userRoutes);
app.use("/logs", logRoutes);

// Health Check Route
app.get("/health", (req, res) => {
  res.status(200).json({ status: "OK" });
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

export default app;
