import React from "react";

const Sidebar = ({ activeTab, setActiveTab }) => {
  const menuItems = [
    { name: "Appointments", label: "Appointments" },
    { name: "FavoriteSalons", label: "Favorite Salons" },
    { name: "Notifications", label: "Notifications" },
  ];

  return (
    <div className="w-1/4 bg-gray-800 text-white p-6">
      <ul className="space-y-4">
        {menuItems.map((item) => (
          <li
            key={item.name}
            onClick={() => setActiveTab(item.name)}
            className={`cursor-pointer px-4 py-2 rounded ${
              activeTab === item.name
                ? "bg-red-500 text-white"
                : "hover:bg-gray-700"
            }`}
          >
            {item.label}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
