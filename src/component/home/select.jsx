import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import first from "../../assets/sel-fir.png";
import second from "../../assets/sel-sec.png";
import third from "../../assets/sel-three.png";
import four from "../../assets/sel-four.png";

const BillionaireSelects = () => {
  const items = [
    {
      img: first,
      title: "The Enchanted Worlds of Charles Simonds.",
      author: "The Breuer",
    },
    {
      img: second,
      title: "The Enchanted Worlds of Charles Simonds.",
      author: "The Breuer",
    },
    {
      img: third,
      title: "The Enchanted Worlds of Charles Simonds.",
      author: "The Breuer",
    },
    {
      img: four,
      title: "The Enchanted Worlds of Charles Simonds.",
      author: "The Breuer",
    },
  ];

  return (
    <div className="container mx-auto p-6 px-4 sm:px-10 py-8 bg-white">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-3xl sm:text-3xl font-bold text-gray-900">
            Billionaire Selects
          </h2>
          <div className="w-16 h-[4px] bg-[#A96224] mt-1"></div>
        </div>
        <button className="text-blue-700 font-semibold text-[15px] hover:underline">
          VIEW ALL
        </button>
      </div>

      {/* --- Grid Section --- */}
      <div className="relative grid grid-cols-3 gap-6">
        <div className="relative">
          <img
            src={items[0].img}
            alt={items[0].title}
            className="w-full  object-contain rounded-sm"
          />
          <div className="mt-2">
            <div className="flex items-center space-x-2 text-sm text-gray-700">
              <span className="bg-orange-500 w-4 h-4 rounded-sm flex items-center justify-center text-white text-xs font-bold">
                🏛
              </span>
              <span className="text-[15px]">{items[0].author}</span>
            </div>
            <p className="text-gray-900 font-medium text-[20px] mt-1 leading-snug">
              {items[0].title}
            </p>
          </div>
        </div>

        <div>
          <img
            src={items[1].img}
            alt={items[1].title}
            className="w-full  object-contain rounded-sm"
          />
          <div className="mt-2">
            <div className="flex items-center space-x-2 text-sm text-gray-700">
              <span className="bg-orange-500 w-4 h-4 rounded-sm flex items-center justify-center text-white text-xs font-bold">
                🏛
              </span>
              <span className="text-[15px]">{items[1].author}</span>
            </div>
            <p className="text-gray-900 font-medium text-[20px] mt-1 leading-snug">
              {items[1].title}
            </p>
          </div>
        </div>

        <div className="flex flex-col space-y-6">
          {items?.slice(2).map((item, index) => (
            <div key={index}>
              <img
                src={item.img}
                alt={item.title}
                className="w-full  object-contain rounded-sm"
              />
              <div className="mt-2">
                <div className="flex items-center space-x-2 text-sm text-gray-700">
                  <span className="bg-orange-500 w-4 h-4 rounded-sm flex items-center justify-center text-white text-xs font-bold">
                    🏛
                  </span>
                  <span className="text-[15px]">{item.author}</span>
                </div>
                <p className="text-gray-900 font-medium text-[20px] mt-1 leading-snug">
                  {item.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BillionaireSelects;
