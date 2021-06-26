const mongoose = require("mongoose");

const querySchema = new mongoose.Schema(
  {
    queryName: {
      type: String,
      required: true,
    },
    queryPicture: {
      type: String,
    },

    askedBy: {
      type: mongoose.Schema.ObjectId,
      ref: "User",
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Query", querySchema);
