import express from "express";
import asyncHandler from "express-async-handler";
const router = express.Router();
import Product from "../models/productModel.js";

//@des fetch all products
//@des Get /api/products
//@access  Public

router.get(
  "/",
  asyncHandler(async (req, res) => {
    const products = await Product.find({});

    res.json(products);
  })
);

//@des fetch single products
//@des Get /api/products/:id
//@access  Public

router.get(
  "/:id",
  asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id);

    if (product) {
      res.json(product);
    } else {
      res.status(404).json({ message: "Product Not Found Chutiye" });
    }
    // res.json(product);
  })
);

export default router;
