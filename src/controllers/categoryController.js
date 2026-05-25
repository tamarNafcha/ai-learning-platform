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

const updateCategory = async (req, res) => {
  try {
    const category = await categoryService.updateCategory(
      req.params.id,
      req.body.name
    );

    res.status(200).json(category);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const deleteCategory = async (req, res) => {
  try {
    await categoryService.deleteCategory(req.params.id);

    res.status(200).json({
      message: "Category deleted successfully",
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const updateSubCategory = async (req, res) => {
  try {
    const subCategory = await categoryService.updateSubCategory(
      req.params.id,
      req.body.name
    );

    res.status(200).json(subCategory);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const deleteSubCategory = async (req, res) => {
  try {
    await categoryService.deleteSubCategory(req.params.id);

    res.status(200).json({
      message: "Sub-category deleted successfully",
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = {
  getAllCategories,
  getSubCategoriesByCategory,
  createCategory,
  createSubCategory,
  updateCategory,
  deleteCategory,
  updateSubCategory,
  deleteSubCategory
};