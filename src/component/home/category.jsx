import React from "react";
import bag from "../../assets/bag.png";
import car from "../../assets/shop-car.png";
import necklace from "../../assets/shop-neclace.png";
import watch from "../../assets/richar.jpg";

import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const listings = [
  {
    name: "Handbags",
    price: "$250,000",
    date: "26 January 2026 | India",
    img: bag,
  },
  {
    name: "Watches",
    price: "$40,000",
    date: "26 January 2026 | India",
    img: watch,
  },
  {
    name: "Cars",
    price: "$1,250,000",
    img: car,
    date: "26 January 2026 | India",
  },
  {
    name: "Jewellery",
    price: "$820,000",
    img: necklace,
    date: "26 January 2026 | India",
  },
];

const ShopByCategory = () => {
  return (
    <section className="relative mt-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <div>
          <h2 className="text-3xl font-bold inline-block">Shop by Category</h2>
          <div className="w-16 h-[4px] bg-[#A96224] mt-1"></div>
        </div>
        <h2 className="text-[15px] font-semibold text-blue-600 cursor-pointer hover:underline">
          VIEW ALL
        </h2>
      </div>

      {/* Slider (on lg and below) */}
      <div
        className="
          flex gap-4
          overflow-x-auto scroll-smooth
          snap-x snap-mandatory
          pb-4
          scrollbar-hide
          cursor-grab
          lg:pb-6
        "
      >
        {listings.map((item, index) => (
          <div
            key={index}
            className="
              snap-center
              min-w-[70%] sm:min-w-[50%] md:min-w-[33%] lg:min-w-[24%]
              flex-shrink-0 bg-white rounded-lg
            "
          >
            <div className="relative w-full  flex items-center justify-center overflow-hidden rounded-t-lg">
              <img
                src={item.img}
                alt={item.name}
                className="w-full h-64 md:h-72 object-cover"
              />
            </div>

            <div className="px-4 py-3 text-start">
              <h3 className="text-[18px] font-semibold">{item.name}</h3>
              <p className="text-[14px] text-gray-500">{item.date}</p>
              <p className="text-[15px] font-bold mt-1 text-gray-800">
                {item.price}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ShopByCategory;
