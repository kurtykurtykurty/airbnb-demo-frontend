import React from "react";
import styled from "styled-components";
import { Minus, Plus } from "../../../UI";
import { media } from "../../../media";

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

export default function(props) {
  const { value, min, max, onChange } = props;

  return (
    <Counter>
      <Minus onClick={() => onChange(value - 1)} isActive={value > min} />
      <CountNumber>{value}</CountNumber>
      <Plus onClick={() => onChange(value + 1)} isActive={value < max} />
    </Counter>
  );
}
