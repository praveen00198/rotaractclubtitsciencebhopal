const mongoose = require("mongoose");

const joinUsSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    contact: {
      type: String,
      required: true,
    },
    enrollment: {
      type: String,
      required: true,
      unique: true,
    },
    skills: {
      type: String,
      required: true,
    },
    source: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("JoinUs", joinUsSchema);
