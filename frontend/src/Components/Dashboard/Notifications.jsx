import React from "react";

const Notifications = () => {
  const notifications = [
    "Your appointment with Glam Hub is confirmed for 2024-11-15.",
    "New offers are available at Beauty Bliss.",
  ];

  return (
    <div className="bg-white shadow rounded-lg p-6">
      <h2 className="text-xl font-semibold mb-4">Notifications</h2>
      <ul className="space-y-2">
        {notifications.map((notification, index) => (
          <li key={index} className="text-gray-700">
            {notification}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Notifications;
