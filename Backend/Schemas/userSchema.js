const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
  userName: { type: String, required: true, unique: true },
  passwordHash: { type: String, required: true },
});

module.exports = mongoose.model("User", userSchema);
