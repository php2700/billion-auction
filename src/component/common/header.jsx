// import React, { useState } from "react";
// import logo from "../../assets/Logo.png";

// const Header = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <nav className=" bg-[#000000] text-white shadow-sm w-full">
//       <div className="w-full px-4 sm:px-6 lg:px-10 py-4 flex items-center justify-between">
//         <div>
//           <img src={logo} className="h-10 " />
//         </div>

//         {/* Desktop Menu */}
//         <div className="hidden lg:flex space-x-4 lg:space-x-6">
//           <button className="px-3 py-1 rounded-md text-md font-semibold hover:bg-gray-500">
//             Home
//           </button>
//           <button className="px-3 py-1 rounded-md text-md font-semibold hover:bg-gray-500">
//             About Us
//           </button>
//           <button className="px-3 py-1 rounded-md text-md font-semibold hover:bg-gray-500">
//             How Pixel Sale Work
//           </button>
//           <button className="px-3 py-1 rounded-md text-md font-semibold hover:bg-gray-500">
//             Pixel's Sale
//           </button>
//           <button className="px-3 py-1 rounded-md text-md font-semibold hover:bg-gray-500">
//             Contact Us
//           </button>
//           <button className="bg-[#eca664] text-white px-3 py-1 rounded-md text-md font-semibold hover:bg-gray-800">
//             Login
//           </button>
//         </div>

//         {/* Mobile Menu Button */}
//         <div className="lg:hidden">
//           <button
//             onClick={() => setIsOpen(!isOpen)}
//             className="focus:outline-none"
//           >
//             <svg
//               className="w-6 h-6"
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               {isOpen ? (
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth="2"
//                   d="M6 18L18 6M6 6l12 12"
//                 />
//               ) : (
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth="2"
//                   d="M4 6h16M4 12h16M4 18h16"
//                 />
//               )}
//             </svg>
//           </button>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       {isOpen && (
//         <div className="lg:hidden px-4 pb-4 space-y-2 bg-white shadow-md w-full">
//           <button className="w-full text-left px-4 py-2 rounded-md text-md font-semibold hover:bg-gray-100">
//             Home
//           </button>
//           <button className="w-full text-left px-4 py-2 rounded-md text-md font-semibold hover:bg-gray-100">
//             About Us
//           </button>
//           <button className="w-full text-left px-4 py-2 rounded-md text-md font-semibold hover:bg-gray-100">
//             How Pixel Sale Work
//           </button>
//           <button className="w-full text-left px-4 py-2 rounded-md text-md font-semibold hover:bg-gray-100">
//             Pixel's Sale
//           </button>
//           <button className="w-full text-left px-4 py-2 rounded-md text-md font-semibold hover:bg-gray-100">
//             Contact Us
//           </button>
//           <button className="w-full text-left bg-black text-white px-4 py-2 rounded-md text-md font-semibold hover:bg-gray-800">
//             Login
//           </button>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Header;

import React, { useState } from "react";
import { FiSearch, FiHeart, FiShoppingBag, FiMenu, FiX } from "react-icons/fi";
import logo from "../../assets/Logo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const topLinks = [
    "LOG IN",
    "HOME",
    "ABOUT US",
    "HOW PIXEL SALE WORK",
    "PIXEL'S SALE",
    "CONTACT US",
  ];

  const navLinks = [
    "AUCTIONS",
    "BUY IT NOW",
    "MARKETPLACE",
    
  ];

  const categories = [
    "Real Estate",
    "Cars",
    "Arts",
    "Jewellery",
    "Watches",
    "Collectibles",
    "ANTIQUES",
    "DIGITAL",
  ];

  return (
    <header className="w-full bg-white border-b border-gray-200">
      {/* --- Top Row (Desktop Only) --- */}
      <div className="hidden lg:block border-b border-gray-100 text-[13px] font-medium">
        <div className="container mx-auto flex justify-end items-center gap-8 px-6 py-2 text-gray-700">
          {topLinks.map((item) => (
            <a key={item} href="#" className="hover:text-black font-semibold">
              {item}
            </a>
          ))}
        </div>
      </div>

     
      <div className="container mx-auto flex justify-between items-center px-4 md:px-10 py-3 gap-4">
       
        <div className="flex items-center space-x-6">
          <img src={logo} alt="Logo" className="h-10 w-auto object-contain" />

          <div className="hidden lg:flex space-x-6 font-semibold text-[14px] text-gray-800">
            {navLinks.map((item) => (
              <a key={item} href="#" className="hover:text-black">
                {item}
              </a>
            ))}
          </div>
        </div>

        {/* Right: Search + Icons + Menu */}
        <div className="flex items-center gap-6">
          {/* Search Input (Desktop) */}
          <div className="hidden lg:flex items-center border border-gray-300 rounded-md px-3 py-2 w-64">
            <input
              type="text"
              placeholder="Search billionaire"
              className="w-full text-sm text-gray-700 placeholder-gray-400 outline-none"
            />
            <FiSearch className="text-gray-500 text-lg" />
          </div>

          {/* Search Icon (Mobile) */}
          <FiSearch className="lg:hidden text-2xl text-gray-800 hover:text-black cursor-pointer" />

          {/* Icons */}
          <FiHeart className="text-2xl text-gray-800 hover:text-black cursor-pointer" />
          <FiShoppingBag className="text-2xl text-gray-800 hover:text-black cursor-pointer" />

          {/* Menu Icon (lg and below) */}
          <button
            className="lg:hidden text-2xl text-gray-800 hover:text-black"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      {/* --- Bottom Row (Desktop Only) --- */}
      <div className="hidden lg:block bg-gray-50 border-t border-gray-200">
        <div className="container mx-auto px-6 py-2 overflow-x-auto no-scrollbar">
          <ul className="flex justify-between space-x-4 text-sm font-medium">
            {categories.map((item) => (
              <li
                key={item}
                className={`cursor-pointer px-5 py-2 rounded-xl border 
                ${
                  item === "Jewellery"
                    ? "border-blue-700 text-blue-700 shadow-sm"
                    : "border-gray-300 text-gray-700 hover:border-blue-700 hover:text-blue-700"
                } 
                transition-all duration-200 whitespace-nowrap bg-white`}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* --- Mobile Menu (lg and below) --- */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200 shadow-lg p-4">
          <div className="flex flex-row items-start justify-evenly gap-6 overflow-x-auto no-scrollbar">
            {/* Column 1: Top Links */}
            <div className="flex flex-col gap-3 text-gray-700 font-medium min-w-[150px]">
              {topLinks.map((item) => (
                <a
                  key={item}
                  href="#"
                  className="hover:text-blue-700 whitespace-nowrap"
                >
                  {item}
                </a>
              ))}
            </div>

            {/* Column 2: Nav Links */}
            <div className="flex flex-col gap-3 text-gray-700 font-medium min-w-[150px] border-l pl-4">
              {navLinks.map((item) => (
                <a
                  key={item}
                  href="#"
                  className="hover:text-blue-700 whitespace-nowrap"
                >
                  {item}
                </a>
              ))}
            </div>

            {/* Column 3: Categories */}
            <div className="flex flex-col gap-3 text-gray-700 font-medium min-w-[150px] border-l pl-4">
              {categories.map((item) => (
                <span
                  key={item}
                  className="hover:text-blue-700 cursor-pointer whitespace-nowrap"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
