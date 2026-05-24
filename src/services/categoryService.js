const Category = require("../models/Category");
const SubCategory = require("../models/SubCategory");

const getAllCategories = async () => {
  return await Category.find();
};

const getSubCategoriesByCategory = async (categoryId) => {
  return await SubCategory.find({ category: categoryId });
};

const createCategory = async (name) => {
  return await Category.create({ name });
};

const createSubCategory = async (name, categoryId) => {
  return await SubCategory.create({
    name,
    category: categoryId,
  });
};

module.exports = {
  getAllCategories,
  getSubCategoriesByCategory,
  createCategory,
  createSubCategory,
};