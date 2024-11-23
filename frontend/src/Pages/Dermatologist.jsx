import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AppContext } from "../Components/Context/AppContext";

const Dermatologist = () => {
  const { speciality } = useParams();
  const [filterDoc, setFilterDoc] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { dermatologist } = useContext(AppContext);
  const navigate = useNavigate();

  const applyFilter = () => {
    try {
      if (speciality) {
        setFilterDoc(
          dermatologist.filter((doc) => doc.speciality === speciality)
        );
      } else {
        setFilterDoc(dermatologist);
      }
    } catch (err) {
      setError("Failed to load dermatologists.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (dermatologist && dermatologist.length > 0) {
      applyFilter();
    } else {
      setLoading(false);
      setError("No dermatologist data available.");
    }
  }, [dermatologist, speciality]);

  return (
    <div className="container mx-auto py-8">
      <h2 className="text-2xl font-medium mb-6 text-center">
        Browse through Skin Asthetic Clinics:
      </h2>

      {/* Loading and error state */}
      {loading ? (
        <p className="text-center">Loading dermatologists...</p>
      ) : error ? (
        <p className="text-center text-red-600">{error}</p>
      ) : (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {filterDoc.length > 0 ? (
            filterDoc.map((item, index) => (
              <div
                onClick={() => navigate(`/appointment/${item._id}`)}
                className="border border-blue-200 rounded-lg overflow-hidden shadow-md cursor-pointer transform transition duration-300 hover:-translate-y-1 hover:shadow-lg"
                key={index}
              >
                <img
                  src={item.clinicImg}
                  alt={`Clinic of ${item.name}`}
                  className="w-full h-48 object-cover bg-blue-100"
                />
                <div className="p-4">
                  <div className="flex items-center space-x-2 text-green-500 text-sm mb-2">
                    <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                    <span>Available</span>
                  </div>
                  <p className="font-semibold">{item.clinicName}</p>
                  <p className="text-gray-600 text-sm">{item.address}</p>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center col-span-full">
              No dermatologists found for the selected specialty.
            </p>
          )}
        </div>
      )}
    </div>
  );
};

export default Dermatologist;
