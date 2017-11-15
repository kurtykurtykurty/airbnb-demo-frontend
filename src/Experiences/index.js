import React from "react";
import styled from "styled-components";
import { NextPage, ScrollWrapper, Section } from "../Section";
import Card from "./Card";
import img1 from "./img1.png";
import img2 from "./img2.png";
import img3 from "./img3.png";
import img4 from "./img4.png";
import star from "./star.png";
import { media } from "../media.js";

export default function() {
  return (
    <div className="container">
      <Section name="Experiences">
        <ScrollWrapper>
          <div className="col-xs-6 col-md-4 col-lg-3">
            <Card
              img={img1}
              price="$29"
              caption="Forest Therapy"
              star={star}
              reviews="46 reviews"
            />
          </div>

          {/* ВТОРАЯ КАРТА */}

          <div className="col-xs-6 col-md-4 col-lg-3">
            <Card
              img={img2}
              price="$69"
              caption="Whale watching"
              star={star}
              reviews="44 reviews"
            />
          </div>

          {/* ТРЕТЬЯ КАРТА */}

          <div className="col-xs-6 col-md-4 col-lg-3">
            <Card
              img={img3}
              price="$69"
              caption="Table Mountain Summit, Cable Car Down"
              star={star}
              reviews="44 reviews"
            />
          </div>

          {/* ЧЕТВЕРТАЯ КАРТА */}

          <div className="col-xs-6 col-md-4 col-lg-3">
            <Card
              img={img4}
              price="$50"
              caption="Salsa Night"
              star={star}
              reviews="44 reviews"
            />
          </div>
        </ScrollWrapper>
        <NextPage href="" />
      </Section>
    </div>
  );
}
