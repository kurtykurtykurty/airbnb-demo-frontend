import React from "react";
import styled from "styled-components";
import {
  SectionTitleExtented,
  NextPage,
  ScrollWrapper,
  Section
} from "../Section";
import img1 from "./img1.png";
import img2 from "./img2.png";
import img3 from "./img3.png";
import star from "./star.png";

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
const CardWrapper = styled.div`position: relative;`;
export default function() {
  return (
    <Section>
      <div className="container">
        <SectionTitleExtented name="Homes" />
        <div className="row">
          <ScrollWrapper>
            <div className="col-xs-8 col-md-5 col-lg-4">
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

            <div className="col-xs-8 col-md-5 col-lg-4">
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

            <div className="col-xs-8 col-md-5 col-lg-4">
              <Card>
                <CardWrapper>
                  <ImgCard src={img3} />
                  <NextPage />
                </CardWrapper>
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
          </ScrollWrapper>
        </div>
      </div>
    </Section>
  );
}
