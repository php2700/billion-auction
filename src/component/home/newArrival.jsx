// import shop1 from "../../assets/shop-1.png";
// import shop2 from "../../assets/shop-2.png";
// import shop3 from "../../assets/shop-3.png";
// import shop4 from "../../assets/shop-4.png";
import cartier from "../../assets/haermeas.jpg";
import hermes from "../../assets/haermeas-2.png";
import platinum from "../../assets/platinum.jpg";
import rolex from "../../assets/rolex.jpg";

import { FaChevronLeft, FaChevronRight, FaInfoCircle } from "react-icons/fa";

const listings = [
  {
    name: "Cartier",
    price: "15,800 USD",
    date: "26 January 2026 | India",
    desc: "Cartier, Panthère Secrete De Cartier (Reference WG500131). A yellow gold diamond and onyx-set quartz wristwatch with concealed dial.",
    img: cartier,
    bid: "BId",
    buy: "BUT IT NOW",
    time: "5h 5m left",
    topText: "AUCTION",
  },
  {
    name: "Hermès",
    price: "12,240 USD",
    date: "26 January 2026 | India",
    img: hermes,
    bid: "BId",
    buy: "BUT IT NOW",
    time: "5h 5m left",
    topText: "AUCTION",
    desc: "Black Madame Lizard Touch Mini Kelly 20 II Gold Hardware",
  },
  {
    name: "Diamond Pendant",
    price: "1200 USD",
    img: platinum,
    date: "26 January 2026 | India",
    bid: "BId",
    desc: `Platinum, 35.31ct Pear Shape Fancy Intense Yellow Diamond and Diamond Pendant Necklace`,
    buy: "BUT IT NOW",
    time: "5h 5m left",
    topText: "AUCTION",
  },
  {
    name: "Rolex",
    price: "5700000 USD",
    desc: "Rolex President Day-Date (Reference 228348RBR). A 40mm unworn yellow gold diamond-set automatic wristwatch with day and date.",
    img: rolex,
    date: "26 January 2026 | India",
    bid: "BId",
    buy: "BUT IT NOW",
    time: "5h 5m left",
    topText: "AUCTION",
  },
];

const NewArrival = () => {
  return (
    <section className="relative my-4">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div className="mb-4">
          <h2 className="text-3xl font-bold  inline-block">
            Shop New Arrival from Hermes ,Rolex ,Cartier and more
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
        <div className="grid grid-cols-4 gap-4">
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
                <h3 className="font-bold text-[18px]">{item.name}</h3>
                <h3 className="text-[14px] font-medium ">{item.desc}</h3>
                <h3 className="text-[15px] ">{item.price}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewArrival;
