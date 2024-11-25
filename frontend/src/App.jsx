import React from "react";
import { Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer/Footer";
import NavBar from "./Components/NavBar/NavBar";
import SalonDetails from "./Components/Salon/SalonDetails";
import About from "./Pages/About";
import Appointment from "./Pages/Appointment";
import Clinics from "./Pages/Clinics";
import Contact from "./Pages/Contact";
import CustomerDashboard from "./Pages/Dashboards/CustomerDashboard";
import Dermatologist from "./Pages/Dermatologist";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Products from "./Pages/Products";
import UserProfile from "./Pages/Profile/UserProfile";
import RegistrationPage from "./Pages/RegistrationPage";
import SalonPage from "./Pages/SalonPage";
import Appointments from "./components/Dashboard/Appointments";

const App = () => {
  return (
    <div className="mx-4 sm:mx-[10%]">
      <NavBar />
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/products" element={<Products />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registration" element={<RegistrationPage />} />

        {/* Salon and Clinics */}
        <Route path="/salon" element={<SalonPage />} />
        <Route path="/salon/:salonId" element={<SalonDetails />} />
        <Route path="/dermatologist" element={<Dermatologist />} />
        <Route path="/clinics" element={<Clinics />} />

        {/* Appointment Management */}
        <Route path="/appointment/:docId" element={<Appointment />} />
        <Route path="/appointments" element={<Appointments />} />

        {/* User Dashboard */}
        <Route path="/dashboard" element={<CustomerDashboard />} />
        <Route path="/userprofile" element={<UserProfile />} />
        {/* 
        <Route path="/reset-password" element={<ResetPassword />} /> */}

        {/* Future Extensions */}
        {/* Uncomment or add routes as needed */}
        {/* <Route path="/cart" element={<Cart />} /> */}
      </Routes>
      <Footer />
    </div>
  );
};

export default App;

// import React from "react";

// const App = () => {
//   return (
//     <div className="mx-4 sm:mx-[10%]">
//       <NavBar />
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/dermatologist" element={<Dermatologist />} />
//         <Route path="/clinic" element={<Clinics />} />
//         <Route path="/salon" element={<SalonPage />} />
//         <Route path="/salon/:salonId" element={<SalonDetails />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/dashboard" element={<DashboardPage />} />
//         <Route path="/registration" element={<RegistrationPage />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/contact" element={<Contact />} />
//         <Route path="/products" element={<Products />} />
//         <Route path="/my-profile" element={<MyProfile />} />
//         {/* <Route path="/cart" element={<Cart/>} */}
//         <Route path="/my-appointment" element={<MyAppointment />} />
//         <Route path="/appointment/:docId" element={<Appointment />} />
//       </Routes>
//       <Footer />
//     </div>
//   );
// };

// export default App;
