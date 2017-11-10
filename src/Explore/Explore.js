import React from "react";
import styled from "styled-components";
import img1 from "./card1.png";
import img2 from "./card2.png";
import img3 from "./card3.png";

const Explore = styled.section`
  margin: 48px 0 48px 0;
  font-family: CircularAir;
`;

const TitleSection = styled.h2`
  font-family: CircularAir;
  line-height: 34px;
  font-size: 32px;
  color: #383838;
  text-align: left;
`;

const Card = styled.div`
  display: flex;
  align-items: center;
  background: #ffffff;
  border: 1px solid rgba(72, 72, 72, 0.2);
  box-sizing: border-box;
  box-shadow: 0px 2px 4px rgba(72, 72, 72, 0.08);
  border-radius: 4px;
  font-family: CircularAir;
  line-height: normal;
  font-size: 17px;
  color: #383838;
  font-weight: bold;
`;
const ImgCard = styled.img`margin: 0 24px 0 0;`;
export default function() {
  return (
    <div className="container">
      <Explore>
        <TitleSection>Explore Airbnb</TitleSection>
        <div className="row">
          <div className="col-4">
            <Card>
              <ImgCard src={img1} />Home
            </Card>
          </div>
          <div className="col-4">
            <Card>
              <ImgCard src={img2} />Experiences
            </Card>
          </div>
          <div className="col-4">
            <Card>
              <ImgCard src={img3} />Restaurants
            </Card>
          </div>
        </div>
      </Explore>
    </div>
  );
}
