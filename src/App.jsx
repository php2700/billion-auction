import React from "react";
import Header from "./component/common/header";
import FeaturedListings from "./component/home/feature";
import TrendingAuctions from "./component/home/trending";
import Footer from "./component/common/footer";
import "./App.css";
import Banner from "./component/home/banner";
import Upcoming from "./component/home/upcoming";
import ShopByCategory from "./component/home/category";
import { Ad } from "./component/home/ad";
import Discover from "./component/home/discover";
import NewArrival from "./component/home/newArrival";
import { Sell } from "./component/home/sell";

const App = () => {
  return (
    <div className="min-h-screen ">
      <Header />

      <Banner />
      <div className="container mx-auto px-4 sm:px-4">
        <FeaturedListings />
        <TrendingAuctions />
        <Upcoming />
        <ShopByCategory />
      </div>
      <Ad />
      <div className="container mx-auto px-4 sm:px-10">
        <Discover />
        <NewArrival />
        <Sell />
      </div>
      <Footer />
    </div>
  );
};

export default App;
