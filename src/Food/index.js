import React from "react";
import styled from "styled-components";
import {
  SectionTitleExtented,
  NextPage,
  Section,
  ScrollWrapper
} from "../Section";
import img1 from "./img1.png";
import img2 from "./img2.png";
import img3 from "./img3.png";
import img4 from "./img4.png";
import { media } from "../media";

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
  font-size: 12px;
  color: #383838;
  justify-content: flex-start;
  padding: 4px 0 0 0;

  ${media.md`
    font-size: 18px;
  `};
`;
const Caption = styled.span`
  font-family: CircularAir;
  line-height: normal;
  font-weight: bold;
  font-size: 14px;
  color: #383838;

  ${media.md`
    font-size: 18px;
  `};
`;
const Name = styled.div`
  font-family: CircularAir;
  line-height: normal;
  font-size: 8px;
  text-transform: uppercase;
  font-weight: bold;
  color: #383838;

  ${media.md`
    font-size: 10px;
  `};
`;

const ImgCard = styled.img`
  width: 100%;
  height: 100%;
`;
const Price = styled.span`
  font-family: CircularAir;
  line-height: normal;
  font-size: 18px;
  font-weight: 200;
  color: #383838;
  mix-blend-mode: normal;
  opacity: 0.9;
`;
const CardWrapper = styled.div`position: relative;`;
export default function() {
  return (
    <Section>
      <div className="container">
        <CardWrapper>
          <SectionTitleExtented name="Popular reservations around the world" />
          <div className="row">
            <ScrollWrapper>
              <div className="col-xs-6 col-xs-4 col-lg-3">
                <Card>
                  <ImgCard src={img1} />
                  <Name>SPEAKEASY</Name>
                  <Caption>Chumley’s</Caption>

                  <CardFooter>
                    <Price>About $60 per person</Price>
                  </CardFooter>
                </Card>
              </div>

              {/* ВТОРАЯ КАРТА */}

              <div className="col-xs-6 col-xs-4 col-lg-3">
                <Card>
                  <ImgCard src={img2} />
                  <Name>Korean gastropub</Name>
                  <Caption>Hanjan</Caption>

                  <CardFooter>
                    <Price>About $50 per person</Price>
                  </CardFooter>
                </Card>
              </div>

              {/* ТРЕТЬЯ КАРТА */}

              <div className="col-xs-6 col-xs-4 col-lg-3">
                <Card>
                  <ImgCard src={img3} />
                  <Name>German american</Name>
                  <Caption>Prime Meats</Caption>

                  <CardFooter>
                    <Price>About $55 per person</Price>
                  </CardFooter>
                </Card>
              </div>

              {/* ЧЕТВЕРТАЯ КАРТА */}

              <div className="col-xs-6 col-xs-4 col-lg-3">
                <Card>
                  <ImgCard src={img4} />

                  <Name>Fine seafood</Name>
                  <Caption>Seaprice</Caption>

                  <CardFooter>
                    <Price>About $70 per person</Price>
                  </CardFooter>
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
