import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGODB_URI}/${DB_NAME}`
    );
    console.log(
      "Database connection ka data",
      connectionInstance
    );
  } catch (error) {
    console.error("ERROR: ", error);
    process.exit(1);
  }
};

export default connectDB;
