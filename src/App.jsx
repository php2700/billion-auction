import React from "react";
import Header from "./component/common/header";
import FeaturedListings from "./component/home/feature";
import TrendingAuctions from "./component/home/trending";
import Footer from "./component/common/footer";
import "./app.css";

const App = () => {
      return (
            <div className="min-h-screen ">
                  <Header />

                  <FeaturedListings />
                  <TrendingAuctions />

                  <Footer />
            </div>
      );
};

export default App;

