import React from "react";
import DropContainer from "../DropContainer";
import Content from "./Content";
import "./slider.css";

export default function(props) {
  return (
    <DropContainer>
      <Content
        range={props.range}
        min={props.min}
        max={props.max}
        onChange={props.onPriceChanged}
      />
    </DropContainer>
  );
}
