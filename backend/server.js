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

const userRoutes = require("./routes/userRoutes");
const authRoutes = require("./routes/authRoutes");
const salonRoutes = require("./routes/business/salonRoutes");
const clinicRoutes = require("./routes/business/clinicRoutes");
const serviceRoutes = require("./routes/serviceRoutes");
const appointmentRoutes = require("./routes/appointmentRoutes");

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

// Use Routes
app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/salons", salonRoutes);
app.use("/api/clinics", clinicRoutes);
app.use("/api/services", serviceRoutes);
app.use("/api/appointments", appointmentRoutes);

// Basic route for testing
app.get("/", (req, res) => {
  res.send("API is running...");
});

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
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  age: { type: Number },
  gender: { type: String, enum: ["Male", "Female", "Other"] },
  email: { type: String, unique: true, required: true },
  phone: { type: String, required: true },
  location: { type: String },
  profilePicture: { type: String }, // URL or file path

  // For Businesses (if applicable)
  businessName: String,
  businessType: { type: String, enum: ["Salon", "Clinic"] },
  businessAddress: String,
  licenseNumber: String,
  contactPerson: String,

  // Security
  password: { type: String, required: true },

  // Other
  isBusiness: { type: Boolean, default: false }, // To differentiate between customers and businesses
  termsAccepted: { type: Boolean, required: true },
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
    return res.status(400).json({ message: "Role name is required" });
  }

  try {
    const existingRole = await Role.findOne({ name });
    if (existingRole) {
      return res.status(400).json({ message: "Role already exists" });
    }

    const newRole = new Role({ name });
    await newRole.save();

    res.status(201).json({ message: "Role created successfully" });
  } catch (error) {
    console.error("Error creating role:", error);
    res.status(500).json({ message: "Error creating role", error });
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
app.post("/api/login", async (req, res) => {
  const { email } = req.body;

  try {
    // Verify Firebase ID token first
    const idToken = req.headers.authorization?.split("Bearer ")[1];
    if (!idToken) {
      return res.status(401).json({ message: "No token provided" });
    }

    const decodedToken = await admin.auth().verifyIdToken(idToken);

    // Check if the user exists in MongoDB
    const user = await User.findOne({ email });
    if (!user) {
      return res
        .status(404)
        .json({ message: "User not found in the database" });
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
