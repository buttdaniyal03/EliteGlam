import React from "react";

const FavoriteSalons = () => {
  const favoriteSalons = [
    { id: 1, name: "Glam Hub", location: "Downtown" },
    { id: 2, name: "Beauty Bliss", location: "City Center" },
  ];

  return (
    <div className="bg-white shadow rounded-lg p-6">
      <h2 className="text-xl font-semibold mb-4">Favorite Salons</h2>
      <ul className="space-y-2">
        {favoriteSalons.map((salon) => (
          <li key={salon.id} className="text-gray-700">
            {salon.name} - {salon.location}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FavoriteSalons;
