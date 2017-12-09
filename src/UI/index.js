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

const CheckboxImage = styled.img`
  display: ${props => (props.isActive ? "block" : "none")};
`;

const StCheckBoxSlider = styled.button`
  width: 64px;
  height: 40px;
  border: none;
  cursor: pointer;
  padding: 0px;
  background: none;
`;

export const CheckBoxSlider = props => (
  <StCheckBoxSlider onClick={props.onClick}>
    <CheckboxImage src={checkboxSlideron} isActive={props.isActive} />
    <CheckboxImage src={checkboxSlideroff} isActive={!props.isActive} />
  </StCheckBoxSlider>
);

const StCheckBox = styled.button`
  box-sizing: border-box;
  width: 24px;
  height: 24px;
  margin-right: 12px;
  border: none;
  cursor: pointer;
  padding: 0px;
  background: none;
`;

export const CheckBox = props => (
  <StCheckBox>
    <CheckboxImage src={checkboxon} isActive={props.isActive} />
    <CheckboxImage src={checkboxoff} isActive={!props.isActive} />
  </StCheckBox>
);
