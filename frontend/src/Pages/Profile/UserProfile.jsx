// import { getAuth } from "firebase/auth";
// import React from "react";

// const UserProfile = () => {
//   const auth = getAuth();
//   const user = auth.currentUser;

//   if (!user) {
//     return <p>Please log in to view your profile.</p>; // Show if user is not logged in
//   }

//   return (
//     <div className="userProfile">
//       <h1>Your Profile</h1>
//       <img
//         src={user.photoURL || "default_profile_picture_url"} // Use Firebase photoURL if available
//         alt="Profile"
//         className="w-36 h-36 rounded-full object-cover"
//       />
//       <h2>{user.displayName || "User"}</h2> {/* Display user's name */}
//       <p>Email: {user.email}</p>
//     </div>
//   );
// };

// export default UserProfile;

import { getAuth, sendEmailVerification } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from "../../firebaseConfig"; // Import Firestore db

const UserProfile = () => {
  const auth = getAuth();
  const user = auth.currentUser;

  const [userData, setUserData] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [newContactAddress, setNewContactAddress] = useState("");
  const [emailVerified, setEmailVerified] = useState(false);
  const [isLoading, setIsLoading] = useState(true); // Added loading state
  const [errorMessage, setErrorMessage] = useState(""); // Error message state

  useEffect(() => {
    const checkEmailVerification = () => {
      if (user) {
        if (!user.emailVerified) {
          console.log("Email not verified. Please verify your email address.");
          setEmailVerified(false);
        } else {
          console.log("Email verified. Proceed with app.");
          setEmailVerified(true);
        }
      }
    };

    checkEmailVerification();

    const fetchUserData = async () => {
      if (user) {
        setIsLoading(true); // Set loading to true when fetching data
        try {
          const userRef = doc(db, "users", user.uid); // Reference to user's data in Firestore
          const userDoc = await getDoc(userRef);

          if (userDoc.exists()) {
            setUserData(userDoc.data()); // Set the user data from Firestore
            setNewContactAddress(userDoc.data().contactAddress || ""); // Set the contact address to edit
          } else {
            setErrorMessage("User data not found.");
          }
        } catch (error) {
          setErrorMessage("Failed to load user data.");
          console.error("Error fetching user data:", error);
        } finally {
          setIsLoading(false); // Set loading to false after fetching data
        }
      }
    };

    fetchUserData();
  }, [user]);

  const resendVerificationEmail = async () => {
    if (user && !user.emailVerified) {
      try {
        await sendEmailVerification(user);
        console.log("Verification email resent.");
        alert("Verification email resent.");
      } catch (error) {
        console.error("Error resending email verification:", error.message);
        alert("Error resending email verification.");
      }
    }
  };

  const handleEditClick = () => {
    setIsEditing(true); // Enable editing mode
  };

  const handleSaveClick = async () => {
    if (!newContactAddress) {
      alert("Please enter a valid contact address.");
      return;
    }

    try {
      const userRef = doc(db, "users", user.uid); // Reference to user's document in Firestore
      await updateDoc(userRef, { contactAddress: newContactAddress }); // Update the contact address

      setUserData((prevData) => ({
        ...prevData,
        contactAddress: newContactAddress,
      })); // Update local state
      setIsEditing(false); // Disable editing mode
      alert("Contact address updated successfully!");
    } catch (error) {
      console.error("Error updating document: ", error);
      alert("Failed to update contact address.");
    }
  };

  if (!user) {
    return <p>Please log in to view your profile.</p>; // If user is not logged in
  }

  return (
    <div className="userProfile">
      <h1>Your Profile</h1>
      <img
        src={user.photoURL || "default_profile_picture_url"} // Use Firebase photoURL if available
        alt="Profile"
        className="w-36 h-36 rounded-full object-cover"
      />
      <h2>{user.displayName || "User"}</h2> {/* Display user's name */}
      <p>Email: {user.email}</p>
      {/* Email Verification Status */}
      {!emailVerified && (
        <p className="text-yellow-500">
          Your email is not verified. Please check your inbox to verify your
          email.
          <button
            onClick={resendVerificationEmail}
            className="ml-2 text-blue-500 underline"
          >
            Resend Verification Email
          </button>
        </p>
      )}
      {/* Display and edit the contact address */}
      <div className="mt-4">
        <h3>Contact Address:</h3>
        {isEditing ? (
          <div>
            <input
              type="text"
              value={newContactAddress}
              onChange={(e) => setNewContactAddress(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg mt-2"
            />
            <button
              onClick={handleSaveClick}
              className="mt-2 p-2 bg-blue-500 text-white rounded"
            >
              Save
            </button>
          </div>
        ) : (
          <p>{userData?.contactAddress || "No contact address set."}</p>
        )}
        {!isEditing && (
          <button
            onClick={handleEditClick}
            className="mt-2 p-2 bg-yellow-500 text-white rounded"
          >
            Edit
          </button>
        )}
      </div>
      {/* Loading and Error States */}
      {isLoading && <p>Loading your profile...</p>}
      {errorMessage && <p className="text-red-500">{errorMessage}</p>}
    </div>
  );
};

export default UserProfile;
