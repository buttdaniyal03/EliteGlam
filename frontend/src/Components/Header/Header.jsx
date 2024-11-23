import React from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { assets } from "../../assets/assets_frontend/assets";
// import "./header.css";

const Header = () => {
  return (
    <div className="header-container">
      <Swiper
        modules={[Navigation, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 4000 }}
        navigation={false}
      >
        <SwiperSlide>
          <div className="relative w-full h-screen flex flex-col sm:flex-row items-center justify-between px-6 lg:px-20">
            <div
              className="header-left max-w-lg text-left text-white z-10"
              style={{
                backgroundColor: "rgba(0,0,0,0.5)",
                borderRadius: "8px",
                padding: "16px",
              }}
            >
              <p className="header-title text-3xl sm:text-4xl font-bold leading-tight mb-4">
                Get Ready To Glow <br className="hidden sm:block p-2" />
                Book Instant Appointments <br className="hidden sm:block" />
                At Salons.
              </p>
              <a
                href="./salon"
                className="header-button inline-flex items-center mt-4 px-5 py-3 bg-red-500 hover:bg-red-600 text-white font-medium text-sm rounded transition duration-200"
              >
                Book Appointment
                <img
                  className="ml-2 w-4 h-4"
                  src={assets.arrow_icon}
                  alt="arrow icon"
                />
              </a>
            </div>
            <div
              className="header-right absolute inset-0 w-full h-full bg-cover bg-center flex items-center justify-center z-0"
              style={{
                backgroundImage: `url(${assets.header_img2})`,
                minHeight: "600px",
                filter: "blur(5px)",
              }}
            ></div>
          </div>
        </SwiperSlide>

        {/* Slider 2 Derma */}
        <SwiperSlide>
          <div className="relative w-full h-screen flex flex-col sm:flex-row items-center justify-between px-6 lg:px-20">
            {/* Left Content */}
            <div
              className="header-left max-w-lg text-left text-white z-10"
              style={{
                backgroundColor: "rgba(0, 0, 0, 0.5)",
                borderRadius: "8px",
                padding: "16px",
              }}
            >
              <p className="header-title text-3xl sm:text-4xl font-bold leading-tight mb-4">
                Transform Your Skin
                <br className="hidden sm:block" />
                Consult With Certified Dermatologist Today!
                <br className="hidden sm:block" />
              </p>
              <div className="header-subtitle flex items-center gap-4 mb-4">
                <p className="text-sm sm:text-base">
                  Trusted specialists for your skincare needs. <br />
                  Book an appointment easily.
                </p>
              </div>
              <a
                href="./dermatologist"
                className="header-button inline-flex items-center px-5 py-3 bg-red-500 hover:bg-red-600 text-white font-medium text-sm rounded transition duration-200"
              >
                Book Now
              </a>
            </div>

            {/* Right Image */}
            <div
              className="header-right absolute inset-0 w-full h-full bg-cover bg-center flex items-center justify-center z-0"
              style={{
                backgroundImage: `url(${assets.header_img4})`,
                filter: "blur(5px)",
              }}
            ></div>
          </div>
        </SwiperSlide>

        {/* slider 3 Products  */}
        <SwiperSlide>
          <div className="relative w-full h-screen flex flex-col sm:flex-row items-center justify-between px-6 lg:px-20">
            {/* Left Content */}
            <div
              className="header-left max-w-lg text-left text-white z-10"
              style={{
                backgroundColor: "rgba(0, 0, 0, 0.5)",
                borderRadius: "8px",
                padding: "16px",
              }}
            >
              <p className="header-title text-3xl sm:text-4xl font-bold leading-tight mb-4">
                Trusted by Dermatologist,
                <br className="hidden sm:block" />
                Loved by you !
                <br className="hidden sm:block" />
                Shop recommended products now!
              </p>

              <a
                href="./products"
                className="header-button inline-flex items-center px-5 py-3 bg-red-500 hover:bg-red-600 text-white font-medium text-sm rounded transition duration-200"
              >
                Buy Now
              </a>
            </div>

            {/* Right Image */}
            <div
              className="header-right absolute inset-0 w-full h-full bg-cover bg-center flex items-center justify-center z-0"
              style={{
                backgroundImage: `url(${assets.header_img3})`,
                filter: "blur(3px)",
              }}
            ></div>
          </div>
        </SwiperSlide>

        {/* Slide 4 Bussiness */}
        <SwiperSlide>
          <div className="relative w-full h-screen flex flex-col sm:flex-row items-center justify-between px-6 lg:px-20">
            {/* Left Content */}
            <div
              className="header-left max-w-lg text-left text-white z-10"
              style={{
                backgroundColor: "rgba(0, 0, 0, 0.5)",
                borderRadius: "8px",
                padding: "16px",
              }}
            >
              <p className="header-title text-3xl sm:text-4xl font-bold leading-tight mb-4">
                Join the Beauty Revolution
                <br className="hidden sm:block" />
                Register Your Salons & Clinics Now
              </p>

              <p className="text-sm sm:text-base pb-4">
                Get Discovered by Thousands of Potential Customers
              </p>

              <a
                href="./registration"
                className="header-button inline-flex items-center px-5 py-3 bg-red-500 hover:bg-red-600 text-white font-medium text-sm rounded transition duration-200"
              >
                Register Yourself
                <img
                  className="ml-2 w-4 h-4"
                  src={assets.arrow_icon}
                  alt="arrow icon"
                />
              </a>
            </div>

            {/* Right Image */}
            <div
              className="header-right absolute inset-0 w-full h-full bg-cover bg-center flex items-center justify-center z-0"
              style={{
                backgroundImage: `url(${assets.header_img})`,
                filter: "blur(5px)",
              }}
            ></div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Header;
