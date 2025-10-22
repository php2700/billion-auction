import React from "react";
import bag from "../../assets/birkin-bag.jpg";
import rolex from "../../assets/rolex-daytona.png";
import dustun from "../../assets/duesenburg.webp";
import diamond from "../../assets/billiondiamond.jpg";
import emerbeld from "../../assets/emereld-cut.avif";
import russet from "../../assets/russet-crossbody.avif";

const trending = [
  {
    name: "Hermes Birkin Bag",
    price: "$25,000",
    time: "5h 5m left",
    img: bag,
  },
  {
    name: "Rolex Daytona",
    price: "$40,000",
    time: "3h 20m left",
    img: rolex,
  },
  {
    name: "1935 Duesenberg Model SJ",
    price: "$60,000",
    time: "3h 20m left",
    img: dustun,
  },
  {
    name: "Emerald cut 1.5g",
    price: "$8,000",
    time: "2h 10m left",
    img: diamond,
  },
  {
    name: "Billioniamond Christian of St...",
    price: "$1,200",
    time: "2h 10m left",
    img: emerbeld,
  },
  {
    name: "Russet crossbody",
    price: "$950",
    time: "2h 10m left",
    img: russet,
  },
];

const TrendingAuctions = () => {
  return (
    <section className="my-8 px-4 sm:px-10">
      <h2 className="text-2xl text-white font-semibold mb-4">Trending Auctions</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  gap-4">
        {trending.map((item, index) => (
          <div
            key={index}
            className="rounded-lg text-center transition-shadow"
          >
            <div className="w-full h-64 sm:h-72 flex items-center justify-center overflow-hidden mb-2 rounded-md bg-gray-100">
              <img
                src={item.img}
                alt={item.name}
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-md text-white font-medium">{item.name}</h3>
            <p className="text-md text-white">{item.price}</p>
            {item.time && <p className="text-md text-white">{item.time}</p>}
          </div>
        ))}
      </div>
    </section>
  );
};

export default TrendingAuctions;
