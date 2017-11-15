import React from "react";
import { NextPage, SectionShort, ScrollWrapper } from "../Section";
import Card from "./Card";
import img1 from "./img1.png";
import img2 from "./img2.png";
import img3 from "./img3.png";
import img4 from "./img4.png";
import img5 from "./img5.png";
import img6 from "./img6.png";

export default function() {
  return (
    <div className="container">
      <SectionShort name="Featured destinations">
        <ScrollWrapper>
          <div className="col-xs-4 col-md-3 col-lg-2">
            <Card img={img1} caption="Paris" />
          </div>

          <div className="col-xs-4 col-md-3 col-lg-2">
            <Card img={img2} caption="Miami" />
          </div>

          <div className="col-xs-4 col-md-3 col-lg-2">
            <Card img={img3} caption="Tokyo" />
          </div>

          <div className="col-xs-4 col-md-3 col-lg-2">
            <Card img={img4} caption="Cape Town" />
          </div>

          <div className="col-xs-4 col-md-3 col-lg-2">
            <Card img={img5} caption="Seoul" />
          </div>

          <div className="col-xs-4 col-md-3 col-lg-2">
            <Card img={img6} caption="Los Angeles" />
          </div>

          <NextPage />
        </ScrollWrapper>
      </SectionShort>
    </div>
  );
}
