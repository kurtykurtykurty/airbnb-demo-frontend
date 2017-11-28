import React from "react";
import styled from "styled-components";
import { media } from "../media";

import minus from "./minus.svg";
import plus from "./plus.svg";

import checkboxoff from "./chkbx-off.svg";
import checkboxon from "./chkbx-on.svg";

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
  background: url(${props => (props.isActive ? checkboxon : checkboxoff)});
  cursor: pointer;
`;
