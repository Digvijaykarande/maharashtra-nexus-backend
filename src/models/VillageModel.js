import mongoose from "mongoose";

const villageSchema = new mongoose.Schema(
  {
    slug: {
      type: String,
      unique: true,
    },
    talukaSlug: {
    type: String,
    index: true,
  },
    name: String,
    type: String,
    state: String,
    division: {
      type: String,
      index: true,
    },
    district: {
      type:String,
      index:true,
    },
    taluka:  {
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


export default mongoose.models.Village || mongoose.model("Village", villageSchema);