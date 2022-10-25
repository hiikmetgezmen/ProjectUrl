import mongoose from "mongoose";




const URLSchema = new mongoose.Schema({
  urlCode: String,
  longUrl: String,
  shortUrl: String,
});

const urlmodel = mongoose.model("Url", URLSchema);
export default urlmodel;
