import mongoose from "mongoose";

const prouductSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      requred: true,
    },
    slug: {
      type: String,
      requred: true,
    },
    description: {
      type: String,
      requred: true,
    },
    price: {
      type: Number,
      requred: true,
    },
    category: {
      type: mongoose.ObjectId,
      ref: "Category",
      requred: true,
    },
    quantity: {
      type: Number,
      requred: true,
    },
    photo: {
      data: Buffer,
      contentType: String,
    },
    shipping: {
      type: Boolean,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Product", prouductSchema);
