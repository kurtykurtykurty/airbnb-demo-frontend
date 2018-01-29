import React from "react";
import styled from "styled-components";

const Button = styled.button`
  display: flex;
  height: 40px;
  border: none;
  background: #ffffff;
  align-items: center;
  text-align: center;
  box-shadow: 0px 2px 4px rgba(72, 72, 72, 0.08);
  border-radius: 4px;
  font-family: CircularAir;
  line-height: 24px;
  font-size: 14px;
  color: #383838;
  cursor: pointer;
  padding: 0 16px 0 16px;
`;

const Label = styled.div`
  margin: 8px 0 8px 12px;
  display: flex;
  text-align: center;
`;

export default props => (
  <div className="hidden-xs hidden-sm">
    <Button className={props.className}>
      {props.children}
      <Label>{props.label}</Label>
    </Button>
  </div>
);
