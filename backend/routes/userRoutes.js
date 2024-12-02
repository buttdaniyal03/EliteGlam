const express = require("express");
const {
  registerUser,
  loginUser,
  getUsers,
  updateUser,
  deleteUser,
} = require("../../controllers/userController");

const router = express.Router();

// Route for registering a new user
router.post("/register", registerUser);

// Route for logging in a user
router.post("/login", loginUser);

// Route for fetching all users (Admin or testing purposes)
router.get("/", getUsers);

// Route for updating a user's details
router.put("/:userId", updateUser);

// Route for deleting a user
router.delete("/:userId", deleteUser);

module.exports = router;
