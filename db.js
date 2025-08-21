import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const uri = process.env.MONGODB_URI;
const dbName = process.env.DB_NAME || "messmate";

async function connectDB() {
  try {
    if (!uri) throw new Error("MONGODB_URI is missing in .env");
    await mongoose.connect(uri, { dbName });
    console.log("✅ MongoDB connected with Mongoose");
  } catch (err) {
    console.error("❌ MongoDB connection failed:", err.message);
    process.exit(1); // stop server if DB fails
  }
}

export default connectDB;
