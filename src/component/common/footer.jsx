import React from "react";
import logo from "../../assets/Logo.png";

import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaEnvelope,
  FaPhoneAlt,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#000000] text-white py-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Left Section */}
        <div>
          <div className="mb-2">
            <img src={logo} className="h-10 " />
          </div>
          <p className="text-[13px] leading-6">
            Billionaire Auction is a global luxury platform combining auctions,
            buy-it-now sales, and a verified marketplace for exclusive cars,
            art, jewelry, antiques, real estate, and digital assets. Designed to
            deliver trust, transparency, and prestige — all in one place.
          </p>

          {/* Social Icons */}
          <div className="flex space-x-4 mt-4">
            <a href="#" className="hover:text-white transition">
              <FaFacebookF />
            </a>
            <a href="#" className="hover:text-white transition">
              <FaInstagram />
            </a>
            <a href="#" className="hover:text-white transition">
              <FaYoutube />
            </a>
          </div>
        </div>

        {/* Middle Section */}
        <div>
          <h3 className="text-[20px] font-bold mb-3 text-white">Links</h3>
          <ul className="space-y-2 text-[15px] font-medium">
            <li>
              <a href="#" className="hover:text-white transition">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition">
                About us How pixels sale work{" "}
              </a>
            </li>
          </ul>
        </div>

        {/* Right Section */}
        <div>
          <h3 className="text-[20px] font-bold mb-3 text-white">Contact Us</h3>
          <ul className="space-y-3 text-[15px] font-medium">
            <li className="flex items-center space-x-2">
              <FaEnvelope className="text-amber-500 text-white" />
              <a
                href="mailto:elite@billionaireauction.com"
                className="hover:text-white transition"
              >
                elite@billionaireauction.com
              </a>
            </li>
            <li className="flex items-center space-x-2 ">
              <FaPhoneAlt className="text-amber-500 text-white" />
              <span>+91 7731001879</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Divider */}
      <div className="max-w-7xl mx-auto border-t border-gray-500 mt-8 pt-4 flex flex-col sm:flex-row justify-between items-center text-center text-[14px] font-[400] gap-2">
        <p>
          © 2025 <span className="text-[#A96224] ">BillionaireAuction.com</span>
          . All rights reserved.
        </p>
        <a href="#" className="text-[#A96224] underline">
          Terms and Policy
        </a>
      </div>
    </footer>
  );
};

export default Footer;
