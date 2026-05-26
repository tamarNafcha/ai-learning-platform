const adminService = require("../services/adminService");

const getAllUsers = async (req, res) => {
  try {
    const users = await adminService.getAllUsers();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const getAllPrompts = async (req, res) => {
  try {
    const prompts = await adminService.getAllPrompts();
    res.status(200).json(prompts);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  getAllUsers,
  getAllPrompts,
};