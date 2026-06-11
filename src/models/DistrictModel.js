import mongoose from "mongoose";

const districtSchema = new mongoose.Schema(
  {
    slug: {
      type: String,
      required: true,
      unique: true,
      index: true,
    },

    name: {
      type: String,
      required: true,
    },

    division: {
      type: String,
      required: true,
      index: true,
    },

    headquarters: String,

    talukas: Number,

    villages: Number,

    description: String,
  },
  {
    timestamps: true,
  }
);

export default mongoose.models.District ||
  mongoose.model("District", districtSchema);