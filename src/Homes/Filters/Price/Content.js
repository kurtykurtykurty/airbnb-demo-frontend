import React from "react";
import styled from "styled-components";
import Rheostat from "rheostat";
import price from "./price.svg";
import { media } from "../../../media";

import "./slider.css";

const Content = styled.div`
  margin: 24px 16px 12px 16px;
  display: flex;
  flex-direction: column;
`;

const RangePrice = styled.div`
  font-family: CircularAir;
  line-height: normal;
  font-size: 16px;
  color: #383838;
  font-weight: 200;
  text-align: left;
  margin-bottom: 7px;

  ${media.md`
    font-size: 18px;
  `};
`;

const Average = styled.div`
  font-family: CircularAir;
  line-height: normal;
  font-size: 12px;
  font-weight: 200;
  color: #383838;
  text-align: left;
  margin-bottom: 32px;

  ${media.md`
    font-size: 14px;
  `};
`;

const Price = styled.div`
  display: flex;
  background: url(${price});
  background-repeat: no-repeat;
  align-items: flex-end;
  flex-direction: column;
  justify-content: flex-end;
  height: 94px;
  ${"" /* background-size: 100% 100%; */} background-position-y: calc(100% - 15px);
  background-position-x: center;
`;

const RheoWrap = styled.div`
  width: 100%;
`;

export function getPriceButtonLabel(min, max, minRange, maxRange) {
  if (min === minRange && max === maxRange) return "Price";
  if (min === minRange) return "To " + max + "$";
  if (max === maxRange) return "From " + min + "$";
  return "From " + min + "$" + " — To " + max + "$";
}

export default function(props) {
  return (
    <Content>
      <RangePrice>
        {props.data.min}$ — {props.data.max}$
      </RangePrice>
      <Average>The average nightly price is $75.</Average>
      <Price>
        <RheoWrap>
          <Rheostat
            min={props.range.min}
            max={props.range.max}
            values={[props.data.min, props.data.max]}
            onValuesUpdated={values =>
              props.onChange({ min: values.values[0], max: values.values[1] })
            }
          />
        </RheoWrap>
      </Price>
    </Content>
  );
}
