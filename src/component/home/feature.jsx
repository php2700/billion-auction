import React from "react";
import watch from "../../assets/new-watch.png";
import ferrari from "../../assets/car2.png";
import magrite from "../../assets/car1.png";
import diamond from "../../assets/diamond.png";
import { useNavigate } from "react-router-dom";

const listings = [
  {
    name: "Patek Philippe Nautilus",
    price: "$150,000",
    img: watch,
  },
  {
    name: "Rage Rover",
    price: "$3,500,000",
    img: ferrari,
  },
  {
    name: "René Magritte",
    price: "$180,722",
    img: magrite,
  },
  {
    name: "Diamond Necklace",
    price: "$20,000",
    img: diamond,
  },
];

const FeaturedListings = () => {
  const navigate = useNavigate();
  const handleView = () => {
    navigate("/default");
  };

  const handleOld = () => {
    window.open("https://oldweb.billionaireauction.com/", "_blank");
  };

  return (
    <section className="mt-8 px-4 lg:px-0">
      <div className="flex justify-between items-center mb-4">
        <div>
          <h2 className="text-3xl font-bold inline-block">Old Site</h2>
          <div className="w-16 h-[4px] bg-[#A96224] mt-1"></div>
        </div>
        <h2
          className="text-[15px] font-semibold text-blue-600 cursor-pointer"
          onClick={handleOld}
        >
          View
        </h2>
      </div>
      <div className="flex justify-between items-center mb-4">
        <div>
          <h2 className="text-3xl font-bold inline-block">Featured Listings</h2>
          <div className="w-16 h-[4px] bg-[#A96224] mt-1"></div>
        </div>
        <h2
          className="text-[15px] font-semibold text-blue-600 cursor-pointer"
          onClick={handleView}
        >
          View All
        </h2>
      </div>

      <div
        className="
          flex gap-4
          overflow-x-auto scroll-smooth
          snap-x snap-mandatory
          pb-4
          scrollbar-hide
          cursor-grab
        "
      >
        {listings.map((item, index) => (
          <div
            key={index}
            className="
              snap-center
              min-w-[70%] sm:min-w-[50%] md:min-w-[33%] lg:min-w-[24%]
              flex-shrink-0 rounded-lg text-center bg-white p-3 
              
            "
          >
            <div className="w-full flex items-center justify-center overflow-hidden rounded-md">
              <img
                src={item.img}
                alt={item.name}
                className="w-full h-64 md:h-72 object-cover"
              />
            </div>
            <h3 className="text-[15px] font-bold mt-3">{item.name}</h3>
            <p className="text-[15px] font-bold mt-1">{item.price}</p>

            <div className="flex justify-center gap-3 mt-3">
              <button
                onClick={handleView}
                className="flex-1 shadow-lg hover:text-blue-500 border border-gray-200 hover:border-blue-500 rounded text-[14px] md:text-base px-2 py-1 md:px-4 md:py-2 transition"
              >
                BID
              </button>
              <button
                onClick={handleView}
                className="flex-1 shadow-lg rounded text-[14px] md:text-base px-2 py-1 md:px-4 md:py-2 border border-gray-200 transition hover:text-blue-500 hover:border-blue-500"
              >
                BUY IT NOW
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedListings;
