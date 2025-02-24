import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import helmet from "helmet";
import connectDB from "./config/db";
import mongoose from "mongoose";
import { logToDB } from "./utils/logger";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(cors());
app.use(helmet());

// Connect to MongoDB
connectDB();

// Function to get Mongoose connection state
const getDbStatus = () => {
  switch (mongoose.connection.readyState) {
    case 0:
      return "Disconnected ❌";
    case 1:
      return "Connected ✅";
    case 2:
      return "Connecting ⏳";
    case 3:
      return "Disconnecting 🔄";
    default:
      return "Unknown State ❓";
  }
};

// Health Check Route
app.get("/health", async (req, res) => {
  const dbStatus = getDbStatus();
  const lastError = (mongoose.connection as any)._connectionError || "No recent errors";

  // ✅ Log every health check request
  await logToDB("info", "Health check requested", { dbStatus });

  res.status(200).json({
    status: "OK",
    database: dbStatus,
    lastError: lastError.message || lastError,
  });
});

// Start Server
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});

export default app;
