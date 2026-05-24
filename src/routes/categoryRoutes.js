const express = require("express");

const categoryController = require("../controllers/categoryController");

const router = express.Router();

router.get("/", categoryController.getAllCategories);

router.get(
  "/:categoryId/subcategories",
  categoryController.getSubCategoriesByCategory
);

router.post("/", categoryController.createCategory);

router.post("/subcategories", categoryController.createSubCategory);

module.exports = router;