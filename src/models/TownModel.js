import mongoose from "mongoose";

const townSchema = new mongoose.Schema(
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

    type: String,

    state: String,

    division: {
      type: String,
      index: true,
    },

    district: {
      type: String,
      index: true,
    },

    taluka: {
      type: String,
      index: true,
    },

    talukaSlug: {
      type: String,
      index: true,
    },

    population: Number,
    malePopulation: Number,
    femalePopulation: Number,

    hospitals: Number,
    schools: Number,
    colleges: Number,

    latitude: Number,
    longitude: Number,

    address: String,

    lastUpdated: Date,
  },
  {
    timestamps: true,
  }
);

export default mongoose.models.Town ||
  mongoose.model("Town", townSchema);