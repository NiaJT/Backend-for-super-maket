import express from "express";
import connectDB from "./connectDB.js";
import { userController } from "./user/user.controller.js";
import { productController } from "./product/product.controller.js";
import { cartController } from "./cart/cart.controller.js";
const app = express();
const PORT = 8000;
await connectDB();
app.use(express.json());
app.use(userController);
app.use(productController);
app.use(cartController);
app.listen(PORT, () => {
  console.log("App is listening at port 8000");
});
