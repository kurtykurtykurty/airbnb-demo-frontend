import React from "react";
import styled from "styled-components";
import { media } from "../../../media";
import Card from "./Card";

import nextpage from "./next-page.svg";
import card1 from "./card1.png";
import card2 from "./card2.png";
import card3 from "./card3.png";

const Section = styled.div`
  margin-top: 47px;
  margin-bottom: 40px;
`;

const Title = styled.h3`
  font-family: CircularAir;
  line-height: normal;
  font-size: 24px;
  margin: 0;
  color: #383838;
  margin-bottom: 16px;
`;

const ScrollWrapper = styled.div`
  display: flex;
  overflow-x: auto;
  overflow-y: hidden;
  flex-wrap: nowrap;
  width: 100%;
  height: 100%;
`;

const CardWrapper = styled.div`
  position: relative;
`;

const NextPage = styled.a`
  width: 40px;
  height: 40px;
  display: none;
  position: absolute;
  left: calc(100% - 20px);
  top: calc(50% - 65px);
  background-image: url(${nextpage});
  background-size: cover;
  z-index: 1;
  cursor: pointer;

  ${media.lg`
    display: block;
  `};
`;

export default () => (
  <Section>
    <Title>Similar listings</Title>
    <CardWrapper>
      <div className="row">
        <ScrollWrapper>
          <div className="col-xs-10 col-md-5 col-lg-4">
            <Card
              img={card1}
              type="Entire apartment · 3 beds"
              descr="Apartamento, piscina y parqueadero para 8 personas"
              price="$50"
              stars={5}
              reviews="4"
            />
          </div>

          <div className="col-xs-10 col-md-5 col-lg-4">
            <Card
              img={card2}
              isRed={true}
              type="Entire apartment  ·  4 beds"
              descr="Full apartment in the best area of the city"
              price="$51"
              isNew={true}
            />
          </div>

          <div className="col-xs-10 col-md-5 col-lg-4">
            <Card
              img={card3}
              isRed={true}
              type="Entire apartment  ·  4 beds"
              descr="Beautiful Apartament North Armenia Quindio"
              price="$45"
              stars={5}
              reviews="3"
            />
          </div>
        </ScrollWrapper>
      </div>
      <NextPage />
    </CardWrapper>
  </Section>
);
