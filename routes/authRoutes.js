const express = require("express");
const { registerController, loginController, googleLoginController } = require("../controller/authController");
const router = express.Router();

router.post("/register", registerController);
router.post("/login", loginController);
router.post("/google", googleLoginController)

module.exports = router; 