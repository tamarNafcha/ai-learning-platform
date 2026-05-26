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

const updateCategory = async (id, name) => {
  return await Category.findByIdAndUpdate(
    id,
    { name },
    { new: true }
  );
};

const deleteCategory = async (id) => {
  return await Category.findByIdAndDelete(id);
};

const updateSubCategory = async (id, name) => {
  return await SubCategory.findByIdAndUpdate(
    id,
    { name },
    { new: true }
  );
};

const deleteSubCategory = async (id) => {
  return await SubCategory.findByIdAndDelete(id);
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