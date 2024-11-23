import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSalons } from "../Context/SalonContext";
import SalonReviews from "./SalonReviews";
import SalonServices from "./SalonServices";
import SalonStylists from "./SalonStylists";

const SalonDetails = () => {
  const { salonId } = useParams(); // Extract salonId from the URL
  const { salons } = useSalons(); // Access salon data from context
  const [selectedSalon, setSelectedSalon] = useState(null);
  const [activeTab, setActiveTab] = useState("services"); // Track the active tab

  useEffect(() => {
    if (salons && salons.length > 0) {
      const salon = salons.find((s) => s.salonId === salonId);
      setSelectedSalon(salon);
    }
  }, [salons, salonId]);

  if (!selectedSalon) {
    return <p className="text-center mt-10">Loading...</p>;
  }

  return (
    <div className="max-w-4xl mx-auto mt-10 p-6 bg-white shadow-md rounded-lg">
      {/* Salon Information */}
      <h1 className="text-3xl font-bold mb-4">{selectedSalon.salonName}</h1>
      <p className="text-gray-700 mb-3">{selectedSalon.salonAddress}</p>
      <p className="text-gray-800 mb-3">
        Rating:{" "}
        <span className="text-yellow-500 font-bold">
          {selectedSalon.rating} ⭐
        </span>
      </p>
      <p className="text-gray-600 mb-3">
        Contact: {selectedSalon.contactNumber}
      </p>

      {/* Tab Navigation */}
      <div className="mt-6">
        <div className="flex justify-between border-b mb-4">
          <button
            className={`px-4 py-2 ${
              activeTab === "services"
                ? "border-b-2 border-red-500 font-semibold"
                : ""
            }`}
            onClick={() => setActiveTab("services")}
          >
            Services
          </button>
          <button
            className={`px-4 py-2 ${
              activeTab === "reviews"
                ? "border-b-2 border-red-500 font-semibold"
                : ""
            }`}
            onClick={() => setActiveTab("reviews")}
          >
            Reviews
          </button>
          <button
            className={`px-4 py-2 ${
              activeTab === "stylists"
                ? "border-b-2 border-red-500 font-semibold"
                : ""
            }`}
            onClick={() => setActiveTab("stylists")}
          >
            Stylists
          </button>
        </div>

        {/* Tab Content */}
        {activeTab === "services" && (
          <SalonServices services={selectedSalon.services} />
        )}
        {activeTab === "reviews" && (
          <SalonReviews reviews={selectedSalon.reviews} />
        )}
        {activeTab === "stylists" && (
          <SalonStylists stylists={selectedSalon.stylists} />
        )}
      </div>
    </div>
  );
};

export default SalonDetails;
