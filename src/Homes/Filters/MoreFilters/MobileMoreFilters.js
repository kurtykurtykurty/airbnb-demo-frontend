import React from "react";
import styled from "styled-components";
import Content from "./Content";
import cross from "../Dates/cross.svg";
import { ScrollContainer } from "./index";

const MobileContainer = styled.div`
  left: 0px;
  top: 0px;
  width: 100%;
  height: 100%;
  background: white;
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

export default function(props) {
  return (

  );
}
