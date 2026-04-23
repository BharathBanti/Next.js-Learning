import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  age: {
    type: Number,
  },
}, {timestamps: true});

// Prevent model overwrite issue in Next.js
export default mongoose.models.User || mongoose.model("User", UserSchema);