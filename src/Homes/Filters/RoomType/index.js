import React from "react";
import styled from "styled-components";
import DropContainer from "../DropContainer";

import Content from "./Content";

const Wrapper = styled.div`
  padding: 0px 16px 0 16px;
`;

export default props => (
  <DropContainer>
    <Wrapper>
      <Content data={props.data} onChange={props.onRoomTypeChanged} />
    </Wrapper>
  </DropContainer>
);
