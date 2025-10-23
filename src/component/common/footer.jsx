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
            <footer className="bg-[#3c3c3c] text-white py-10 px-6">
                  <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
                        {/* Left Section */}
                        <div>
                              <div className="mb-2">
                                    <img src={logo} className="h-10 " />
                              </div>
                              <p className="text-sm leading-6">
                                    BillionaireAuction.com is an exclusive
                                    digital ownership platform offering premium
                                    pixels for global brands, investors, and
                                    collectors. Each pixel is a permanent
                                    digital asset on our luxury-themed grid —
                                    providing visibility, prestige, and lifetime
                                    VIP access to future online and offline
                                    auctions.
                              </p>

                              {/* Social Icons */}
                              <div className="flex space-x-4 mt-4">
                                    <a
                                          href="#"
                                          className="hover:text-white transition"
                                    >
                                          <FaFacebookF />
                                    </a>
                                    <a
                                          href="#"
                                          className="hover:text-white transition"
                                    >
                                          <FaInstagram />
                                    </a>
                                    <a
                                          href="#"
                                          className="hover:text-white transition"
                                    >
                                          <FaYoutube />
                                    </a>
                              </div>
                        </div>

                        {/* Middle Section */}
                        <div>
                              <h3 className="text-lg font-semibold mb-3 text-white">
                                    Links
                              </h3>
                              <ul className="space-y-2 text-sm">
                                    <li>
                                          <a
                                                href="#"
                                                className="hover:text-white transition"
                                          >
                                                About Us
                                          </a>
                                    </li>
                                    <li>
                                          <a
                                                href="#"
                                                className="hover:text-white transition"
                                          >
                                                How it works?
                                          </a>
                                    </li>
                              </ul>
                        </div>

                        {/* Right Section */}
                        <div>
                              <h3 className="text-lg font-semibold mb-3 text-white">
                                    Contact Us
                              </h3>
                              <ul className="space-y-3 text-sm">
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
                  <div className="max-w-7xl mx-auto border-t border-gray-500 mt-8 pt-4 flex flex-col sm:flex-row justify-between items-center text-center text-sm gap-2">
                        <p>
                              © 2025{" "}
                              <span className="text-amber-500 font-medium">
                                    BillionaireAuction.com
                              </span>
                              . All rights reserved.
                        </p>
                        <a href="#" className="text-amber-500 hover:underline">
                              Terms and Policy
                        </a>
                  </div>
            </footer>
      );
};

export default Footer;
