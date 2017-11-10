import React from "react";
import styled from "styled-components";
import { SectionTitleExtented } from "../Section";
import img1 from "./img1.png";
import img2 from "./img2.png";
import img3 from "./img3.png";
import img4 from "./img4.png";

const Food = styled.section`
  margin: 48px 0 48px 0;
  font-family: CircularAir;
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
  padding: 4px 0 0 0;
`;
const Caption = styled.span`
  font-family: CircularAir;
  line-height: normal;
  font-weight: bold;
  font-size: 18px;
  color: #383838;
`;
const Name = styled.div`
  font-family: CircularAir;
  line-height: normal;
  font-size: 10px;
  text-transform: uppercase;
  font-weight: bold;
  color: #383838;
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
export default function() {
  return (
    <div className="container">
      <Food>
        <SectionTitleExtented name="Popular reservations around the world" />
        <div className="row">
          <div className="col-3">
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

          <div className="col-3">
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

          <div className="col-3">
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

          <div className="col-3">
            <Card>
              <ImgCard src={img4} />
              <Name>Fine seafood</Name>
              <Caption>Seaprice</Caption>

              <CardFooter>
                <Price>About $70 per person</Price>
              </CardFooter>
            </Card>
          </div>
        </div>
      </Food>
    </div>
  );
}
