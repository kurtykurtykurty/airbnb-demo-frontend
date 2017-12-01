import React from "react";
import styled from "styled-components";

const Card = styled.div`
  display: flex;
  flex-direction: column;
  background: #ffffff;
  box-sizing: border-box;
  font-family: CircularAir, sans-serif;
  line-height: normal;
  color: #383838;
  text-align: left;
  cursor: pointer;
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

const Star = styled.img`
  margin: 0 4px 0 0;
`;

const RatingSec = styled.div``;

const ImgCard = styled.img`
  width: 100%;
  height: 100%;
`;

const Reviews = styled.span`
  font-family: CircularAir, sans-serif;
  line-height: 14px;
  font-size: 12px;
  color: #383838;
  font-weight: normal;
  margin: 0 0 0 8px;
`;

const Info = styled.div`
  font-family: CircularAir, sans-serif;
  line-height: 18px;
  font-size: 15px;
  font-weight: 200;
  color: #383838;
  padding: 2px 0 0 0;
`;

const Description = styled.div`
  margin-top: 8px;
`;

export default props => (
  <Card>
    <ImgCard src={props.img} />
    <Description>
      <Price>{props.price}</Price>
      <Caption>{props.caption}</Caption>
    </Description>
    <Info>{props.info}</Info>
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
