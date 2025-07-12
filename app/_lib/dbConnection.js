import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost:27017/nextjs-user-management";

export function dbConnection() {
  if (mongoose.connections[0].readyState) {
    return mongoose.connections[0];
  }

  return mongoose
    .connect(MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("Connected to database successfully");
      return mongoose.connections[0];
    })
    .catch((err) => {
      console.error("Database connection error:", err);
      throw err;
    });
}
