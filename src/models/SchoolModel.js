import mongoose from "mongoose";

const schoolSchema = new mongoose.Schema(
  {
    slug: {
      type: String,
      unique: true,
    },
    name: String,
    board: String,
    district: String,
    taluka: String,
    division: String,
    city: String,
    town: String,
    village: String,
    medium: String,
    address: String,
  },
  {
    timestamps: true,
  }
);

export default mongoose.models.School || mongoose.model("School", schoolSchema);