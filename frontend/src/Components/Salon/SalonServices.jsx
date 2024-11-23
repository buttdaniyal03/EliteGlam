import React from "react";

const SalonServices = ({ services }) => {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Available Services</h2>
      {services && services.length > 0 ? (
        services.map((service, index) => (
          <div key={index} className="mb-4">
            <img
              src={service.image}
              alt={service.serviceName}
              className="w-full h-40 object-cover rounded-lg mb-2"
            />
            <p className="text-lg font-medium">{service.serviceName}</p>
            <p className="text-gray-600">{service.description}</p>
            <p className="font-semibold text-gray-900">
              Price: Rs {service.price}
            </p>
          </div>
        ))
      ) : (
        <p className="text-gray-500">No services available.</p>
      )}
    </div>
  );
};

export default SalonServices;
