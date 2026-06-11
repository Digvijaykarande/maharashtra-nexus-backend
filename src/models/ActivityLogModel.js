import mongoose from "mongoose";

const activityLogSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    action: String,
    entityType: String,
    entityId: String,
  },
  {
    timestamps: true,
  }
);

export default mongoose.models.ActivityLog || mongoose.model("ActivityLog", activityLogSchema);