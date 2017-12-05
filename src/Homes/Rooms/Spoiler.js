import React from "react";
import styled from "styled-components";

import arrow from "./arrow.svg";

const Spoiler = styled.div`
  font-family: CircularAir;
  line-height: normal;
  font-size: 16px;
  color: #0f7276;
  cursor: pointer;
`;

const Img = styled.img`
  margin-left: 8px;
  width: 11px;
  height: 6px;
`;
export default props => (
  <Spoiler>
    {props.children}
    <Img src={arrow} />
  </Spoiler>
);
