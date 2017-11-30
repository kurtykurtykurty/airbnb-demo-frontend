import React from "react";
import styled from "styled-components";
import { CheckBox } from "../../../UI";

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
  cursor: pointer;
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

const Container = styled.div`
  width: 100%;
  margin-top: 24px;
`;

export const Option = props => (
  <Label onClick={() => props.onChange(props.id, !props.isActive)}>
    <CheckBox isActive={props.isActive} />
    {props.label}
  </Label>
);

export default props => (
  <Filter>
    <Container>{props.children}</Container>
    <SeeAll>
      {props.seeAll}
      <Arrow src={arrow} />
    </SeeAll>
  </Filter>
);
