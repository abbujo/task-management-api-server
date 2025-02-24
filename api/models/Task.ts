import mongoose from "mongoose";

const TaskSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String },
    assignees: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
    priority: { type: String, enum: ["low", "medium", "high"], default: "medium" },
    is_active: { type: Boolean, default: true },
    is_repetitive: { type: Boolean, default: false },
    repeat_frequency: { type: String, enum: ["weekly", "monthly", null], default: null },
    due_date: { type: Date },
    project_id: { type: mongoose.Schema.Types.ObjectId, ref: "Project", required: true },
  },
  { timestamps: true }
);

export default mongoose.model("Task", TaskSchema);
