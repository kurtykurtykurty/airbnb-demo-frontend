import React from "react";
import styled from "styled-components";
import img1 from "./img1.png";
import img2 from "./img2.png";
import img3 from "./img3.png";
import img4 from "./img4.png";
import star from "./star.png";

const Experiences = styled.section`
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
`;
const Caption = styled.span`
  line-height: normal;
  font-weight: light;
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
  font-family: Circular Air;
  line-height: 14px;
  font-size: 12px;
  color: #383838;
  font-weight: normal;
  margin: 0 0 0 8px;
`;
export default function() {
  return (
    <div className="container">
      <Experiences>
        <TitleSection>Experiences</TitleSection>
        <div className="row">
          <div className="col-3">
            <Card>
              <ImgCard src={img1} />
              <Price>$29</Price>
              <Caption>Forest Therapy</Caption>

              <CardFooter>
                <RatingSec>
                  <Star src={star} />
                  <Star src={star} />
                  <Star src={star} />
                  <Star src={star} />
                  <Star src={star} />
                </RatingSec>
                <Reviews>46 reviews</Reviews>
              </CardFooter>
            </Card>
          </div>

          {/* ВТОРАЯ КАРТА */}

          <div className="col-3">
            <Card>
              <ImgCard src={img2} />
              <Price>$69</Price>
              <Caption>Whale watching</Caption>

              <CardFooter>
                <RatingSec>
                  <Star src={star} />
                  <Star src={star} />
                  <Star src={star} />
                  <Star src={star} />
                  <Star src={star} />
                </RatingSec>
                <Reviews>44 reviews</Reviews>
              </CardFooter>
            </Card>
          </div>

          {/* ТРЕТЬЯ КАРТА */}

          <div className="col-3">
            <Card>
              <ImgCard src={img3} />
              <Price>$69</Price>
              <Caption>Table Mountain Summit, Cable Car Down</Caption>

              <CardFooter>
                <RatingSec>
                  <Star src={star} />
                  <Star src={star} />
                  <Star src={star} />
                  <Star src={star} />
                  <Star src={star} />
                </RatingSec>
                <Reviews>44 reviews</Reviews>
              </CardFooter>
            </Card>
          </div>

          {/* ЧЕТВЕРТАЯ КАРТА */}

          <div className="col-3">
            <Card>
              <ImgCard src={img4} />
              <Price>$50</Price>
              <Caption>Salsa Night</Caption>

              <CardFooter>
                <RatingSec>
                  <Star src={star} />
                  <Star src={star} />
                  <Star src={star} />
                  <Star src={star} />
                  <Star src={star} />
                </RatingSec>
                <Reviews>44 reviews</Reviews>
              </CardFooter>
            </Card>
          </div>
        </div>
      </Experiences>
    </div>
  );
}
