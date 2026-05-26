const Prompt = require("../models/Prompt");
const Category = require("../models/Category");
const SubCategory = require("../models/SubCategory");
const aiService = require("./aiService");

const createPrompt = async (userId, promptData) => {
  const { categoryId, subCategoryId, prompt } = promptData;

  const category = await Category.findById(categoryId);
  const subCategory = await SubCategory.findById(subCategoryId);

  if (!category || !subCategory) {
    throw new Error("Category or sub-category not found");
  }

  const aiResponse = await aiService.generateLesson(
    category.name,
    subCategory.name,
    prompt
  );

  const savedPrompt = await Prompt.create({
    user: userId,
    category: categoryId,
    subCategory: subCategoryId,
    prompt,
    response: aiResponse,
  });

  return savedPrompt;
};

const getUserHistory = async (userId) => {
  return await Prompt.find({ user: userId })
    .populate("category", "name")
    .populate("subCategory", "name")
    .sort({ createdAt: -1 });
};

module.exports = {
  createPrompt,
  getUserHistory,
};