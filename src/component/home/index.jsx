import Footer from "../common/footer";
import Header from "../common/header";
import { Ad } from "./ad";
import Banner from "./banner";
import ShopByCategory from "./category";
import Discover from "./discover";
import FeaturedListings from "./feature";
import NewArrival from "./newArrival";
import { Sell } from "./sell";
import TrendingAuctions from "./trending";
import Upcoming from "./upcoming";

export const Home = () => {
  return (
    <>
      <div className="min-h-screen ">
        <Header />

        <Banner />
        <div className="container mx-auto  sm:px-4 px-4">
          <FeaturedListings />
          <TrendingAuctions />
          <Upcoming />
          <Discover />
          <ShopByCategory />
        </div>
        <Ad />
        <div className="container mx-auto sm:px-4 px-4">
          <NewArrival />
          <Sell />
        </div>
        <Footer />
      </div>
    </>
  );
};
