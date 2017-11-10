import React from "react";
import styled from "styled-components";
import img1 from "./img1.png";
import img2 from "./img2.png";
import img3 from "./img3.png";
import star from "./star.png";

const Homes = styled.section`
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
  background: #ffffff;
  box-sizing: border-box;
  font-family: CircularAir;
  line-height: normal;
  color: #383838;

  text-align: left;
`;
const CardFooter = styled.div`
  display: flex;
  font-family: Circular Air;
  line-height: normal;
  font-size: 15px;
  color: #383838;
  justify-content: flex-start;
  padding: 6px 0 0 0;
`;
const Caption = styled.span`
  line-height: normal;
  font-weight: bold;
  font-size: 15px;
`;
const Price = styled.span`
  font-weight: bold;
  margin-right: 4px;
  font-size: 15px;
`;
const Star = styled.img`margin: 0 4px 0 0;`;
const RatingSec = styled.div``;
const ImgCard = styled.img`
  width: 100%;
  height: 100%;
`;
const Reviews = styled.span`
  font-family: CircularAir;
  line-height: 14px;
  font-size: 12px;
  color: #383838;
  font-weight: normal;
  margin: 0 0 0 8px;
`;
const Info = styled.div`
  font-family: CircularAir;
  line-height: 18px;
  font-size: 15px;
  font-weight: 200;
  color: #383838;
  padding: 6px 0 0 0;
`;
export default function() {
  return (
    <div className="container">
      <Homes>
        <TitleSection>Homes</TitleSection>
        <div className="row">
          <div className="col-4">
            <Card>
              <ImgCard src={img1} />
              <Price>$82</Price>
              <Caption>La Salentina, see, nature & relax</Caption>
              <Info>Entire house · 9 beds</Info>
              <CardFooter>
                <RatingSec>
                  <Star src={star} />
                  <Star src={star} />
                  <Star src={star} />
                  <Star src={star} />
                  <Star src={star} />
                </RatingSec>

                <Reviews>97 · Superhost</Reviews>
              </CardFooter>
            </Card>
          </div>

          {/* ВТОРАЯ КАРТА */}

          <div className="col-4">
            <Card>
              <ImgCard src={img2} />
              <Price>$82</Price>
              <Caption>Your private 3 bedr. riad and exclusi…</Caption>
              <Info>Entire house · 5 beds</Info>
              <CardFooter>
                <RatingSec>
                  <Star src={star} />
                  <Star src={star} />
                  <Star src={star} />
                  <Star src={star} />
                  <Star src={star} />
                </RatingSec>
                <Reviews>161 · Superhost</Reviews>
              </CardFooter>
            </Card>
          </div>

          {/* ТРЕТЬЯ КАРТА */}

          <div className="col-4">
            <Card>
              <ImgCard src={img3} />
              <Price>$200</Price>
              <Caption>Dreamy Tropical Tree House</Caption>
              <Info>Entire treehouse · 1 bed</Info>
              <CardFooter>
                <RatingSec>
                  <Star src={star} />
                  <Star src={star} />
                  <Star src={star} />
                  <Star src={star} />
                  <Star src={star} />
                </RatingSec>
                <Reviews>364 · Superhost</Reviews>
              </CardFooter>
            </Card>
          </div>
        </div>
      </Homes>
    </div>
  );
}
