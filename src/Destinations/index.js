import React from "react";
import styled from "styled-components";
import { SectionTitle, NextPage, Section, ScrollWrapper } from "../Section";
import img1 from "./img1.png";
import img2 from "./img2.png";
import img3 from "./img3.png";
import img4 from "./img4.png";
import img5 from "./img5.png";
import img6 from "./img6.png";
import { media } from "../media";

const Card = styled.div`
  background: #ffffff;
  box-sizing: border-box;
  font-family: CircularAir;
  line-height: normal;
  color: #383838;
  text-align: left;
`;
const Caption = styled.span`
  font-family: CircularAir;
  line-height: 18px;
  font-weight: bold;
  font-size: 12px;
  color: #383838;

  ${media.md`
    font-size: 15px;
  `};
`;
const ImgCard = styled.img`
  width: 100%;
  height: 100%;
`;
const CardWrapper = styled.div`position: relative;`;
export default function() {
  return (
    <Section>
      <div className="container">
        <CardWrapper>
          <SectionTitle>Featured destinations</SectionTitle>
          <div className="row">
            <ScrollWrapper>
              <div className="col-xs-4 col-md-3 col-lg-2">
                <Card>
                  <ImgCard src={img1} />
                  <Caption>Paris</Caption>
                </Card>
              </div>

              <div className="col-xs-4 col-md-3 col-lg-2">
                <Card>
                  <ImgCard src={img2} />
                  <Caption>Miami</Caption>
                </Card>
              </div>

              <div className="col-xs-4 col-md-3 col-lg-2">
                <Card>
                  <ImgCard src={img3} />
                  <Caption>Tokyo</Caption>
                </Card>
              </div>

              <div className="col-xs-4 col-md-3 col-lg-2">
                <Card>
                  <ImgCard src={img4} />
                  <Caption>Cape Town</Caption>
                </Card>
              </div>

              <div className="col-xs-4 col-md-3 col-lg-2">
                <Card>
                  <ImgCard src={img5} />
                  <Caption>Seoul</Caption>
                </Card>
              </div>
              <div className="col-xs-4 col-md-3 col-lg-2">
                <Card>
                  <ImgCard src={img6} />

                  <Caption>Los Angeles</Caption>
                </Card>
              </div>
            </ScrollWrapper>
          </div>
          <NextPage />
        </CardWrapper>
      </div>
    </Section>
  );
}
