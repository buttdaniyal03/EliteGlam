import React from "react";
import { assets } from "../assets/assets_frontend/assets";

const Contact = () => {
  return (
    <div>
      <div className="text-center text-2xl pt-10 text-gray-500">
        <p>
          CONTACT <span className="text-gray-700 font-semibold">US</span>
        </p>
      </div>

      <div className="my-10 flex flex-col justify-center md:flex-row gap-10 mb-28 text-sm">
        <img
          className="w-full md:max-w-[360px]"
          src={assets.contact_image}
          alt="Contact"
        />

        <div className="flex flex-col justify-center items-start gap-6">
          <p className="font-semibold text-lg text-gray-600">Our OFFICE</p>
          <p className="text-gray-500">
            Street # 09, Plot # 67 <br /> Sector H-8/4, Islamabad, 44000
          </p>
          <p className="text-gray-500 flex">
            Email: szabist-isb.edu.pk <br /> Ph: (051) 4863363 <br />
          </p>
          <p className="font-semibold text-lg text-gray-600">Elite Glam</p>
          <p className="text-gray-500">
            Learn more about our teams and job openings.
          </p>
          <button className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">
            Explore Jobs
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
