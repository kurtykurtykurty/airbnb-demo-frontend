import React from "react";
import styled from "styled-components";
import DropContainer from "../DropContainer";
import Option from "./Option";

const DropContainerGuests = styled(DropContainer)`
  width: 326px;
  height: 291px;
`;

const Content = styled.div`
  padding: 0px 15px 0 24px;
  display: flex;
  flex-direction: column;
  margin-top: 31px;
`;

export default props => (
  <DropContainerGuests {...props}>
    <Content>
      <Option ageName="Adaults" />
      <Option ageName="Children" ageDescr="Ages 2 — 12" />
      <Option ageName="Infants" ageDescr="Under 2" />
    </Content>
  </DropContainerGuests>
);
