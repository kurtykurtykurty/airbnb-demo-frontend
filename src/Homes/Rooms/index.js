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
import Neighborhood from "./Neighborhood";
import Report from "./Report";
import Similar from "./Similar";
import Footer from "../../Footer";
import Booking from "./Booking";

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
    <Neighborhood />
    <Report />
    <Similar />
    <Booking />
    <Footer />
  </div>
);
