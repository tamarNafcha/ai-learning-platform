const User = require("../models/User");
const Prompt = require("../models/Prompt");

const getAllUsers = async () => {
  return await User.find().select("-password");
};

const getAllPrompts = async () => {
  return await Prompt.find()
    .populate("user", "name email role")
    .populate("category", "name")
    .populate("subCategory", "name")
    .sort({ createdAt: -1 });
};

module.exports = {
  getAllUsers,
  getAllPrompts,
};