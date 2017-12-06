import React from "react";
import styled from "styled-components";

const Img = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
`;

export default props => (
  <div className="hidden-md hidden-lg hidden-xl">
    <Img className={props.className}>{props.children}</Img>
  </div>
);
