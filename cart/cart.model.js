import mongoose from "mongoose";

const cartSchema = new mongoose.Schema({
  buyerId: { type: mongoose.ObjectId, required: true, ref: "User" },
  productId: { type: mongoose.ObjectId, required: true, ref: "Product" },
  orderedQuantity: { type: Number, required: true, min: 1 },
});
const CartTable = mongoose.model("Cart", cartSchema);
export default CartTable;
