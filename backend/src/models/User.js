import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name:        { type: String, required: true, trim: true },
    dob:         { type: Date,   required: true },
    email:       { type: String, required: true, unique: true, lowercase: true },
    password:    { type: String, required: true, select: false },   // never return hash by default
  },
  { timestamps: true } 
);

export default mongoose.model("User", userSchema);
