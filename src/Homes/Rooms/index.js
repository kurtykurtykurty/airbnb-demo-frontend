import React from "react";
import Header from "./Header";
import MainHeader from "../../Header";
import Navigate from "./Navigate";
import About from "./About";

export default () => (
  <div>
    <MainHeader />
    <Header />
    <Navigate />
    <About />
  </div>
);
