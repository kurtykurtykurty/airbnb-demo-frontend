import React from "react";
import styled from "styled-components";
import { media } from "../../../media";

import NumInput from "./NumInput";

const Option = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 18px;
`;

const Age = styled.div`
  font-family: CircularAir;
  line-height: normal;
  font-size: 18px;
  color: #383838;

  ${media.md`
    font-size: 20px; 
  `};
`;

const AgeDescription = styled.div`
  font-family: CircularAir;
  line-height: normal;
  font-weight: 200;
  color: #383838;
  margin-top: 7px;
  font-size: 14px;

  ${media.md`
    font-size: 16px;
  `};
`;

const AgeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
`;

function bound(value, min, max) {
  return value < min ? min : value && value > max ? max : value;
}

export default props => (
  <Option>
    <AgeWrapper>
      <Age>{props.ageName}</Age>
      <AgeDescription>{props.ageDescr}</AgeDescription>
    </AgeWrapper>
    <NumInput
      value={props.value}
      max={props.max}
      min={props.min}
      onChange={value =>
        props.onChange(props.id, bound(value, props.min, props.max))
      }
    />
  </Option>
);
