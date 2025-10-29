import bag from "../../assets/bikrinb-bag.png";
import rolex from "../../assets/rolex-daytona.png";
import dustun from "../../assets/jaguar.png";
import diamond from "../../assets/billiondiamond.png";
import { useNavigate } from "react-router-dom";

const listings = [
  {
    name: "Hermes Birkin Bag",
    price: "$250,000",
    img: bag,
    bid: "BId",
    buy: "BUT IT NOW",
    time: "5h 5m left",
  },
  {
    name: "Rolex Daytona",
    price: "$40,000",
    img: rolex,
    bid: "BId",
    buy: "BUT IT NOW",
    time: "5h 5m left",
  },
  {
    name: "Maserati, GranCabrio",
    price: "$1,250,000",
    img: dustun,
    bid: "BId",
    buy: "BUT IT NOW",
    time: "5h 5m left",
  },
  {
    name: "Verdura",
    price: "$8,20,000",
    img: diamond,
    bid: "BId",
    buy: "BUT IT NOW",
    time: "5h 5m left",
  },
];



const TrendingAuctions = () => {

  const navigate = useNavigate();
  const handleView = () => {
    navigate("/default");
  };
  return (
    <section>
      <div className="flex justify-between items-center mt-6">
        <div className="mb-4">
          <h2 className="text-3xl font-bold  inline-block">
            Trending Auctions
          </h2>
          <div className="w-16 h-[4px] bg-[#A96224] mt-1"></div>
        </div>
        <h2 onClick={handleView} className="text-[15px] font-semibold my-4 text-blue-600 cursor-pointer">
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
            <p className="text-[15px] font-bold mt-1">{item.time}</p>

            <div className="flex justify-center gap-3 mt-3">
              <button onClick={handleView} className="flex-1 shadow-lg hover:text-blue-500 border border-gray-200 hover:border-blue-500 rounded text-[14px] md:text-base px-2 py-1 md:px-4 md:py-2 transition">
                BID
              </button>
              <button onClick={handleView} className="flex-1 shadow-lg rounded text-[14px] md:text-base px-2 py-1 md:px-4 md:py-2 border border-gray-200 transition hover:text-blue-500 hover:border-blue-500">
                BUY IT NOW
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TrendingAuctions;
