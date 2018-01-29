import React from "react";
import styled from "styled-components";
import { media } from "../../media";

const Card = styled.div`
  display: flex;
  flex-direction: column;
  background: #ffffff;
  box-sizing: border-box;
  font-family: CircularAir, sans-serif;
  line-height: normal;
  color: #383838;
  text-align: left;
`;

const CardFooter = styled.div`
  display: flex;
  font-family: CircularAir;
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
  font-family: CircularAir, sans-serif;
  line-height: normal;
  font-weight: bold;
  font-size: 14px;
  color: #383838;
  padding-top: 2px;

  ${media.md`
    font-size: 18px;
  `};
`;

const Name = styled.div`
  font-family: CircularAir, sans-serif;
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
  font-family: CircularAir, sans-serif;
  line-height: normal;
  font-size: 18px;
  font-weight: 200;
  color: #383838;
  mix-blend-mode: normal;
  opacity: 0.9;
`;

const Description = styled.div`
  margin-top: 7px;

  ${media.md`
    margin-top: 12px;
  `};
`;

export default props => (
  <Card>
    <ImgCard src={props.img} />
    <Description>
      <Name>{props.name}</Name>
      <Caption>{props.caption}</Caption>
    </Description>
    <CardFooter>
      <Price>{props.price}</Price>
    </CardFooter>
  </Card>
);
