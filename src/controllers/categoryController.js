const categoryService = require("../services/categoryService");

const getAllCategories = async (req, res) => {
  try {
    const categories = await categoryService.getAllCategories();

    res.status(200).json(categories);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const getSubCategoriesByCategory = async (req, res) => {
  try {
    const { categoryId } = req.params;

    const subCategories =
      await categoryService.getSubCategoriesByCategory(categoryId);

    res.status(200).json(subCategories);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const createCategory = async (req, res) => {
  try {
    const { name } = req.body;

    const category = await categoryService.createCategory(name);

    res.status(201).json(category);
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};

const createSubCategory = async (req, res) => {
  try {
    const { name, categoryId } = req.body;

    const subCategory = await categoryService.createSubCategory(
      name,
      categoryId
    );

    res.status(201).json(subCategory);
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};

module.exports = {
  getAllCategories,
  getSubCategoriesByCategory,
  createCategory,
  createSubCategory,
};