import mongoose from "mongoose";

const collegeSchema = new mongoose.Schema(
  {
    slug: {
      type: String,
      unique: true,
    },
    name: String,
    division: String,
    city: String,
    town: String,
    stream: String,
    district: String,
    taluka: String,
    village: String,
    address: String,
  },
  {
    timestamps: true,
  }
);

export default mongoose.models.College || mongoose.model("College", collegeSchema);