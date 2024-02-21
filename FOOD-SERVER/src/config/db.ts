import mongoose from "mongoose";
import color from "colors";

export const connectDB = async (uri: string) => {
  try {
    await mongoose.connect(uri);
    console.log(color.bgGreen("Database is connected"));
  } catch (error) {
    console.log(color.bgRed("Database is failed to connect."));
    // console.log("data base is failed", error);
    console.log("URI", uri);
    // console.log(color.bgRed("Database connection error:"), error.message);
  }
};
