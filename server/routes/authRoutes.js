const express = require("express");
const router = express.Router();
const authMiddleWare = require("../middlewares/authMiddleware");
const authController = require("../controllers/authController");

// Registeration Routes
router.post("/register", authController.register);

// Login Routes
router.post("/login", authController.login);


module.exports = router;