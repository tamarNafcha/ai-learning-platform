const express = require("express");

const adminController = require("../controllers/adminController");
const authMiddleware = require("../middleware/authMiddleware");
const adminMiddleware = require("../middleware/adminMiddleware");

const router = express.Router();

router.get(
  "/users",
  authMiddleware,
  adminMiddleware,
  adminController.getAllUsers
);

router.get(
  "/prompts",
  authMiddleware,
  adminMiddleware,
  adminController.getAllPrompts
);

module.exports = router;