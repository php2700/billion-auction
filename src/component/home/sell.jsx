import sell from "../../assets/sell.png";

export const Sell = () => {
  return (
    <div className="container mx-auto p-6 ">
      <div className="flex flex-row gap-6">
        <div className="w-1/2 flex flex-col justify-center  rounded-lg shadow-md overflow-hidden bg-gray-200 p-10">
        <div className="mb-4">
          <div className="text-3xl font-bold  text-left">
            Sell with Billionaire Auction
          </div>
                <div className="w-16 h-[4px] bg-[#A96224] mt-1"></div>
        </div>
          <div className="my-4 text-[13px]">
            Curious to know if your item is suitable for one of our upcoming
            sales?
          </div>
          <div className="my-4 text-[13px]">
            Provide information and share images to request an online estimate
            now.
          </div>
          <div className="my-4 text-center">
            <button className=" rounded-2xl text-white bg-[#A96224] px-4 py-2 text-2xl">
              Request an Estimate
            </button>
          </div>
        </div>
        <div className="w-1/2 bg-white rounded-lg  overflow-hidden">
          <img
            src={sell}
            alt="Classic Art Gallery"
            className="w-full h-full  object-cover"
          />
        </div>
      </div>
    </div>
  );
};
