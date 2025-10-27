import adImg from "../../assets/man.png";
import discover from "../../assets/discover.png";
import browse from "../../assets/browse.png";
import BillionaireSelects from "./select";

export const Ad = () => {
  return (
    <>
      <div className="container max-w-6xl mx-auto my-6">
        <img src={adImg} className="w-full px-4" />
      </div>

      <BillionaireSelects />

      <div className="container mx-auto p-6 mt-6 ">
        {/* Header Section */}
        <div className="mb-4">
        <h2 className="text-3xl font-bold  inline-block ">
          Learn More About Private Sales at Billionaire Auctions
        </h2>
         <div className="w-16 h-[4px] bg-[#A96224] mt-1"></div>
        </div>

        <div className="flex flex-row gap-6">
          <div className="w-1/2 bg-white rounded-lg shadow-md overflow-hidden">
            <img
              src={discover}
              alt="Modern Art Exhibition"
              className="w-full  object-contain"
            />
            <div className="p-4">
              <a
                href="#"
                className="block w-full text-start  py-2 px-4 rounded-lg text-2xl font-semibold transition duration-200"
              >
                Discover Private Sales at Billionaire Auctions
              </a>
            </div>
          </div>
          <div className="w-1/2 bg-white rounded-lg shadow-md overflow-hidden">
            <img
              src={browse}
              alt="Classic Art Gallery"
              className="w-full  object-contain"
            />
            <div className="p-4">
              <a
                href="#"
                className="block w-full text-start  py-2 px-4 rounded-lg text-2xl font-semibold transition duration-200"
              >
                Browse Works Available for Private Sale
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
