import React from "react";
import styled from "styled-components";

import checkbox from "./chkbx.svg";
import arrow from "./arrowdown.svg";

const Filter = styled.div`
  text-align: left;
`;

const Row = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: left;
  margin-top: 25px;
`;

const Label = styled.div`
  display: inline-block;
  font-family: CircularAir;
  line-height: normal;
  font-size: 18px;
  font-weight: 200;
  text-align: left;
  color: #383838;
  margin-bottom: 14px;
  width: 50%;
`;

const CheckBox = styled.button`
  border: none;
  width: 24px;
  height: 24px;
  background: url(${checkbox});
  margin-right: 12px;
`;

const SeeAll = styled.a`
  font-family: CircularAir;
  line-height: normal;
  font-size: 16px;
  color: #0f7276;
  cursor: pointer;
  margin-top: 7px;
  cursor: pointer;
`;

const Arrow = styled.img`
  width: 12px;
  height: 7px;
  margin-left: 8px;
`;

export const Amenity = props => (
  <Label>
    <CheckBox />
    {props.label}
  </Label>
);

const Container = styled.div`
  width: 100%;
  margin-top: 24px;
`;

export default props => (
  <Filter>
    <Container>{props.children}</Container>
    <SeeAll>
      {props.seeall}
      <Arrow src={arrow} />
    </SeeAll>
  </Filter>
);
