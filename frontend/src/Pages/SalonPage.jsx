import React from "react";
import { useNavigate } from "react-router-dom";
import { useSalons } from "../Components/Context/SalonContext"; // Import SalonContext hook

const SalonPage = () => {
  const { salons } = useSalons(); // Access salons data
  const navigate = useNavigate();

  return (
    <div className="max-w-7xl mx-auto px-6">
      <h1 className="text-2xl font-bold mb-8 text-center text-gray-800">
        Explore Our Salons
      </h1>

      {/* Salon Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {salons.map((salon) => (
          <div
            key={salon.salonId}
            className="bg-white shadow-md p-4 rounded-lg hover:shadow-xl transition duration-300 cursor-pointer"
            onClick={() => navigate(`/salon/${salon.salonId}`)}
          >
            <img
              src={salon.images}
              alt={salon.salonName}
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h2 className="text-xl font-semibold mb-2 text-gray-900">
              {salon.salonName}
            </h2>
            <p className="text-gray-600">{salon.salonAddress}</p>
            <p className="text-gray-800 mt-2">
              Rating:{" "}
              <span className="text-yellow-500 font-bold">
                {salon.rating} ⭐
              </span>
            </p>
            <p className="text-gray-500 text-sm mt-1">
              Contact: {salon.contactNumber}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SalonPage;
