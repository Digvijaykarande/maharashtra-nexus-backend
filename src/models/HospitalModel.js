import mongoose from "mongoose";

const hospitalSchema = new mongoose.Schema(
  {
    slug: {
      type: String,
      unique: true,
    },
    name: String,
    type: String,
    district: String,
    taluka: String,
    division: String,
    city: String,
    town: String,
    beds: Number,
    address: String,
  },
  {
    timestamps: true,
  }
);

export default mongoose.models.Hospital || mongoose.model("Hospital", hospitalSchema);