import React from "react";
import styled from "styled-components";
import { media } from "../media";

import minus from "./minus.svg";
import plus from "./plus.svg";

import checkboxSlideroff from "./checkboxSlider-off.svg";
import checkboxSlideron from "./checkboxSlider-on.svg";

import checkboxon from "./checkbox-on.svg";
import checkboxoff from "./checkbox-off.svg";

export const Minus = styled.button`
  width: 32px;
  height: 32px;
  border: none;
  background: url(${minus});
  cursor: pointer;
  opacity: ${props => (props.isActive ? 1 : 0.2)};
`;

export const Plus = styled.button`
  width: 32px;
  height: 32px;
  border: none;
  background: url(${plus});
  cursor: pointer;
  opacity: ${props => (props.isActive ? 1 : 0.2)};
`;

export const CheckBoxSlider = styled.button`
  width: 64px;
  height: 40px;
  border: none;
  background: url(${props =>
    props.isActive ? checkboxSlideron : checkboxSlideroff});
  cursor: pointer;
`;

export const CheckBox = styled.button`
  box-sizing: border-box;
  width: 24px;
  height: 24px;
  margin-right: 12px;
  border: none;
  background: url(${props => (props.isActive ? checkboxon : checkboxoff)});
  cursor: pointer;
`;
