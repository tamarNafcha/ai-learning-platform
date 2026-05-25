const promptService = require("../services/promptService");

const createPrompt = async (req, res) => {
  try {
    const result = await promptService.createPrompt(
      req.user.id,
      req.body
    );

    res.status(201).json(result);
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};

const getUserHistory = async (req, res) => {
  try {
    const history = await promptService.getUserHistory(req.user.id);

    res.status(200).json(history);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  createPrompt,
  getUserHistory,
};