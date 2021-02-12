import express from "express";
const router = express.Router();
import {
  deleteProduct,
  createProduct,
  updateProduct,
  getProductById,
  getProducts,
  createProductReview,
} from "../controllers/productController.js";
import { protect, admin } from "../middleware/authMiddleware.js";

router.route("/").get(getProducts).post(protect, admin, createProduct);
router.route("/:id/reviews").post(protect, createProductReview);
router
  .route("/:id")
  .get(getProductById)
  .delete(protect, deleteProduct)
  .put(protect, admin, updateProduct);

export default router;
