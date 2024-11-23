import React from "react";

const SalonStylists = ({ stylists }) => {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Our Stylists</h2>
      {stylists && stylists.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {stylists.map((stylist, index) => (
            <div
              key={index}
              className="bg-gray-100 p-4 rounded-lg shadow-md border border-gray-200"
            >
              <img
                src={stylist.profileImage}
                alt={stylist.name}
                className="w-full h-32 object-cover rounded-lg mb-3"
              />
              <h3 className="text-lg font-semibold">{stylist.name}</h3>
              <p className="text-gray-600">{stylist.specialty}</p>
              <p className="text-gray-600">
                Experience: {stylist.experience} years
              </p>
              <p className="text-yellow-500 font-bold">
                Rating: {stylist.rating} ⭐
              </p>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-gray-500">No stylists available.</p>
      )}
    </div>
  );
};

export default SalonStylists;
