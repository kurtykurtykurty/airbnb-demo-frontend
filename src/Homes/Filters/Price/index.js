import React from "react";
import DropContainer from "../DropContainer";
import Content from "./Content";
import "./slider.css";

export default function(props) {
  return (
    <DropContainer onApply={props.onApply} onCancel={props.onCancel}>
      <Content
        data={props.data}
        range={props.range}
        onChange={props.onFilterChanged}
      />
    </DropContainer>
  );
}
