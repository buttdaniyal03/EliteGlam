// src/Components/Context/ClinicsContext.jsx
import React, { createContext, useContext, useState } from "react";
import { clinicData } from "../../assets/assets_frontend/assets";

export const ClinicContext = createContext();

export const ClinicProvider = ({ children }) => {
  const [clinic, setClinic] = useState(clinicData); // Provide the clinics data to the context

  return (
    <ClinicContext.Provider value={{ clinic, setClinic }}>
      {children} {/* Make sure to return children here */}
    </ClinicContext.Provider>
  );
};

// Custom hook to use the ClinicContext
export const useClinics = () => {
  return useContext(ClinicContext);
};
