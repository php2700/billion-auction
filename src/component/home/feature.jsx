import React from "react";
import watch from "../../assets/new-watch.png";
import ferrari from "../../assets/car2.png";
import magrite from "../../assets/car1.png";
import diamond from "../../assets/diamond.png";

const listings = [
  {
    name: "Patek Philippe Nautilus",
    price: "$150,000",
    img: watch,
    bid: "BId",
    buy: "BUT IT NOW",
  },
  {
    name: "Ferrari LaFerrari",
    price: "$3,500,000",
    img: ferrari,
    bid: "BId",
    buy: "BUT IT NOW",
  },
  {
    name: "René Magritte",
    price: "$180,722",
    img: magrite,
    bid: "BId",
    buy: "BUT IT NOW",
  },
  {
    name: "Diamond Necklace",
    price: "$20,000",
    img: diamond,
    bid: "BId",
    buy: "BUT IT NOW",
  },
];

const FeaturedListings = () => {
  return (
    <section>
      <div className="flex justify-between items-center mt-6">
        <div className="mb-4">
          <h2 className="text-3xl font-bold inline-block">featured Listings</h2>
          <div className="w-16 h-[4px] bg-[#A96224] mt-1"></div>
        </div>
        <h2 className="text-[15px] font-semibold my-4 text-blue-600 cursor-pointer">
          View All
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {listings?.map((item, index) => (
          <div
            key={index}
            className="rounded-lg text-center transition-shadow shadow hover:shadow-lg p-4 bg-white"
          >
            <div className="w-full h-64 sm:h-72 flex items-center justify-center overflow-hidden rounded-md">
              <img
                src={item.img}
                alt={item.name}
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className=" text-[15px] font-bold mt-3">{item.name}</h3>
            <p className="text-[15px] font-bold mt-1">{item.price}</p>

            <div className="flex justify-center gap-4 mt-3 w-full">
              <button className="flex-1 shadow-lg hover:text-blue-500 border border-white hover:border-blue-500 hover:border rounded px-4 py-1 transition">
                BID
              </button>
              <button className="flex-1 shadow-lg rounded px-4 py-1 border border-white transition hover:text-blue-500 hover:border hover:border-blue-500">
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
