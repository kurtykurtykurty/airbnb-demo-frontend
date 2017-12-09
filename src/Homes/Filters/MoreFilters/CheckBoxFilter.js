import React from "react";
import styled from "styled-components";
import { CheckBox } from "../../../UI";

import arrow from "./arrowdown.svg";

const Filter = styled.div`
  text-align: left;
`;

const StOption = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 14px;
  width: 50%;
  flex-basis: 50%;
  cursor: pointer;
`;

const Label = styled.div`
  font-family: CircularAir;
  font-size: 18px;
  font-weight: 200;
  text-align: left;
  color: #383838;
`;

const SeeAll = styled.a`
  font-family: CircularAir;
  font-size: 16px;
  color: #0f7276;
  cursor: pointer;
  margin-top: 7px;
  cursor: pointer;
  text-decoration: none;
  tabindex: 1;
`;

const Arrow = styled.img`
  width: 12px;
  height: 7px;
  margin-left: 8px;
`;

const Container = styled.div`
  width: 100%;
  margin-top: 24px;
  display: flex;
  flex-wrap: wrap;
`;

export const Option = props => (
  <StOption onClick={() => props.onChange(props.id, !props.isActive)}>
    <CheckBox isActive={props.isActive} />
    <Label>{props.label}</Label>
  </StOption>
);

export default props => (
  <Filter>
    <Container>{props.children}</Container>
    <SeeAll href="">
      {props.seeAll}
      <Arrow src={arrow} />
    </SeeAll>
  </Filter>
);
