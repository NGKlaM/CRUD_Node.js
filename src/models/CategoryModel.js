import mongoose from "mongoose";
const categorySchema = mongoose.Schema(
  {
    title: { type: String },
    description: { type: String },
    slug: { type: String },
  },
  { timestamps: true, versionKey: false }
);

export default mongoose.model("Category", categorySchema);
