import React from "react";
import { useNavigate } from "react-router-dom";
import { assets } from "../../assets/assets_frontend/assets";
import "./Banner.css";

const Banner = () => {
  const navigate = useNavigate();

  return (
    <div className="banner-container bg-red-500">
      {/* Left Side */}
      <div className="banner-content">
        <h1 className="banner-title banner-title-lg">
          Get official , Get noticed !
          <br /> Register Your Business Today.!
        </h1>
        <button
          onClick={() => {
            navigate("/registration");
            scrollTo(0, 0);
          }}
          className="banner-button"
        >
          Get Registered
        </button>
      </div>

      {/* Right Side */}
      <div className="banner-image-container">
        <img
          className="banner-image"
          src={assets.appointment_img}
          alt="Appointment"
        />
      </div>
    </div>
  );
};

export default Banner;
