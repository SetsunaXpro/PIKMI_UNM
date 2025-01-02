const express = require("express");
const { register, login, logout } = require("../controller/authController");
const { authenticate } = require("../middleware/authMiddleware");
const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.post("/logout", authenticate, logout);

module.exports = router;
