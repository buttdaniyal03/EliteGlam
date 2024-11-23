import React from "react";
import { useNavigate } from "react-router-dom";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { assets } from "../../assets/assets_frontend/assets";

const TopDoctor = () => {
  const navigate = useNavigate();

  return (
    <div className="text-center p-8 bg-gray-100">
      <h1 className="text-3xl font-bold text-gray-800 mb-3 pb-2">
        Our Clients
      </h1>
      <div className="max-w-5xl mx-auto">
        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={0}
          slidesPerView={3}
          loop={true}
          autoplay={{ delay: 2000 }}
          navigation={false}
        >
          <SwiperSlide>
            <div className="flex justify-center items-center bg-white p-4 rounded-lg shadow-md transition-transform duration-300 hover:scale-105">
              <img
                src={assets.partner_1}
                alt="Partner 1"
                className="rounded-lg "
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex justify-center items-center bg-white p-4 rounded-lg shadow-md transition-transform duration-300 hover:scale-105">
              <img
                src={assets.partner_2}
                alt="Partner 2"
                className="rounded-lg"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex justify-center items-center bg-white p-4 rounded-lg shadow-md transition-transform duration-300 hover:scale-105">
              <img
                src={assets.partner_3}
                alt="Partner 3"
                className="rounded-lg"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex justify-center items-center bg-white p-4 rounded-lg shadow-md transition-transform duration-300 hover:scale-105">
              <img
                src={assets.partner_4}
                alt="Partner 4"
                className="rounded-lg"
              />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      {/* <button
        onClick={() => {
          // navigate("/dermatologist");
          window.scrollTo(0, 0);
        }}
        className="bg-blue-50 text-gray-500 px-12 py-3 rounded-full mt-1 bg-red-500 text-white mt-2"
      >
        More
      </button> */}
    </div>
  );
};

export default TopDoctor;
