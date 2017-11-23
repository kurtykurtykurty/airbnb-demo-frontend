import React from "react";
import styled from "styled-components";
import DropContainer from "../DropContainer";
import Option from "./Option";
import MobileGuests from "./MobileGuests";

const DropContainerGuests = styled(DropContainer)`
  width: 326px;
`;

const Content = styled.div`
  padding: 0px 15px 0 24px;
  display: flex;
  flex-direction: column;
  margin-top: 31px;
`;

export default props => (
  <div>
    <div className="hidden-xs hidden-sm ">
      <DropContainerGuests>
        <Content>
          <Option ageName="Adults" />
          <Option ageName="Children" ageDescr="Ages 2 — 12" />
          <Option ageName="Infants" ageDescr="Under 2" />
        </Content>
      </DropContainerGuests>
    </div>
    <div className="hidden-md hidden-lg hidden-xl">
      <MobileGuests onCancel={props.onCancel} />
    </div>
  </div>
);
