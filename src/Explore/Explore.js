import React from "react";
import styled from "styled-components";
import { SectionTitle, ScrollWrapper, Section } from "../Section";
import img1 from "./card1.png";
import img2 from "./card2.png";
import img3 from "./card3.png";
import img1m from "./mcard1.png";
import img2m from "./mcard2.png";
import img3m from "./mcard3.png";
import { media } from "../media.js";

const Card = styled.div`
  background: #ffffff;
  border: 1px solid rgba(72, 72, 72, 0.2);
  box-sizing: border-box;
  box-shadow: 0px 2px 4px rgba(72, 72, 72, 0.08);
  border-radius: 4px;
  color: #383838;

  ${media.md`
    display: flex;
    align-items: center;
  `};
`;
const TitleCard = styled.h2`
  line-height: normal;
  text-align: left;
  font-family: CircularAir;
  font-size: 12px;
  font-weight: bold;
  padding: 0px 0px 0px 12px;

  ${media.md`
    font-size: 17px;
    padding: 0px; 
  `};
`;
const ImgCard = styled.img`
  display: none;

  ${media.md`
    display: block;
    margin: 0 24px 0 0
  `};
`;
const ImgCardM = styled.img`
  height: 100%;
  width: 100%;

  ${media.md`
    display: none;
  `};
`;
export default function() {
  return (
    <Section>
      <div className="container">
        <SectionTitle>Explore Airbnb</SectionTitle>
        <div className="row">
          <ScrollWrapper>
            <div className="col-xs-6 col-md-5 col-lg-4">
              <Card>
                <ImgCard src={img1} />
                <ImgCardM src={img1m} />
                <TitleCard>Home</TitleCard>
              </Card>
            </div>
            <div className="col-xs-6 col-md-5 col-lg-4">
              <Card>
                <ImgCard src={img2} />
                <ImgCardM src={img2m} />
                <TitleCard>Experiences</TitleCard>
              </Card>
            </div>
            <div className="col-xs-6 col-md-5 col-lg-4">
              <Card>
                <ImgCard src={img3} />
                <ImgCardM src={img3m} />
                <TitleCard>Restaurants</TitleCard>
              </Card>
            </div>
          </ScrollWrapper>
        </div>
      </div>
    </Section>
  );
}
