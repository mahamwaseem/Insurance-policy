const mongoose = require("mongoose");

const applicationSchema = new mongoose.Schema({
  name: String,
  email: String,
  loanAmount: Number,
  purpose: String,
}, { timestamps: true });

module.exports = mongoose.model("Application", applicationSchema);
