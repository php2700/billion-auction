import React from "react";
// import Header from "./component/common/header";
// import Footer from "./component/common/footer";
import "./App.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./component/home";
import { DefaultPage } from "./component/default";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" index element={<Home />} />
        <Route path="/default" index element={<DefaultPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
