import React from "react";
import styled from "styled-components";
import Content from "./Content";
import cross from "../Dates/cross.svg";

const MobileContainer = styled.div`
  position: fixed;
  left: 0px;
  top: 0px;
  width: 100%;
  height: 100%;
  background: white;
  z-index: 5;
`;

const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 16px 8px;
  box-shadow: 0px 0.5px 0px rgba(72, 72, 72, 0.3);
`;

const Close = styled.button`
  background: url(${cross});
  background-position: center;
  background-repeat: no-repeat;
  height: 26px;
  width: 26px;
  cursor: pointer;
  border: none;
`;

const Title = styled.div`
  font-family: CircularAir, sans-serif;
  line-height: normal;
  font-size: 14px;
  color: #383838;
`;

const Reset = styled.div`
  font-family: CircularAir, sans-serif;
  color: #0f7276;
  line-height: normal;
  font-size: 14px;
  cursor: pointer;
`;

export default props => (
  <MobileContainer className="hidden-md hidden-lg hidden-xl">
    <div className="container">
      <Header>
        <Close onClick={props.onCancel} />
        <Title>Guest</Title>
        <Reset>Reset</Reset>
      </Header>
      <Content
        data={props.data}
        onRoomTypeChanged={props.onRoomTypeChanged}
        //Price props
        range={props.range}
        min={props.min}
        max={props.max}
        onPriceChanged={props.onPriceChanged}
      />
    </div>
  </MobileContainer>
);
