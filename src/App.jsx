import React from "react";
// import Header from "./component/common/header";
// import Footer from "./component/common/footer";
import "./App.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./component/home";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" index element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
