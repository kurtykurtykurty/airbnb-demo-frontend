import React from "react";
import styled from "styled-components";
import Stars from "../Stars";

import like from "./like.svg";

const Card = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  background: #ffffff;
  cursor: pointer;
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
`;

const Like = styled.div`
  background: url(${like});
  background-size: 100%;
  position: absolute;
  width: 30px;
  height: 26px;
  right: 8px;
  top: 8px;
`;

const TypeRoom = styled.div`
  margin-top: 12px;
  font-family: CircularAir;
  line-height: normal;
  font-size: 10px;
  text-transform: uppercase;
  font-weight: bold;
  color: ${props => (props.isRed ? "#8D1F13" : "#383838")};
`;

const Description = styled.div`
  font-family: CircularAir;
  line-height: normal;
  font-size: 15px;
  font-weight: bold;
  color: #383838;
  margin-top: 2px;
`;

const Price = styled.div`
  font-family: CircularAir;
  line-height: normal;
  font-size: 15px;
  font-weight: 200;
  color: #383838;
  margin-top: 2px;
`;

const Rating = styled.div`
  display: flex;
  align-items: center;
  margin-top: 6px;
  font-family: CircularAir;
  line-height: normal;
  font-size: 12px;
  color: #383838;
`;

const New = styled.div`
  display: ${props => (props.isNew ? "block" : "none")};
  width: 40px;
  height: 24px;
  background: #008489;
  border-radius: 2px;
`;

const Label = styled.div`
  font-family: CircularAir;
  line-height: normal;
  font-size: 12px;
  text-transform: uppercase;
  color: #ffffff;
  margin-top: 4px;
  margin-left: 5px;
`;

export default function(props) {
  console.log("isRed", props.isRed);
  return (
    <Card>
      <Like />
      <Img src={props.img} />
      <TypeRoom isRed={props.isRed}>{props.type}</TypeRoom>
      <Description>{props.descr}</Description>
      <Price>{props.price} per night</Price>
      <Rating>
        <Stars num={props.stars} size="min" />
        {props.reviews}
      </Rating>
      <New isNew={props.isNew}>
        <Label>New</Label>
      </New>
    </Card>
  );
}
