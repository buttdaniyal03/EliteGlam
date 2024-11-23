const express = require("express");
const { registerUser, getUsers } = require("../controllers/userController");

const router = express.Router();

// Route for registering a new user
router.post("/register", registerUser);

// Route for fetching all users (example route)
router.get("/", getUsers);

module.exports = router;
