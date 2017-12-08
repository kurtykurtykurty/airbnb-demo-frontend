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
import Map from "./Neighborhood/Map";
import Report from "./Report";
import Similar from "./Similar";
import Footer from "../../Footer";
import Booking from "./Booking";
import { StickyContainer } from "react-sticky";

export default () => (
  <div>
    <MainHeader />
    <Header />
    <div className="container">
      <StickyContainer>
        <div className="row">
          <div className="col-xs-12 col-lg-8">
            <Navigate />
            <About />
            <Amenities />
            <Communicate />
            <Rules />
            <Cancellations />
            <Reviews />
            <Host />
            <Neighborhood />
          </div>
          <div className="hidden-xs hidden-sm hidden-md col-lg-4">
            <Booking />
          </div>
        </div>
      </StickyContainer>
      <Map />
      <Report />
      <Similar />
    </div>
    <Footer />
  </div>
);
