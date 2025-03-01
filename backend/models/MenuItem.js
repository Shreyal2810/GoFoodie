import mongoose from "mongoose";

const menuItemSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  description: { type: String },
  image: { type: String }, // URL to image
});

const MenuItem = mongoose.model("MenuItem", menuItemSchema);
export default MenuItem;
