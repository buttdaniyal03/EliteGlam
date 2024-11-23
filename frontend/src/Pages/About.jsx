import React from "react";
import { assets } from "../assets/assets_frontend/assets";

const About = () => {
  return (
    <section className="text-l text-center pt-10 text-gray-500">
      <div className="text-gray-500 font-medium">
        <p className="text-3xl font-semibold text-gray-800 mb-4">About Us</p>
      </div>

      {/* About Us Section */}
      <div className="flex flex-col my-10 md:flex-row gap-12 items-center">
        <img
          src={assets.about_image}
          alt="About Us"
          className="w-full md:max-w-[360px] rounded-lg shadow-md"
        />
        <div className="flex flex-col md:w-2/3 gap-6 text-gray-600 text-left">
          <p>
            Welcome to Elite Glam, your trusted partner in managing your beauty
            and wellness needs conveniently and efficiently. At Elite Glam, we
            understand the challenges individuals face when it comes to
            scheduling salon appointments and managing self-care routines.
          </p>
          <p>
            Elite Glam is committed to excellence in beauty and wellness
            services. We continuously strive to enhance our platform,
            integrating the latest advancements to improve user experience and
            deliver superior service. Whether you’re booking your first
            appointment or managing ongoing care, Elite Glam is here to support
            you every step of the way.
          </p>
          <p className="text-gray-800 font-semibold ">Our Vision</p>
          <p>
            Our vision at Elite Glam is to create a seamless experience for
            every user. We aim to bridge the gap between clients and beauty
            professionals, making it easier for you to access the services you
            need, when you need them.
          </p>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="text-xl my-4">
        <p>
          Why <span className="text-gray-700 font-semibold">Choose Us</span>
        </p>

        <div className="flex flex-col md:flex-row gap-4 my-10">
          <div className="border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer rounded-lg shadow-md">
            <b className="text-xl font-semibold text-gray-800 mb-2">
              Efficiency
            </b>
            <p>
              Streamlined appointment scheduling that fits into your busy
              lifestyle.
            </p>
          </div>
          <div className="border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer rounded-lg shadow-md">
            <b className="text-xl font-semibold text-gray-800 mb-2">
              Convenience
            </b>
            <p>
              Access to a network of trusted beauty and wellness professionals
              in your area.
            </p>
          </div>
          <div className="border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer rounded-lg shadow-md">
            <b className="text-xl font-semibold text-gray-800 mb-2">
              Personalization
            </b>
            <p>
              Tailored recommendations and reminders to help you stay on top of
              your self-care.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
