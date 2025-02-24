import mongoose from "mongoose";

const logSchema = new mongoose.Schema(
  {
    level: { type: String, required: true }, // Example: "error", "info", "debug"
    message: { type: String, required: true }, // Log message
    meta: { type: Object, default: {} }, // Additional info (e.g., error stack)
    timestamp: { type: Date, default: Date.now }, // Log timestamp
  },
  { timestamps: true }
);

export default mongoose.model("Log", logSchema);
