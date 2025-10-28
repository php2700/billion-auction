import bag from "../../assets/bikrinb-bag.png";
import rolex from "../../assets/rolex-daytona.png";
import dustun from "../../assets/jaguar.png";
import diamond from "../../assets/billiondiamond.png";
import legacy from "../../assets/legacy.png";
import art from "../../assets/art.png";
import copper from "../../assets/copper.png";
import rolls from "../../assets/rolls.png";
import { FaChevronLeft, FaChevronRight, FaInfoCircle } from "react-icons/fa";

const listings = [
  {
    name: "Surrealism and Its Legacy",
    price: "$250,000",
    date: "26 January 2026 | India",
    img: legacy,
    bid: "BID",
    buy: "BUY IT NOW",
    time: "5h 5m left",
    topText: "AUCTION",
  },
  {
    name: "A Gilt Copper Alloy Figure Of Shakyamuni Buddha",
    price: "$40,000",
    date: "26 January 2026 | India",
    img: copper,
    bid: "BID",
    buy: "BUY IT NOW",
    time: "5h 5m left",
    topText: "AUCTION",
  },
  {
    name: "Rolls-Royce, Corniche",
    price: "$1,250,000",
    img: rolls,
    date: "26 January 2026 | India",
    bid: "BID",
    buy: "BUY IT NOW",
    time: "5h 5m left",
    topText: "AUCTION",
  },
  {
    name: "6 Artworks at Auction | MutualArt",
    price: "$820,000",
    img: art,
    date: "26 January 2026 | India",
    bid: "BID",
    buy: "BUY IT NOW",
    time: "5h 5m left",
    topText: "AUCTION",
  },
];

const Upcoming = () => {
  return (
    <section className="relative">
      {/* Header */}
      <div className="flex justify-between items-center mt-6">
        <div className="mb-4">
          <h2 className="text-3xl font-bold inline-block">Upcoming Auctions</h2>
          <div className="w-16 h-[4px] bg-[#A96224] mt-1"></div>
        </div>
        <h2 className="text-[15px] font-semibold my-4 text-blue-600 cursor-pointer">
          VIEW ALL
        </h2>
      </div>

      {/* Slider (for mobile/tablet) */}
      <div className="block lg:hidden relative">
        <div
          className="
            flex overflow-x-auto scroll-smooth gap-4 pb-3
            snap-x snap-mandatory scrollbar-hide
          "
        >
          {listings.map((item, index) => (
            <div
              key={index}
              className="
                snap-center min-w-[80%]
                rounded-lg text-center transition-shadow hover:shadow-lg bg-white
              "
            >
              <div className="relative w-full flex items-center justify-center overflow-hidden rounded-md">
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-full h-64 md:h-72 object-cover"
                />
                <span className="absolute top-3 right-3 bg-white text-blue-700 text-xs font-semibold px-2 py-1 rounded shadow-sm">
                  {item.topText}
                </span>
              </div>

              <div className="px-3 py-3 text-left">
                <h3 className="text-[16px] font-[400] truncate">{item.name}</h3>
                <p className="text-[13px] text-gray-600 mt-1">{item.date}</p>

                <div className="flex justify-start items-center gap-2 mt-3">
                  <button className="border border-black text-black font-semibold text-xs tracking-wide rounded-md px-8 py-1 hover:bg-gray-100 transition">
                    BID
                  </button>
                  <FaInfoCircle className="text-gray-600 text-lg" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Grid (for lg and above) */}
      <div className="hidden lg:grid lg:grid-cols-4 gap-6">
        {listings.map((item, index) => (
          <div
            key={index}
            className="rounded-lg text-center transition-shadow hover:shadow-lg bg-white"
          >
            <div className="relative w-full flex items-center justify-center overflow-hidden rounded-md">
              <img
                src={item.img}
                alt={item.name}
                className="w-full h-64 md:h-72 object-cover"
              />
              <span className="absolute top-3 right-3 bg-white text-blue-700 text-xs font-semibold px-2 py-1 rounded shadow-sm">
                {item.topText}
              </span>
            </div>

            <div className="px-3 py-3 text-left">
              <h3 className="text-[16px] font-[400] truncate">{item.name}</h3>
              <p className="text-[13px] text-gray-600 mt-1">{item.date}</p>

              <div className="flex justify-start items-center gap-2 mt-3">
                <button className="border border-black text-black font-semibold text-xs tracking-wide rounded-md px-8 py-1 hover:bg-gray-100 transition">
                  BID
                </button>
                <FaInfoCircle className="text-gray-600 text-lg" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Upcoming;
