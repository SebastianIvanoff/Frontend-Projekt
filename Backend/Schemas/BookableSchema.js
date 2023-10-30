const mongoose = require("mongoose");
const { Schema } = mongoose;

const BookableSchema = new Schema({
  Address: { type: String, required: true },
  Name: { type: String, required: true },
  Img: { type: String },
  Description: { type: String, required: true },
  Price: { type: Number, required: true },
});

module.exports = mongoose.model("Bookable", BookableSchema);
