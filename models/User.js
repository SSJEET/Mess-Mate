// models/User.js
import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  file: { type: String, required: true }, // e.g., "harry18.html"
  balance: { type: Number, default: 0 },
  cost: { type: Number, default: 0 },
});

export default mongoose.model("User", userSchema);
