import React from "react";
import styled from "styled-components";
import { DayPickerRangeController } from "react-dates";
import cross from "./cross.svg";
import arr from "./arr.svg";

const Wrapper = styled.div`
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
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 16px;
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

const Arrow = styled.img`
  margin-left: 8px;
  margin-right: 8px;
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

const Picker = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 36px;
  margin-bottom: 8px;
`;

const CheckIn = styled.div`
  color: #0f7276;
  font-family: CircularAir, sans-serif;
  line-height: normal;
  font-size: 18px;
  margin-left: 8px;
  margin-right: 8px;
  border-bottom: 1px solid #008489;
  font-weight: 200;
`;

const CheckOut = styled(CheckIn)`
  color: #636363;
  border-bottom: none;
`;

export default props => (
  <Wrapper>
    <Header>
      <Close onClick={props.onCancel} />
      <Title>When</Title>
      <Reset>Reset</Reset>
    </Header>
    <Picker>
      <CheckIn>Check-in</CheckIn>
      <Arrow src={arr} />
      <CheckOut>Check-out</CheckOut>
    </Picker>
    <DayPickerRangeController {...props} />
  </Wrapper>
);
