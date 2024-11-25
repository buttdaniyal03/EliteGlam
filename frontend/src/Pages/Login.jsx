import axios from "axios"; // For making requests to your backend
import {
  GoogleAuthProvider,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebaseConfig"; // Import firebase auth

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(""); // Define error state
  const [loading, setLoading] = useState(false); // Define loading state
  const [showPassword, setShowPassword] = useState(false);
  const [showForgotPassword, setShowForgotPassword] = useState(false); // To toggle forgot password view
  const [resetEmail, setResetEmail] = useState(""); // Email for reset
  const [resetError, setResetError] = useState(""); // Error for reset email
  const [resetSuccess, setResetSuccess] = useState(""); // Success message for reset
  const navigate = useNavigate();

  // Handle email/password login
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;

      if (user.emailVerified) {
        console.log("User logged in:", user);
        // Get Firebase ID token
        const idToken = await user.getIdToken();

        // Send the Firebase token to the backend for verification
        const response = await axios.post("/api/verifyToken", {
          token: idToken,
        });

        // If backend verifies the token successfully, store user info and navigate
        if (response.data.message === "Token verified") {
          localStorage.setItem("user", JSON.stringify(user)); // Store user info
          navigate("/dashboard");
        } else {
          setError("Token verification failed.");
        }
      } else {
        setError("Please verify your email before logging in.");
        await auth.signOut(); // Sign out unverified user
      }
    } catch (error) {
      setError(error.message); // Show error message
      console.error("Error:", error.message);
    } finally {
      setLoading(false);
    }
  };

  // Handle Google login
  const handleGoogleLogin = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      console.log("Google User:", user);
      // Get Firebase ID token
      const idToken = await user.getIdToken();

      // Send the Firebase token to the backend for verification
      const response = await axios.post("/api/verifyToken", { token: idToken });

      if (response.data.message === "Token verified") {
        localStorage.setItem("user", JSON.stringify(user)); // Store user info
        navigate("/dashboard");
      } else {
        setError("Token verification failed.");
      }
    } catch (error) {
      setError("Error during Google login: " + error.message);
      console.error("Google login error:", error.message);
    }
  };

  // Handle password reset
  const handlePasswordReset = async (e) => {
    e.preventDefault();
    setResetError("");
    setResetSuccess("");

    const actionCodeSettings = {
      // The URL you want to redirect back to. The domain (www.example.com) for this
      //  will need to be in the authorized domains list in the Firebase Console.
      // url: "https://your-app.com/reset-password", // Change this to your reset page
      // handleCodeInApp: true,
    };
    try {
      await sendPasswordResetEmail(auth, resetEmail, actionCodeSettings);
      setResetSuccess("Password reset email sent! Please check your inbox.");
    } catch (error) {
      setResetError("Error: " + error.message);
    }
  };

  return (
    <div className="w-full max-w-md mx-auto mt-10 p-8 bg-gradient-to-br from-gray-200 to-gray-100 shadow-lg rounded-lg">
      <h2 className="text-3xl font-extrabold text-center mb-6 text-red-500">
        Login
      </h2>

      {/* Error Message */}
      {error && (
        <div className="bg-red-100 border border-red-500 text-red-600 p-3 rounded mb-6 text-center shadow-md">
          {error}
        </div>
      )}

      {/* Password Reset Success/Error */}
      {resetSuccess && (
        <div className="bg-green-100 border border-green-500 text-green-600 p-3 rounded mb-6 text-center shadow-md">
          {resetSuccess}
        </div>
      )}
      {resetError && (
        <div className="bg-red-100 border border-red-500 text-red-600 p-3 rounded mb-6 text-center shadow-md">
          {resetError}
        </div>
      )}

      {/* Login Form */}
      {!showForgotPassword ? (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-700 font-medium">Email</label>
            <input
              type="email"
              required
              placeholder="Enter your email"
              className="w-full p-3 border border-red-300 rounded-lg mt-1 shadow-sm focus:ring-red-500 focus:border-red-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <label className="block text-gray-700 font-medium">Password</label>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              required
              placeholder="Enter your password"
              className="w-full p-3 border border-red-300 rounded-lg mt-1 shadow-sm focus:ring-red-500 focus:border-red-500"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              type="button"
              onClick={() => setShowPassword((prev) => !prev)}
              className="absolute inset-y-0 right-0 px-3 text-gray-500 hover:text-gray-700 focus:outline-none"
            >
              {showPassword ? "Hide" : "Show"}
            </button>
          </div>
          <button
            type="submit"
            disabled={loading}
            className="w-full p-3 bg-red-500 text-white font-semibold rounded-lg shadow-md hover:bg-red-600 transition duration-200"
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>
      ) : (
        // Forgot password form
        <form onSubmit={handlePasswordReset} className="space-y-4">
          <div>
            <label className="block text-gray-700 font-medium">Email</label>
            <input
              type="email"
              required
              placeholder="Enter your email to reset password"
              className="w-full p-3 border border-red-300 rounded-lg mt-1 shadow-sm focus:ring-red-500 focus:border-red-500"
              value={resetEmail}
              onChange={(e) => setResetEmail(e.target.value)}
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className="w-full p-3 bg-red-500 text-white font-semibold rounded-lg shadow-md hover:bg-red-600 transition duration-200"
          >
            {loading ? "Sending reset link..." : "Send Reset Link"}
          </button>
        </form>
      )}

      {/* Google Login Button */}
      <h2 className="text-center pt-3">OR</h2>
      <div className="mt-3 text-center">
        <button
          onClick={handleGoogleLogin}
          disabled={loading}
          className="w-full p-3 bg-red-500 text-white font-semibold rounded-lg shadow-md hover:bg-red-600 transition duration-200"
        >
          {loading ? "Signing in with Google..." : "Login with Google"}
        </button>
      </div>

      {/* Link to Registration */}
      <div className="text-center mt-4">
        <span>Don't have an account? </span>
        <a href="/registration" className="text-red-500 hover:underline">
          Sign up here
        </a>
      </div>

      {/* Forgot password link */}
      {!showForgotPassword && (
        <div className="text-center mt-4">
          <span
            onClick={() => setShowForgotPassword(true)}
            className="text-blue-500 cursor-pointer hover:underline"
          >
            Forgot password?
          </span>
        </div>
      )}
    </div>
  );
};

export default Login;
