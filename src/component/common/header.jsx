import React, { useState } from "react";
import logo from "../../assets/logo.png";

const Header = () => {
      const [isOpen, setIsOpen] = useState(false);

      return (
            <nav className="bg-[#3c3c3c] text-white shadow-sm w-full">
                  <div className="w-full px-4 sm:px-6 lg:px-10 py-4 flex items-center justify-between">
                        <div>
                              <img src={logo} className="h-10 " />
                        </div>

                        {/* Desktop Menu */}
                        <div className="hidden lg:flex space-x-4 lg:space-x-6">
                              <button className="px-3 py-1 rounded-md text-md font-semibold hover:bg-gray-500">
                                    Home
                              </button>
                              <button className="px-3 py-1 rounded-md text-md font-semibold hover:bg-gray-500">
                                    About Us
                              </button>
                              <button className="px-3 py-1 rounded-md text-md font-semibold hover:bg-gray-500">
                                    How It Works
                              </button>
                              <button className="px-3 py-1 rounded-md text-md font-semibold hover:bg-gray-500">
                                    Auctions
                              </button>
                              <button className="px-3 py-1 rounded-md text-md font-semibold hover:bg-gray-500">
                                    Contact Us
                              </button>
                              <button className="bg-[#eca664] text-white px-3 py-1 rounded-md text-md font-semibold hover:bg-gray-800">
                                    Buy Pixels
                              </button>
                        </div>

                        {/* Mobile Menu Button */}
                        <div className="lg:hidden">
                              <button
                                    onClick={() => setIsOpen(!isOpen)}
                                    className="focus:outline-none"
                              >
                                    <svg
                                          className="w-6 h-6"
                                          fill="none"
                                          stroke="currentColor"
                                          viewBox="0 0 24 24"
                                          xmlns="http://www.w3.org/2000/svg"
                                    >
                                          {isOpen ? (
                                                <path
                                                      strokeLinecap="round"
                                                      strokeLinejoin="round"
                                                      strokeWidth="2"
                                                      d="M6 18L18 6M6 6l12 12"
                                                />
                                          ) : (
                                                <path
                                                      strokeLinecap="round"
                                                      strokeLinejoin="round"
                                                      strokeWidth="2"
                                                      d="M4 6h16M4 12h16M4 18h16"
                                                />
                                          )}
                                    </svg>
                              </button>
                        </div>
                  </div>

                  {/* Mobile Menu */}
                  {isOpen && (
                        <div className="lg:hidden px-4 pb-4 space-y-2 bg-white shadow-md w-full">
                              <button className="w-full text-left px-4 py-2 rounded-md text-md font-semibold hover:bg-gray-100">
                                    Home
                              </button>
                              <button className="w-full text-left px-4 py-2 rounded-md text-md font-semibold hover:bg-gray-100">
                                    About Us
                              </button>
                              <button className="w-full text-left px-4 py-2 rounded-md text-md font-semibold hover:bg-gray-100">
                                    How It Works
                              </button>
                              <button className="w-full text-left px-4 py-2 rounded-md text-md font-semibold hover:bg-gray-100">
                                    Auctions
                              </button>
                              <button className="w-full text-left px-4 py-2 rounded-md text-md font-semibold hover:bg-gray-100">
                                    Contact Us
                              </button>
                              <button className="w-full text-left bg-black text-white px-4 py-2 rounded-md text-md font-semibold hover:bg-gray-800">
                                    Buy Pixels
                              </button>
                        </div>
                  )}
            </nav>
      );
};

export default Header;
