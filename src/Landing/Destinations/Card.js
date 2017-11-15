import React from "react";
import styled from "styled-components";
import { media } from "../../media";

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

export default props => (
  <Card>
    <ImgCard src={props.img} />
    <Caption>{props.caption}</Caption>
  </Card>
);
