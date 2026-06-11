import mongoose from "mongoose";

const talukaSchema = new mongoose.Schema(
  {
    slug: {
      type: String,
      unique: true,
      required: true,
      index: true,
    },

    name: String,

    division: {
      type: String,
      required: true,
      index: true,
    },

    district: {
      type: String,
      required: true,
      index: true,
    },

    headquarters: String,

    villages: Number,
    cities: Number,
    towns: Number,

    population: String,
  },
  {
    timestamps: true,
  }
);

export default mongoose.models.Taluka ||
  mongoose.model("Taluka", talukaSchema);