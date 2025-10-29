import React from "react";
import bag from "../../assets/bag.png";
import car from "../../assets/shop-car.png";
import house1 from "../../assets/house1.png";
import house2 from "../../assets/house2.png";
import house3 from "../../assets/house3.png";
import house4 from "../../assets/house4.png";
import necklace from "../../assets/shop-neclace.png";
import watch from "../../assets/up-watch.png";
import { useNavigate } from "react-router-dom";

const listings = [
  {
    name: "Luxury Mansion, New York",
    price: "9,79,231.26 USD",
    date: "26 January 2026 | India",
    img: house1,
  },
  {
    name: "The House, Paris",
    price: "9,79,231.26 USD",
    date: "26 January 2026 | India",
    img: house2,
  },
  {
    name: "Thiruvananthapuram, India",
    price: "9,79,231.26 USD",
    date: "26 January 2026 | India",
    img: house3,
  },
  {
    name: "Beach House, Srilanka",
    price: "9,79,231.26 USD",
    date: "26 January 2026 | India",
    img: house4,
  },
];

const Discover = () => {
  const navigate = useNavigate();
  const handleView = () => {
    navigate("/default");
  };
  return (
    <section className="relative my-6 container mx-auto px-4">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <div>
          <h2 className="text-3xl font-bold inline-block">
            Discover Our Worldwide Luxury Houses
          </h2>
          <div className="w-16 h-[4px] bg-[#A96224] mt-1"></div>
        </div>
        <h2
          onClick={handleView}
          className="text-[15px] font-semibold text-blue-600 cursor-pointer hover:underline"
        >
          VIEW ALL
        </h2>
      </div>

      {/* Desktop grid (only visible on xl and up) */}
      <div className="hidden xl:grid grid-cols-4 gap-6">
        {listings.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-sm hover:shadow-lg transition"
          >
            <div
              onClick={handleView}
              className="relative w-full overflow-hidden rounded-md"
            >
              <img
                src={item.img}
                alt={item.name}
                className="w-full h-[260px] object-cover"
              />
            </div>
            <div className="px-4 py-3 text-start">
              <h3 className="text-[18px] font-semibold">{item.name}</h3>
              <p className="text-[15px] font-bold text-gray-800 mt-1">
                {item.price}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Slider on lg and below */}
      <div
        className="
          flex xl:hidden gap-5
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
              min-w-[75%] sm:min-w-[55%] md:min-w-[40%] lg:min-w-[28%]
              flex-shrink-0 bg-white rounded-lg shadow-sm hover:shadow-md transition
            "
          >
            <div className="relative w-full flex items-center justify-center overflow-hidden rounded-t-md"  onClick={handleView}>
              <img
                src={item.img}
                alt={item.name}
                className="w-full h-64 md:h-72 object-cover"
              />
            </div>

            <div className="px-4 py-3 text-start">
              <h3 className="text-[18px] font-semibold break-words">
                {item.name}
              </h3>
              <p className="text-[15px] font-bold text-gray-800 mt-1">
                {item.price}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Discover;
