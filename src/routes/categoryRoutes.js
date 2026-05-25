const express = require("express");

const categoryController = require("../controllers/categoryController");
const authMiddleware = require("../middleware/authMiddleware");
const adminMiddleware = require("../middleware/adminMiddleware");

const router = express.Router();

router.get("/", categoryController.getAllCategories);

router.get(
  "/:categoryId/subcategories",
  categoryController.getSubCategoriesByCategory
);

router.post(
  "/",
  authMiddleware,
  adminMiddleware,
  categoryController.createCategory
);

router.put(
  "/:id",
  authMiddleware,
  adminMiddleware,
  categoryController.updateCategory
);

router.delete(
  "/:id",
  authMiddleware,
  adminMiddleware,
  categoryController.deleteCategory
);

router.post(
  "/subcategories",
  authMiddleware,
  adminMiddleware,
  categoryController.createSubCategory
);

router.put(
  "/subcategories/:id",
  authMiddleware,
  adminMiddleware,
  categoryController.updateSubCategory
);

router.delete(
  "/subcategories/:id",
  authMiddleware,
  adminMiddleware,
  categoryController.deleteSubCategory
);

module.exports = router;