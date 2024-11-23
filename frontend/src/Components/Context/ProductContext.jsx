// src/Components/Context/ProductContext.js
import React, { createContext, useState } from "react";
import { productsData } from "../../assets/assets_frontend/assets"; // Adjust path as necessary

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState(productsData);

  return (
    <ProductContext.Provider value={{ products, setProducts }}>
      {children}
    </ProductContext.Provider>
  );
};
