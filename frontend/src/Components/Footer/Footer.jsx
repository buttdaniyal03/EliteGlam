import React from "react";
import { useNavigate } from "react-router-dom";
import { assets } from "../../assets/assets_frontend/assets";
import "./Footer.css";

const Footer = () => {
  const navigate = useNavigate();
  return (
    <div className="footer-container mt-5 md:mx-10">
      <div className="footer-content">
        {/* Left Section */}
        <div className="footer-inner">
          <img
            className="footer-logo"
            src={assets.logo}
            alt="Elite Glam Logo"
          />
          <p className="footer-description">
            Elite Glam is dedicated to providing the best in beauty and wellness
            services. From hair and skin care to wellness treatments, we ensure
            every experience is tailored to meet the unique needs of our
            clients. Book your appointments and manage your beauty routine all
            in one place with Elite Glam.
          </p>
        </div>

        {/* Mid Section */}
        <div>
          <h1 className="footer-title">Company</h1>
          <ul className="footer-links">
            <li
              onClick={() => {
                navigate("/about");
                window.scrollTo(0, 0);
              }}
            >
              About Us
            </li>
            <li
              onClick={() => {
                navigate("/contact");
                window.scrollTo(0, 0);
              }}
            >
              Contact Us
            </li>
            <li onClick={() => window.scrollTo(0, 0)}>Privacy Policy</li>
          </ul>
        </div>

        {/* Last Section */}
        <div>
          <h1 className="footer-title">Get in Touch</h1>
          <ul className="footer-contact">
            <li className="mb-2">Ph: (051) 4863363 </li>
            <li>Email: szabist-isb.edu.pk</li>
          </ul>
        </div>
      </div>

      {/* CopyRight Section */}
      <div>
        <hr className="footer-divider" />
        <p className="footer-copyright">
          Copyright 2024 © Elite Glam - All Rights Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
