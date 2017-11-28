import React from "react";
import styled from "styled-components";
import Option from "./Option";

import home from "./home.svg";
import proom from "./proom.svg";
import sroom from "./sroom.svg";

export default function(props) {
  console.log("Wroom type props", props);

  return (
    <div>
      <Option
        id="entrie"
        onChange={props.onChange}
        typeroom="Entrie Home"
        descr="Have a place to yourself"
        roomimg={home}
        isActive={props.data.entrie}
      />

      <Option
        id="private"
        onChange={props.onChange}
        typeroom="Private room"
        descr="Have your own room and share some common spaces"
        roomimg={proom}
        isActive={props.data.private}
      />

      <Option
        id="shared"
        onChange={props.onChange}
        typeroom="Shared room"
        descr="Stay in a shared space, like a common room"
        roomimg={sroom}
        isActive={props.data.shared}
      />
    </div>
  );
}
