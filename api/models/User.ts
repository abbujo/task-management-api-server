import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    github_id: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    avatar_url: { type: String },
    created_at: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

export default mongoose.model("User", UserSchema);
