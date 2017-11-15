import React from "react";
import { ScrollWrapper, SectionShort } from "../Section";
import Card from "./Card";
import img1 from "./card1.png";
import img2 from "./card2.png";
import img3 from "./card3.png";
import img1m from "./mcard1.png";
import img2m from "./mcard2.png";
import img3m from "./mcard3.png";

export default function() {
  return (
    <div className="container">
      <SectionShort name="Explore Airbnb">
        <ScrollWrapper>
          <div className="col-xs-6 col-md-5 col-lg-4">
            <Card img={img1} imgm={img1m} title="Home" />
          </div>
          <div className="col-xs-6 col-md-5 col-lg-4">
            <Card img={img2} imgm={img2m} title="Experiences" />
          </div>
          <div className="col-xs-6 col-md-5 col-lg-4">
            <Card img={img3} imgm={img3m} title="Restaurants" />
          </div>
        </ScrollWrapper>
      </SectionShort>
    </div>
  );
}
