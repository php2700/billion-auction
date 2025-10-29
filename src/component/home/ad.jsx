import adImg from "../../assets/man.png";
import discover from "../../assets/discover.png";
import browse from "../../assets/browse.png";
import BillionaireSelects from "./select";
import { useNavigate } from "react-router-dom";

export const Ad = () => {
  const privateSales = [
    {
      img: discover,
      alt: "Modern Art Exhibition",
      title: "Discover Private Sales at Billionaire Auctions",
    },
    {
      img: browse,
      alt: "Classic Art Gallery",
      title: "Browse Works Available for Private Sale",
    },
  ];
  const navigate = useNavigate();
  const handleView = () => {
    navigate("/default");
  };
  return (
    <>
      {/* Top Ad Image */}
      <div className="container max-w-6xl mx-auto my-6">
        <img src={adImg} className="w-full px-4" alt="Advertisement" />
      </div>

      <BillionaireSelects />

      {/* Private Sales Section */}
      <div className="container mx-auto p-6 mt-6">
        {/* Header */}
        <div className="mb-4">
          <h2 className="text-3xl font-bold inline-block">
            Learn More About Private Sales at Billionaire Auctions
          </h2>
          <div className="w-16 h-[4px] bg-[#A96224] mt-1"></div>
        </div>

        <div
          className="
            flex 
            flex-nowrap 
            md:flex-wrap 
            gap-6 
            overflow-x-auto 
            snap-x snap-mandatory 
            scrollbar-hide
          "
        >
          {privateSales.map((item, index) => (
            <div
              key={index}
              className="
                flex-shrink-0 
                w-[85%] 
                sm:w-[70%] 
                md:w-[48%] 
                bg-white 
                rounded-lg 
                shadow-md 
                overflow-hidden 
                snap-start
              " onClick={handleView}
            >
              <img
                src={item.img}
                alt={item.alt}
                className="w-full object-contain h-full"
              />
              <div className="p-4">
                <a
                  href="#"
                  className="block w-full text-start py-2 px-4 rounded-lg text-2xl font-semibold transition duration-200"
                >
                  {item?.title}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
