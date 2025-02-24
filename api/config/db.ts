import mongoose from "mongoose";
import dotenv from "dotenv";
import { logToDB } from "../utils/logger";

dotenv.config();

const MONGO_URI = process.env.MONGODB_URI as string;

const connectDB = async () => {
  try {
    await mongoose.connect(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    } as mongoose.ConnectOptions);
    console.log("✅ MongoDB Connected Successfully");

    // Log successful connection to DB
    await logToDB("info", "MongoDB Connected Successfully");
  } catch (error: any) {
    console.error("❌ MongoDB Connection Failed:", error.message || error);

    // Log error to database
    await logToDB("error", "MongoDB Connection Failed", { error: error.message });

    process.exit(1);
  }
};

// Log Connection Events
mongoose.connection.on("connected", async () => {
  console.log("✅ Mongoose Connected to Database");
  await logToDB("info", "Mongoose Connected to Database");
});

mongoose.connection.on("error", async (err) => {
  console.error("❌ Mongoose Connection Error:", err.message || err);
  await logToDB("error", "Mongoose Connection Error", { error: err.message });
});

mongoose.connection.on("disconnected", async () => {
  console.log("⚠️ Mongoose Disconnected");
  await logToDB("warn", "Mongoose Disconnected");
});

export default connectDB;
