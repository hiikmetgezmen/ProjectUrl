const mongoose = require("mongoose");

// instantiate a mongoose schema
const URLSchema = new mongoose.Schema({
  urlCode: String,
  longUrl: String,
  shortUrl: String,
});

module.exports = mongoose.model("Url", URLSchema);
