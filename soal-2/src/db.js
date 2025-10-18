import mongoose from "mongoose";

export async function connectToDatabase() {
  const mongoUri =
    process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/soal2db";
  mongoose.set("strictQuery", true);
  await mongoose.connect(mongoUri, {
    serverSelectionTimeoutMS: 5000,
  });
}

export default mongoose;
