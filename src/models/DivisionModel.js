import mongoose from "mongoose";

const divisionSchema = new mongoose.Schema(
  {
    slug: {
      type: String,
      required: true,
      unique: true,
      index: true,
    },
    short: String,
    name: {
      type: String,
      required: true,
      unique: true,
    },
    headquarters: {
      type: String,
      required: true,
    },
    districts: Number,
    talukas: Number,
    villages: Number,
    description: String,
  },
  {
    timestamps: true,
  }
);

export default mongoose.models.Division || mongoose.model("Division", divisionSchema);