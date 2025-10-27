import bag from "../../assets/bag.png";
import car from "../../assets/shop-car.png";
import house1 from "../../assets/house1.png";
import house2 from "../../assets/house2.png";
import house3 from "../../assets/house3.png";
import house4 from "../../assets/house4.png";

import necklace from "../../assets/shop-neclace.png";
import watch from "../../assets/up-watch.png";
import { FaChevronLeft, FaChevronRight, FaInfoCircle } from "react-icons/fa";

const listings = [
  {
    name: "luxury mansion, New York",
    price: "9,79,231.26 USD",
    date: "26 January 2026 | India",
    img: house1,
    bid: "BId",
    buy: "BUT IT NOW",
    time: "5h 5m left",
    topText: "AUCTION",
  },
  {
    name: "The House, Paris",
    price: "9,79,231.26 USD",
    date: "26 January 2026 | India",
    img: house2,
    bid: "BId",
    buy: "BUT IT NOW",
    time: "5h 5m left",
    topText: "AUCTION",
  },
  {
    name: "Thiruvananthapuram, India.",
    price: "9,79,231.26 USD",
    img: house3,
    date: "26 January 2026 | India",
    bid: "BId",
    buy: "BUT IT NOW",
    time: "5h 5m left",
    topText: "AUCTION",
  },
  {
    name: "Beach House, Srilanka.",
    price: "9,79,231.26 USD",
    img: house4,
    date: "26 January 2026 | India",
    bid: "BId",
    buy: "BUT IT NOW",
    time: "5h 5m left",
    topText: "AUCTION",
  },
];

const Discover = () => {
  return (
    <section className="relative my-4">
      {/* Header */}
      <div className="flex justify-between items-center mt-4">
        <div className="mb-4">
          <h2 className="text-3xl font-bold  inline-block ">
            Discover Our Worldwide Luxury Houses
          </h2>
          <div className="w-16 h-[4px] bg-[#A96224] mt-1"></div>
        </div>
        <h2 className="text-[15px] font-semibold my-4 text-blue-600 cursor-pointer">
          VIEW ALL
        </h2>
      </div>

      {/* Wrapper with relative for positioning arrows */}
      <div className="relative">
        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {listings?.map((item, index) => (
            <div
              key={index}
              className="rounded-lg text-center transition-shadow hover:shadow-lg bg-white"
            >
              <div className="relative w-full h-64 sm:h-72 flex items-center justify-center overflow-hidden rounded-md">
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="px-3 py-3 text-start">
                <h3 className="text-md font-[500] text-[20px]">{item.name}</h3>
                <h3 className="text-md text-[16px] font-[500]">{item.price}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Discover;
