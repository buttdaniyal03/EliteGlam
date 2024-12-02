const express = require("express");
const {
  registerUser,
  loginUser,
  verifyEmail,
  sendResetEmail,
  resetPassword,
} = require("../../controllers/authController");

const router = express.Router();

// User registration
router.post("/register", registerUser);

// User login
router.post("/login", loginUser);

// Email verification
router.get("/verify-email", verifyEmail);

// Send password reset email
router.post("/send-reset-email", sendResetEmail);

// Reset password
router.post("/reset-password", resetPassword);

module.exports = router;
