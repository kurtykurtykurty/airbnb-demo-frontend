import React from "react";
import styled from "styled-components";
import { Minus, Plus } from "../../../UI";

const CountNumber = styled.div`
  line-height: normal;
  font-size: 18px;
  color: #383838;
  padding-top: 4px;
  margin-right: 14px;
  margin-left: 14px;
  font-weight: 200;
  width: 24px;
  height: 23px;
`;

const Counter = styled.div`
  display: flex;
  font-family: CircularAir;
  line-height: normal;
  font-size: 18px;
  color: #383838;
  line-height: normal;
`;

function bound(value, min, max) {
  return value < min ? min : value && value > max ? max : value;
}

export default function(props) {
  const { value, min, max, onChange } = props;

  const changeValue = delta => {
    onChange(bound(value + delta, min, max));
  };

  return (
    <Counter>
      <Minus onClick={() => changeValue(-1)} isActive={value > min} />
      <CountNumber>{value}</CountNumber>
      <Plus onClick={() => changeValue(1)} isActive={value < max} />
    </Counter>
  );
}
