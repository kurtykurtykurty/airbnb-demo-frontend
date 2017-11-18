import React from "react";
import styled from "styled-components";
import DropContainer from "../DropContainer";
import Option from "./Option";

import home from "./home.svg";
import proom from "./proom.svg";
import sroom from "./sroom.svg";

const Content = styled.div`padding: 10px 16px 0 16px;`;

export default props => (
  <DropContainer {...props}>
    <Content>
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
    </Content>
  </DropContainer>
);
