import React from "react";
import styled from "styled-components";

import img1 from "./img1.png";
import img2 from "./img2.png";
import img3 from "./img3.png";
import img4 from "./img4.png";
import star from "./star.png";
import { media } from "../media.js";

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
  align-items: center;
  padding: 6px 0 0 0;
`;

const Caption = styled.span`
  line-height: normal;
  font-weight: 200;
  font-size: 13px;

  ${media.md`
    font-size: 15px;
  `};
`;

const Price = styled.span`
  font-weight: bold;
  margin-right: 4px;
  font-size: 13px;
  ${media.md`
    font-size: 15px;
  `};
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
  margin: 0 0 0 8px;
`;

export default props => (
  <Card>
    <ImgCard src={props.img} />
    <Price>{props.price}</Price>
    <Caption>{props.caption}</Caption>

    <CardFooter>
      <RatingSec>
        <Star src={props.star} />
        <Star src={props.star} />
        <Star src={props.star} />
        <Star src={props.star} />
        <Star src={props.star} />
      </RatingSec>
      <Reviews>{props.reviews}</Reviews>
    </CardFooter>
  </Card>
);
