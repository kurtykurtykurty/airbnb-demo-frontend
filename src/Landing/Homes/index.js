import React from "react";
import { NextPage, ScrollWrapper, Section } from "../Section";
import Card from "../../Homes/List/Card";
import img1 from "../../Homes/List/img1.png";
import img2 from "../../Homes/List/img2.png";
import img3 from "../../Homes/List/img3.png";
import star from "../../Homes/List/star.png";

export default function() {
  return (
    <div className="container">
      <Section name="Homes">
        <ScrollWrapper>
          <div className="col-xs-8 col-md-5 col-lg-4">
            <Card
              img={img1}
              price="$82"
              caption="La Salentina, see, nature & relax"
              info="Entire house · 9 beds"
              star={star}
              reviews="97 · Superhost"
            />
          </div>

          {/* ВТОРАЯ КАРТА */}

          <div className="col-xs-8 col-md-5 col-lg-4">
            <Card
              img={img2}
              price="$82"
              caption="Your private 3 bedr. riad and exclusi…"
              info="Entire house · 5 beds"
              star={star}
              reviews="161 · Superhost"
            />
          </div>

          {/* ТРЕТЬЯ КАРТА */}

          <div className="col-xs-8 col-md-5 col-lg-4">
            <Card
              img={img3}
              price="$200"
              caption="Dreamy Tropical Tree House"
              info="Entire treehouse · 1 bed"
              star={star}
              reviews="364 · Superhost"
            />
          </div>
        </ScrollWrapper>
        <NextPage />
      </Section>
    </div>
  );
}
