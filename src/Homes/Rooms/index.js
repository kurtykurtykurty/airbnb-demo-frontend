import React from "react";
import Header from "./Header";
import MainHeader from "../../Header";
import Navigate from "./Navigate";
import About from "./About";
import Amenities from "./Amenities";
import Communicate from "./Communicate";
import Rules from "./Rules";
import Cancellations from "./Cancellations";
import Reviews from "./Reviews";
import Host from "./Host";

export default () => (
  <div>
    <MainHeader />
    <Header />
    <Navigate />
    <About />
    <Amenities />
    <Communicate />
    <Rules />
    <Cancellations />
    <Reviews />
    <Host />
  </div>
);
