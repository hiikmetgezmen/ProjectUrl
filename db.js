import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();


mongoose.connect(process.env.DB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const connection = mongoose.connection;

export default connection;
