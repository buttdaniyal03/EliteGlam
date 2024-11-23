import React from "react";
import { assets } from "../../assets/assets_frontend/assets";

const Review = () => {
  return (
    <section className="bg-gray-100 py-10">
      <h2 className="text-3xl font-semibold text-center text-gray-800 mb-10">
        Customers love us
      </h2>
      <div className="flex justify-center gap-8 overflow-x-auto">
        <div className="flex gap-4">
          <div className="w-40 h-40 rounded-full overflow-hidden shadow-lg">
            <img
              src={assets.keshav}
              alt="Customer Keshav"
              className="w-full h-full object-cover blur-[0.5px]"
            />
          </div>
          <div className="w-40 h-40 rounded-full overflow-hidden shadow-lg">
            <img
              src={assets.nixon}
              alt="Customer Nixon"
              className="w-full h-full object-cover blur-[0.5px]"
            />
          </div>
          <div className="w-40 h-40 rounded-full overflow-hidden shadow-lg">
            <img
              src={assets.vinod}
              alt="Customer Vinod"
              className="w-full h-full object-cover blur-[0.5px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Review;
