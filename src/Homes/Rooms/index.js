import React from "react";
import Header from "./Header";
import MainHeader from "../../Header";
import Navigate from "./Navigate";
import About from "./About";
import Amenities from "./Amenities";

export default () => (
  <div>
    <MainHeader />
    <Header />
    <Navigate />
    <About />
    <Amenities />
  </div>
);
