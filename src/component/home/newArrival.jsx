import cartier from "../../assets/haermeas.jpg";
import hermes from "../../assets/haermeas-2.png";
import platinum from "../../assets/platinum.jpg";
import rolex from "../../assets/rolex.jpg";

const listings = [
  {
    name: "Cartier",
    price: "15,800 USD",
    date: "26 January 2026 | India",
    desc: "Cartier, Panthère Secrete De Cartier (Reference WG500131). A yellow gold diamond and onyx-set quartz wristwatch with concealed dial.",
    img: cartier,
  },
  {
    name: "Hermès",
    price: "12,240 USD",
    date: "26 January 2026 | India",
    img: hermes,
    desc: "Black Madame Lizard Touch Mini Kelly 20 II Gold Hardware",
  },
  {
    name: "Diamond Pendant",
    price: "1200 USD",
    img: platinum,
    date: "26 January 2026 | India",
    desc: "Platinum, 35.31ct Pear Shape Fancy Intense Yellow Diamond and Diamond Pendant Necklace",
  },
  {
    name: "Rolex",
    price: "5,700,000 USD",
    desc: "Rolex President Day-Date (Reference 228348RBR). A 40mm unworn yellow gold diamond-set automatic wristwatch with day and date.",
    img: rolex,
    date: "26 January 2026 | India",
  },
];

const NewArrival = () => {
  return (
    <section className="relative my-6 container mx-auto px-4">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold inline-block">
            Shop New Arrivals from Hermès, Rolex, Cartier and more
          </h2>
          <div className="w-16 h-[4px] bg-[#A96224] mt-1"></div>
        </div>
        <h2 className="text-[15px] font-semibold text-blue-600 cursor-pointer hover:underline">
          VIEW ALL
        </h2>
      </div>

      {/* Desktop layout (lg and up) */}
      <div className="hidden lg:grid grid-cols-4 gap-6">
        {listings.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-sm hover:shadow-lg transition-shadow"
          >
            <div className="relative w-full overflow-hidden rounded-md">
              <img
                src={item.img}
                alt={item.name}
                className="w-full h-[260px] object-cover"
              />
            </div>
            <div className="px-4 py-3">
              <h3 className="font-bold text-[18px]">{item.name}</h3>
              <p className="text-[14px] font-medium mb-2 text-gray-700 truncate">
                {item.desc}
              </p>
              <p className="text-[15px] text-gray-900 font-semibold">
                {item.price}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Mobile/Tablet layout (below lg) - Scrollable Slider */}
      <div className="flex lg:hidden overflow-x-auto gap-5 snap-x snap-mandatory scrollbar-hide">
        {listings.map((item, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-[85%] sm:w-[65%] bg-white rounded-lg shadow-sm hover:shadow-md snap-start"
          >
            <div className="relative w-full overflow-hidden rounded-md">
              <img
                src={item.img}
                alt={item.name}
                className="w-full h-full object-contain"
              />
            </div>
            <div className="px-4 py-3">
              <h3 className="font-bold text-[18px] ">{item.name}</h3>
              <p className="text-[14px] font-medium mb-2 text-gray-700 truncate">
                {item.desc}
              </p>
              <p className="text-[15px] text-gray-900 font-semibold">
                {item.price}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default NewArrival;
