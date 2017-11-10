import React from "react";
import styled from "styled-components";
import img1 from "./img1.png";
import img2 from "./img2.png";
import img3 from "./img3.png";
import img4 from "./img4.png";
import img5 from "./img5.png";
import img6 from "./img6.png";

const Destination = styled.section`
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
const Caption = styled.span`
  font-family: CircularAir;
  line-height: 18px;
  font-weight: bold;
  font-size: 15px;
  color: #383838;
`;
const ImgCard = styled.img`
  width: 100%;
  height: 100%;
`;

export default function() {
  return (
    <div className="container">
      <Destination>
        <div className="row">
          <div className="col-2">
            <Card>
              <ImgCard src={img1} />
              <Caption>Paris</Caption>
            </Card>
          </div>

          <div className="col-2">
            <Card>
              <ImgCard src={img2} />
              <Caption>Miami</Caption>
            </Card>
          </div>

          <div className="col-2">
            <Card>
              <ImgCard src={img3} />
              <Caption>Tokyo</Caption>
            </Card>
          </div>

          <div className="col-2">
            <Card>
              <ImgCard src={img4} />
              <Caption>Cape Town</Caption>
            </Card>
          </div>

          <div className="col-2">
            <Card>
              <ImgCard src={img5} />
              <Caption>Seoul</Caption>
            </Card>
          </div>
          <div className="col-2">
            <Card>
              <ImgCard src={img6} />
              <Caption>Los Angeles</Caption>
            </Card>
          </div>
        </div>
      </Destination>
    </div>
  );
}
