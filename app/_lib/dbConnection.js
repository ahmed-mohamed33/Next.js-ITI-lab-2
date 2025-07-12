import mongoose from "mongoose";

export function dbConnection() {
  mongoose
    .connect("mongodb://localhost:27017/")
    .then(() => {
      console.log("connected to db successfuly");
    })
    .catch((err) => {
      console.log(err);
    });
}
