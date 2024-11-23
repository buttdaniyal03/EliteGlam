import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { assets } from "../../assets/assets_frontend/assets";
import "./navBar.css";

const NavBar = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null); // State to hold the current user
  const [isEmailVerified, setIsEmailVerified] = useState(false); // State to hold email verification status
  const auth = getAuth(); // Initialize Firebase Auth

  useEffect(() => {
    // Check if the user is logged in when the component mounts
    onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser); // User is logged in
        setIsEmailVerified(currentUser.emailVerified); // Check email verification status
      } else {
        setUser(null); // No user is logged in
        setIsEmailVerified(false); // Reset email verification status
      }
    });
  }, [auth]);

  const handleLogout = () => {
    signOut(auth).then(() => {
      setUser(null); // Set user to null after logging out
      setIsEmailVerified(false); // Reset email verification status
      navigate("/"); // Redirect to home or login page
    });
  };

  return (
    <div className="navBar">
      <img
        onClick={() => navigate("/")}
        className="navBar-logo"
        src={assets.logo}
        alt="Logo"
      />
      <ul className="navBar-ul">
        <NavLink to="/">
          <li className="navBar-ul-li">
            Home
            <hr className="navBar-hr" />
          </li>
        </NavLink>
        <NavLink to="/salon">
          <li className="navBar-ul-li">
            Salon
            <hr className="navBar-hr" />
          </li>
        </NavLink>
        <NavLink to="/dermatologist">
          <li className="navBar-ul-li">
            Clinic
            <hr className="navBar-hr" />
          </li>
        </NavLink>
        <NavLink to="/products">
          <li className="navBar-ul-li">
            Products
            <hr className="navBar-hr" />
          </li>
        </NavLink>
        <NavLink to="/about">
          <li className="navBar-ul-li">
            About
            <hr className="navBar-hr" />
          </li>
        </NavLink>
      </ul>

      <div className="navBar-btn-container">
        {/* Show Sign Up and Sign In buttons only when user is not logged in */}
        {!user && (
          <>
            <button
              onClick={() => navigate("/registration")}
              className="navBar-btn bg-red-500 hover:bg-red-600"
            >
              Sign Up
            </button>

            <button
              onClick={() => navigate("/login")}
              className="navBar-btn navBar-signIn bg-red-500 hover:bg-red-600"
            >
              Sign In
            </button>
          </>
        )}

        {/* Show profile-related options when logged in and email is verified */}
        {user && (
          <div className="navBar-pic-container group relative">
            <img
              className="navBar-pic"
              src={user.photoURL || assets.profile_pic} // User's profile photo from Firebase or placeholder
              alt="Profile"
            />
            <img
              className="dropdown-icon"
              src={assets.dropdown_icon}
              alt="Dropdown Icon"
            />

            <div className="navBar-dropDownMenu-container">
              <div className="navBar-dropDownMenu">
                <p
                  onClick={() => {
                    navigate("/dashboard"); // Redirect to the dashboard page
                  }}
                  className="hover:text-black cursor-pointer"
                >
                  Dashboard
                </p>
                <p
                  onClick={() => {
                    navigate("/userprofile"); // Go to user profile
                  }}
                  className="hover:text-black cursor-pointer"
                >
                  My Profile
                </p>
                <p
                  onClick={() => {
                    navigate("/appointments"); // Navigate to appointments
                  }}
                  className="hover:text-black cursor-pointer"
                >
                  My Appointments
                </p>
                <p
                  onClick={handleLogout} // Log out functionality
                  className="hover:text-black cursor-pointer"
                >
                  Logout
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default NavBar;

// import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
// import React, { useEffect, useState } from "react";
// import { NavLink, useNavigate } from "react-router-dom";
// import { assets } from "../../assets/assets_frontend/assets";
// import "./navBar.css";

// const NavBar = () => {
//   const navigate = useNavigate();
//   const [user, setUser] = useState(null); // State to hold the current user
//   const auth = getAuth(); // Initialize Firebase Auth

//   useEffect(() => {
//     // Check if the user is logged in when the component mounts
//     onAuthStateChanged(auth, (currentUser) => {
//       if (currentUser) {
//         setUser(currentUser); // User is logged in
//       } else {
//         setUser(null); // No user is logged in
//       }
//     });
//   }, [auth]);

//   const handleLogout = () => {
//     signOut(auth).then(() => {
//       setUser(null); // Set user to null after logging out
//       navigate("/"); // Redirect to home or login page
//     });
//   };

//   return (
//     <div className="navBar">
//       <img
//         onClick={() => navigate("/")}
//         className="navBar-logo"
//         src={assets.logo}
//         alt="Logo"
//       />
//       <ul className="navBar-ul">
//         <NavLink to="/">
//           <li className="navBar-ul-li">
//             Home
//             <hr className="navBar-hr" />
//           </li>
//         </NavLink>
//         <NavLink to="/salon">
//           <li className="navBar-ul-li">
//             Salon
//             <hr className="navBar-hr" />
//           </li>
//         </NavLink>
//         <NavLink to="/dermatologist">
//           <li className="navBar-ul-li">
//             Clinic
//             <hr className="navBar-hr" />
//           </li>
//         </NavLink>
//         <NavLink to="/products">
//           <li className="navBar-ul-li">
//             Products
//             <hr className="navBar-hr" />
//           </li>
//         </NavLink>
//         <NavLink to="/about">
//           <li className="navBar-ul-li">
//             About
//             <hr className="navBar-hr" />
//           </li>
//         </NavLink>
//       </ul>

//       <div className="navBar-btn-container">
//         {/* Show Sign Up button if not logged in */}
//         {!user && (
//           <button
//             onClick={() => navigate("/registration")}
//             className="navBar-btn bg-red-500 hover:bg-red-600"
//           >
//             Sign Up
//           </button>
//         )}

//         {/* Show profile-related options when logged in */}
//         {user && (
//           <div className="navBar-pic-container group relative">
//             <img
//               className="navBar-pic"
//               src={user.photoURL || assets.profile_pic} // User's profile photo from Firebase or placeholder
//               alt="Profile"
//             />
//             <img
//               className="dropdown-icon"
//               src={assets.dropdown_icon}
//               alt="Dropdown Icon"
//             />

//             <div className="navBar-dropDownMenu-container">
//               <div className="navBar-dropDownMenu">
//                 <p
//                   onClick={() => {
//                     navigate("/dashboard"); // Redirect to the dashboard page
//                   }}
//                   className="hover:text-black cursor-pointer"
//                 >
//                   Dashboard
//                 </p>
//                 <p
//                   onClick={() => {
//                     navigate("/userprofile"); // Go to user profile
//                   }}
//                   className="hover:text-black cursor-pointer"
//                 >
//                   My Profile
//                 </p>
//                 <p
//                   onClick={() => {
//                     navigate("/appointments"); // Navigate to appointments
//                   }}
//                   className="hover:text-black cursor-pointer"
//                 >
//                   My Appointments
//                 </p>
//                 <p
//                   onClick={handleLogout} // Log out functionality
//                   className="hover:text-black cursor-pointer"
//                 >
//                   Logout
//                 </p>
//               </div>
//             </div>
//           </div>
//         )}

//         {/* Show Sign In button if the user is not logged in */}
//         {!user && (
//           <button
//             onClick={() => navigate("/login")}
//             className="navBar-btn navBar-signIn bg-red-500 hover:bg-red-600"
//           >
//             Sign In
//           </button>
//         )}
//       </div>
//     </div>
//   );
// };

// export default NavBar;
