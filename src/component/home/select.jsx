import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import first from "../../assets/sel-fir.png";
import second from "../../assets/sel-sec.png";
import third from "../../assets/sel-three.png";
import four from "../../assets/sel-four.png";
import { useNavigate } from "react-router-dom";

const BillionaireSelects = () => {
  const navigate = useNavigate();
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

  const handleView = () => {
    navigate("/default");
  };

  return (
    <div className="container mx-auto sm:px-4 px-4 py-8 bg-white">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-3xl font-bold text-gray-900">
            Billionaire Selects
          </h2>
          <div className="w-16 h-[4px] bg-[#A96224] mt-1"></div>
        </div>
        <button
          onClick={handleView}
          className="text-blue-700 font-semibold text-[15px] hover:underline"
        >
          VIEW ALL
        </button>
      </div>

      {/* Desktop layout (lg and up) */}
      <div className="hidden lg:grid grid-cols-3 gap-6">
        {/* Column 1 */}
        <div>
          <div
            className="w-full h-[500px] overflow-hidden rounded-sm"
            onClick={handleView}
          >
            <img
              src={items[0].img}
              alt={items[0].title}
              className="w-full h-full object-cover"
            />
          </div>
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

        {/* Column 2 */}
        <div>
          <div
            className="w-full h-[500px] overflow-hidden rounded-sm"
            onClick={handleView}
          >
            <img
              src={items[1].img}
              alt={items[1].title}
              className="w-full h-full object-cover"
            />
          </div>
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

        {/* Column 3 (Two stacked images) */}
        <div className="flex flex-col space-y-6">
          {items.slice(2).map((item, index) => (
            <div key={index}>
              <div
                className="w-full h-[200px] overflow-hidden rounded-sm"
                onClick={handleView}
              >
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
              </div>
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

      {/* Mobile / Tablet layout (below lg) */}
      <div className="flex lg:hidden overflow-x-auto gap-6 snap-x snap-mandatory scrollbar-hide">
        {items.map((item, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-[85%] sm:w-[70%] snap-start"
          >
            <div className="w-full h-[300px] overflow-hidden rounded-sm">
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-full object-cover"
              />
            </div>
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
  );
};

export default BillionaireSelects;
