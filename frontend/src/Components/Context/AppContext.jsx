// src/Components/Context/AppContextProvider.js
import React, { createContext } from "react";
import {
  clinicData,
  dermatologist,
  salons,
} from "../../assets/assets_frontend/assets";
import { ClinicProvider } from "./ClinicContext";
import { ProductProvider } from "./ProductContext";
import { SalonProvider } from "./SalonContext"; // Import SalonContext provider

export const AppContext = createContext();

const AppContextProvider = (props) => {
  const currencySymbol = "Rs"; // Define a shared value for currency

  const value = {
    dermatologist, // Shared data
    clinicData, // Shared clinic data
    currencySymbol, // Shared currency symbol
    salons, // Shared salon data
  };

  return (
    <AppContext.Provider value={value}>
      <ProductProvider>
        <SalonProvider>
          <ClinicProvider>{props.children}</ClinicProvider>
        </SalonProvider>
      </ProductProvider>
    </AppContext.Provider>
  );
};

export default AppContextProvider;
