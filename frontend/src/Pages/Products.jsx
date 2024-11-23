import React, { useContext, useState } from "react";
import { AppContext } from "../Components/Context/AppContext";
import { ProductContext } from "../Components/Context/ProductContext";

const Products = () => {
  const { products } = useContext(ProductContext);
  const { currencySymbol } = useContext(AppContext);
  const [cart, setCart] = useState([]); // State to hold cart items
  const [selectedProduct, setSelectedProduct] = useState(null); // State to hold the currently selected product

  if (!products) {
    return <p>Loading products...</p>;
  }

  const addToCart = (product) => {
    setCart([...cart, product]); // Add product to cart
    alert(`${product.name} has been added to your cart!`); // Alert the user
  };

  const handleProductClick = (product) => {
    setSelectedProduct(selectedProduct === product ? null : product); // Toggle the selected product
  };

  return (
    <div className="container mx-auto p-5">
      <h1 className="text-2xl font-medium mb-3 text-center">
        Dermatological Products
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {products.length > 0 ? (
          products.map((product) => (
            <div
              key={product.id}
              className="border rounded-lg shadow-lg transform transition duration-300 hover:-translate-y-2 hover:shadow-2xl" // Added hover effect
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover mb-3"
                onClick={() => handleProductClick(product)} // Click to show details
              />
              <div className="px-3 pb-3">
                <h2 className="text-xl font-semibold">{product.name}</h2>
                <p className="text-lg font-bold mt-2">
                  {product.price} {currencySymbol}
                </p>
                <button
                  className="bg-blue-500 text-white py-2 px-4 rounded mt-3"
                  onClick={() => addToCart(product)} // Add to cart functionality
                >
                  Add to Cart
                </button>
              </div>

              {selectedProduct === product && ( // Show details if this product is selected
                <div className="mt-3 border-t pt-2">
                  <h3 className="font-bold">Description:</h3>
                  <p>{product.description}</p>
                  <h3 className="font-bold mt-2">Usage:</h3>
                  <p>{product.usage}</p>
                </div>
              )}
            </div>
          ))
        ) : (
          <p>No products available at the moment.</p>
        )}
      </div>
    </div>
  );
};

export default Products;
