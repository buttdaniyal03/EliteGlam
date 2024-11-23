import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useClinics } from "../Components/Context/ClinicContext";

const Clinics = () => {
  const { clinicId } = useParams(); // Get clinicId from URL params
  const [selectedClinic, setSelectedClinic] = useState(null); // State for selected clinic
  const [loading, setLoading] = useState(true); // Loading state
  const { clinics } = useClinics(); // Access clinics from ClinicsContext
  const navigate = useNavigate();

  useEffect(() => {
    console.log("Clinics data:", clinics); // Check if clinics data is available
    if (clinics && clinics.length > 0) {
      const clinic = clinics.find((c) => c.clinicId === clinicId);
      setSelectedClinic(clinic);
      console.log("Selected clinic:", clinic); // Verify selected clinic
    } else {
      console.log("No clinics available."); // Log if no clinics are found
    }
    setLoading(false); // Stop loading after attempting to find the clinic
  }, [clinics, clinicId]);

  return (
    <div>
      <p className="text-2xl font-medium mb-3 text-center">
        Browse through Dermatology Clinics:
      </p>

      {/* Loading state */}
      {loading ? (
        <p>Loading clinics...</p>
      ) : clinics && clinics.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {clinics.map((clinic) => (
            <div
              className="clinic-card border p-4 rounded shadow hover:shadow-lg transition cursor-pointer"
              onClick={() => navigate(`/clinic/${clinic.clinicId}`)} // Navigate to each clinic's detail page
              key={clinic.clinicId}
            >
              <h2 className="text-xl font-semibold mb-2">
                {clinic.clinicName}
              </h2>
              <p className="text-sm text-gray-600">{clinic.clinicAddress}</p>
            </div>
          ))}
        </div>
      ) : (
        <p>No clinics available.</p>
      )}
    </div>
  );
};

export default Clinics;
