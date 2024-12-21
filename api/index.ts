import mongoose from "mongoose";
import { app } from "./app";
import "dotenv/config";

const start = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI!, {
      dbName: process.env.MONGO_DB_NAME,
    });
    console.log("MongoDb connection succeeded");

    app.listen(8000, () => {
      console.log("Server ready on port 8000");
    });
  } catch (error) {
    console.log(error);
  }
};

start();

export default app;
