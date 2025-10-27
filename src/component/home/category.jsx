import bag from "../../assets/bag.png";
import car from "../../assets/shop-car.png";

import necklace from "../../assets/shop-neclace.png";
import watch from "../../assets/richar.jpg";

import { FaChevronLeft, FaChevronRight, FaInfoCircle } from "react-icons/fa";

const listings = [
  {
    name: "Handbags",
    price: "$250,000",
    date: "26 January 2026 | India",
    img: bag,
    bid: "BId",
    buy: "BUT IT NOW",
    time: "5h 5m left",
    topText: "AUCTION",
  },
  {
    name: "Watches",
    price: "$40,000",
    date: "26 January 2026 | India",
    img: watch,
    bid: "BId",
    buy: "BUT IT NOW",
    time: "5h 5m left",
    topText: "AUCTION",
  },
  {
    name: "Bently",
    price: "$1,250,000",
    img: car,
    date: "26 January 2026 | India",
    bid: "BId",
    buy: "BUT IT NOW",
    time: "5h 5m left",
    topText: "AUCTION",
  },
  {
    name: "Jewellary",
    price: "$8,20,000",
    img: necklace,
    date: "26 January 2026 | India",
    bid: "BId",
    buy: "BUT IT NOW",
    time: "5h 5m left",
    topText: "AUCTION",
  },
];

const ShopByCategory = () => {
  return (
    <section className="relative">
      {/* Header */}
      <div className="flex justify-between items-center mt-6">
        <div className="mb-4">
        <h2 className="text-3xl font-bold  inline-block">
          Shop by Category
        </h2>
           <div className="w-16 h-[4px] bg-[#A96224] mt-1"></div>
        </div>
        <h2 className="text-[15px] font-semibold my-4 text-blue-600 cursor-pointer">
          VIEW ALL
        </h2>
      </div>

      <div className="relative">
 

        {/* Grid */}
        <div className="grid grid-cols-4 gap-6">
          {listings?.map((item, index) => (
            <div
              key={index}
              className="rounded-lg text-center transition-shadow hover:shadow-lg bg-white"
            >
              <div className="relative w-full  flex items-center justify-center overflow-hidden rounded-md">
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-full h-full object-contain"
                />
              </div>

              <div className="px-3 py-3 text-start">
                <h3 className="text-[20px] font-semibold">{item.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ShopByCategory;
