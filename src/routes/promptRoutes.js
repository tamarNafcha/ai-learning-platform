const express = require("express");

const promptController = require("../controllers/promptController");

const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

router.post(
  "/",
  authMiddleware,
  promptController.createPrompt
);

router.get(
  "/my-history",
  authMiddleware,
  promptController.getUserHistory
);

module.exports = router;