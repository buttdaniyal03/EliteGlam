import React, { useState } from "react";
import Appointments from "../../components/Dashboard/Appointments";
import FavoriteSalons from "../../components/Dashboard/FavoriteSalons";
import Notifications from "../../Components/Dashboard/Notifications";
import Sidebar from "../../components/Sidebar/Sidebar";

const CustomerDashboard = () => {
  const [activeTab, setActiveTab] = useState("Appointments"); // Default tab

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Main Content */}
      <div className="flex-1 p-6 bg-gray-100">
        <h1 className="text-3xl font-bold mb-6">Welcome to Your Dashboard</h1>

        {/* Conditional Rendering Based on Sidebar Selection */}
        {activeTab === "Appointments" && <Appointments />}
        {activeTab === "FavoriteSalons" && <FavoriteSalons />}
        {activeTab === "Notifications" && <Notifications />}
      </div>
    </div>
  );
};

export default CustomerDashboard;
