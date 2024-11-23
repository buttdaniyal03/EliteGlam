const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const admin = require("firebase-admin"); // Import Firebase Admin SDK

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Initialize Firebase Admin SDK
admin.initializeApp({
  credential: admin.credential.cert(require("./serviceAccountKey.json")),
});

// Connect to MongoDB
mongoose
  .connect("mongodb://localhost:27017/glam")
  .then(() => {
    console.log("MongoDB connected successfully");
  })
  .catch((error) => {
    console.error("MongoDB connection error:", error);
  });

// User schema
// User schema
const userSchema = new mongoose.Schema({
  // Personal Information
  firstName: { type: String },
  lastName: { type: String },
  age: { type: Number },
  gender: { type: String, enum: ["Male", "Female", "Other"] },
  email: { type: String, unique: true },
  phone: { type: String },
  location: { type: String },
  profilePicture: { type: String }, // URL or file path

  // For Businesses (if applicable)
  businessName: String,
  businessType: { type: String, enum: ["Salon", "Clinic"] },
  businessAddress: String,
  licenseNumber: String,
  contactPerson: String,

  // Security
  password: { type: String },

  // Other
  isBusiness: { type: Boolean, default: false }, // To differentiate between customers and businesses
  termsAccepted: { type: Boolean },
});

const User = mongoose.model("User", userSchema);

const roleSchema = new mongoose.Schema({
  name: { type: String, unique: true },
});

const Role = mongoose.model("Role", roleSchema);

// Firebase Token Verification Middleware
const verifyFirebaseToken = async (req, res, next) => {
  const idToken = req.headers.authorization?.split("Bearer ")[1]; // Extract token from Authorization header

  if (!idToken) {
    return res.status(401).json({ message: "No token provided" });
  }

  try {
    const decodedToken = await admin.auth().verifyIdToken(idToken);
    req.user = decodedToken; // Attach decoded user info to request object
    next(); // Proceed to the next middleware or route handler
  } catch (error) {
    console.error("Error verifying Firebase ID token:", error);
    res.status(401).json({ message: "Unauthorized" });
  }
};

// Registration endpoint
app.post("/api/register", async (req, res) => {
  const { firstName, lastName, email, password, phone } = req.body;

  if (!firstName || !lastName || !email || !password || !phone) {
    return res.status(400).json({ message: "All fields are required" });
  }

  // Hash the password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  const newUser = new User({ ...req.body, password: hashedPassword });

  try {
    await newUser.save();
    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    console.error("Error registering user:", error);
    if (error.code === 11000) {
      return res.status(400).json({ message: "Email already in use" });
    }
    res.status(500).json({ message: "Error registering user", error });
  }
});

app.post("/api/role", async (req, res) => {
  const { name } = req.body;

  if (!name) {
    return res.status(400).json({ message: "Name field is required" });
  }

  const newRole = new Role({ name });

  try {
    await newRole.save();
    res.status(201).json({ message: "Role registered successfully" });
  } catch (error) {
    console.error("Error registering role:", error);
    if (error.code === 11000) {
      return res.status(400).json({ message: "Role already exists" });
    }
    res.status(500).json({ message: "Error registering role", error });
  }
});

app.get("/api/roles", async (req, res) => {
  try {
    const roles = await Role.find(); // Exclude passwords from the results for security
    res.status(200).json(roles);
  } catch (error) {
    console.error("Error fetching roles:", error);
    res.status(500).json({ message: "Error fetching roles", error });
  }
});

app.get("/api/users", async (req, res) => {
  try {
    const users = await User.find({}, "-password"); // Exclude passwords from the results for security
    res.status(200).json(users);
  } catch (error) {
    console.error("Error fetching users:", error);
    res.status(500).json({ message: "Error fetching users", error });
  }
  // Hash the password
});

// Login endpoint (With Firebase authentication)
// Login endpoint (With Firebase authentication)
app.post("/api/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    // Verify Firebase ID token first
    const decodedToken = await admin
      .auth()
      .verifyIdToken(req.headers.authorization.split("Bearer ")[1]);

    // Check if the user exists in MongoDB
    const user = await User.findOne({ email });

    if (!user) {
      return res
        .status(404)
        .json({ message: "User not found in the database" });
    }

    // Compare the password stored in MongoDB with the one provided
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    res.status(200).json({ message: "Login successful", user });
  } catch (error) {
    console.error("Error logging in:", error);
    res.status(500).json({ message: "Error logging in", error });
  }
});

// Firebase Auth Token Verification Route
app.post("/api/verifyToken", verifyFirebaseToken, (req, res) => {
  res.status(200).json({ message: "Token verified", user: req.user });
});

// Basic route for testing
app.get("/", (req, res) => {
  res.send("API is running...");
});

// Start the server on port 5000
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
