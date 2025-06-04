import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    dob: { type: Date, required: true },
    email: { type: String, required: true, unique: true, lowercase: true, index: true },
    password: { type: String, required: true, select: false },
    role: { type: String, enum: ["Admin", "User", "Moderator"], default: "User" },
    status: { type: String, enum: ["Active", "Suspended", "Inactive"], default: "Active" }
  },
  { timestamps: true }
);

export default mongoose.model("User", userSchema);
