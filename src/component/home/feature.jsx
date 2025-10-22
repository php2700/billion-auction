import React from "react";
import watch from "../../assets/watch.webp";
import ferrari from "../../assets/ferrari.jpg";
import magrite from "../../assets/Rene-Magritte.jpg";
import diamond from "../../assets/diamond.webp";

const listings = [
      {
            name: "Patek Philippe Nautilus",
            price: "$150,000",
            img: watch,
      },
      {
            name: "Ferrari LaFerrari",
            price: "$3,500,000",
            img: ferrari,
      },
      {
            name: "René Magritte",
            price: "$450,000",
            img: magrite,
      },
      {
            name: "Diamond Necklace",
            price: "$20,000",
            img: diamond,
      },
];

const FeaturedListings = () => {
      return (
            <section>
                  {/* Top navigation bar */}
                  <div className="border-y border-gray-200 bg-gray-50 px-4 sm:px-10">
                        <ul className="flex justify-between space-x-4 sm:space-x-6 text-md p-2 overflow-x-auto">
                              {[
                                    "Watches",
                                    "Cars",
                                    "Art",
                                    "Jewelry",
                                    "Fashion",
                                    "Collectibles",
                              ].map((item) => (
                                    <li
                                          key={item}
                                          className="cursor-pointer text-[#3c3c3c] text-md font-semibold hover:text-black whitespace-nowrap"
                                    >
                                          {item}
                                    </li>
                              ))}
                        </ul>
                  </div>

                  <h2 className="text-2xl text-white font-semibold my-4 px-4 sm:px-10">
                        Featured Listings
                  </h2>

                  {/* Image Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 px-4 sm:px-10">
                        {listings.map((item, index) => (
                              <div
                                    key={index}
                                    className=" rounded-lg  text-center transition-shadow"
                              >
                                    <div className="w-full h-64 sm:h-72 flex items-center justify-center overflow-hidden rounded-md bg-gray-100">
                                          <img
                                                src={item.img}
                                                alt={item.name}
                                                className="w-full h-full object-cover"
                                          />
                                    </div>
                                    <h3 className="text-md text-white font-medium mt-2">
                                          {item.name}
                                    </h3>
                                    <p className="text-md text-white">
                                          {item.price}
                                    </p>
                              </div>
                        ))}
                  </div>

                  <div className="flex flex-wrap justify-start mt-4 gap-8 px-10 sm:px-10">
                        <button className="bg-[#3c3c3c] text-white px-4 py-2 w-40 rounded-md hover:bg-gray-500 transition">
                              Auction
                        </button>
                        <button className="bg-[#3c3c3c] hover:bg-gray-500 px-4 py-2 rounded-md w-40 hover:bg-gray-200 transition">
                              Buy It Now
                        </button>
                        <button className="bg-[#3c3c3c] hover:bg-gray-500 text-white px-4 py-2 rounded-md w-40 hover:bg-gray-200 transition">
                              Marketplace
                        </button>
                  </div>
            </section>
      );
};

export default FeaturedListings;
