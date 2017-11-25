import React from "react";
import styled from "styled-components";
import Option from "./Option";

import home from "./home.svg";
import proom from "./proom.svg";
import sroom from "./sroom.svg";

export default props => (
  <div>
    <Option
      typeroom="Entrie Home"
      descr="Have a place to yourself"
      roomimg={home}
    />

    <Option
      typeroom="Private room"
      descr="Have your own room and share some common spaces"
      roomimg={proom}
    />

    <Option
      typeroom="Shared room"
      descr="Stay in a shared space, like a common room"
      roomimg={sroom}
    />
  </div>
);
