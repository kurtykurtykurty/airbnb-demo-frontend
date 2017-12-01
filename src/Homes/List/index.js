import React from "react";
import styled from "styled-components";
import Header from "../../Header";
import Footer from "./Footer";
import Filters from "../Filters";
import MapLocation from "../MapLocation";
import { media } from "../../media";
import Card from "./Card";
import Location from "./Location";
import { Link as RLink } from "react-router-dom";

import img1 from "./img1.png";
import img2 from "./img2.png";
import img3 from "./img3.png";
import img4 from "./img4.png";
import img5 from "./img5.png";
import img6 from "./img6.png";

import star from "./star.png";

const List = styled.div`
  padding-top: 162px;
  padding-down: 40px;

  ${media.md`
    padding-down: 48px;
  `};
`;

const Wrapper = styled.div`
  margin-bottom: 24px;
  tabindex: 0;

  ${media.md`
    margin-bottom: 40px;
  `};
`;
const Link = styled(RLink)`
  text-decoration: none;
`;

const MapWrapper = styled.div`
  position: fixed;
  top: 140px;
  bottom: 0;
  right: 0;
  left: calc(50% + 162px);

  ${media.xl`
    left: calc(50% + 198px);
  `};

  ${"" /* ${media.lg`
    display:
  `}; */};
`;

export default function() {
  return (
    <div>
      <Header isFixed />
      <div className="container">
        <Filters />
        <List>
          <div className="row">
            <div className="col-xs-12 col-lg-8">
              <div className="row">
                <div className="col-xs-12 col-md-6">
                  <Wrapper>
                    <Link to="/homes/1">
                      <Card
                        img={img1}
                        price="$82"
                        caption="La Salentina, see, nature & relax"
                        info="Entire house · 9 beds"
                        star={star}
                        reviews="97 · Superhost"
                      />
                    </Link>
                  </Wrapper>
                </div>

                {/* ВТОРАЯ КАРТА */}

                <div className="col-xs-12 col-md-6">
                  <Wrapper>
                    <Link to="/homes/2">
                      <Card
                        img={img2}
                        price="$82"
                        caption="Your private 3 bedr. riad and exclusi…"
                        info="Entire house · 5 beds"
                        star={star}
                        reviews="161 · Superhost"
                      />
                    </Link>
                  </Wrapper>
                </div>

                {/* ТРЕТЬЯ КАРТА */}

                <div className="col-xs-12 col-md-6">
                  <Wrapper>
                    <Card
                      img={img3}
                      price="$200"
                      caption="Dreamy Tropical Tree House"
                      info="Entire treehouse · 1 bed"
                      star={star}
                      reviews="364 · Superhost"
                    />
                  </Wrapper>
                </div>

                {/* 4 */}

                <div className="col-xs-12 col-md-6">
                  <Wrapper>
                    <Card
                      img={img4}
                      price="$110"
                      caption="Best location old town luxury loft"
                      info="Entrie apartment  ·  1 bed"
                      star={star}
                      reviews="369 · Superhost"
                    />
                  </Wrapper>
                </div>

                {/* 5 */}

                <div className="col-xs-12 col-md-6">
                  <Wrapper>
                    <Card
                      img={img5}
                      price="$83"
                      caption="Lussuoso. Vista incantevole."
                      info="Entrie apartment  ·  6 bed"
                      star={star}
                      reviews="105 · Superhost"
                    />
                  </Wrapper>
                </div>

                {/* 6 */}

                <div className="col-xs-12 col-md-6">
                  <Wrapper>
                    <Card
                      img={img6}
                      price="$72"
                      caption="In the historical center of Lecce"
                      info="Entrie house  ·  3 bed"
                      star={star}
                      reviews="221 · Superhost"
                    />
                  </Wrapper>
                </div>
              </div>
            </div>
          </div>
        </List>
        <Location />
        <MapWrapper className="hidden-xs hidden-sm hidden-md">
          <MapLocation
            center={{ lat: 46.55189574, lng: 5.29309273 }}
            zoom={15}
          />
        </MapWrapper>
      </div>
      <Footer />
    </div>
  );
}
