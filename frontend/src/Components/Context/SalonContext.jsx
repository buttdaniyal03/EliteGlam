// SalonContext.js
import React, { createContext, useContext, useState } from "react";
import { salons } from "../../assets/assets_frontend/assets"; // Make sure the path is correct

const SalonContext = createContext();

export const SalonProvider = ({ children }) => {
  const [salonsData, setSalonsData] = useState(salons); // Use a more descriptive name like 'salonsData'

  return (
    <SalonContext.Provider value={{ salons: salonsData, setSalonsData }}>
      {children}
    </SalonContext.Provider>
  );
};

export const useSalons = () => useContext(SalonContext);
