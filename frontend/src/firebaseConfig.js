// Import necessary Firebase modules
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"; // Import Firestore

// Firebase configuration object (use the details from your Firebase Console)
const firebaseConfig = {
  apiKey: "AIzaSyDN4uoWuNpKzibpvxp1UxJJ1BNMOfgCIrA",
  authDomain: "eliteglam24.firebaseapp.com",
  projectId: "eliteglam24",
  storageBucket: "eliteglam24.firebasestorage.app",
  messagingSenderId: "1092130623701",
  appId: "1:1092130623701:web:2f9a3f5901c15716fa525c",
  measurementId: "G-S8LCCFB68G",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication
const auth = getAuth(app);

// Initialize Firestore
const db = getFirestore(app); // Add Firestore initialization

// Export app, auth, and db for use in other files
export { app, auth, db };
