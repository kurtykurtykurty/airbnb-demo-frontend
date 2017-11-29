import React from "react";
import styled from "styled-components";
import { media } from "../../../media";

const Footer = styled.div`
  position: absolute;
  bottom: 0px;
  width: 100%;
  margin-left: 16px;
  margin-right: 30px;
  justify-content: center;
  z-index: 2;

  ${media.lg`
    margin: auto;
  `};
`;

const Wrapper = styled.div`
  padding-bottom: 8px;
  display: flex;
  align-items: center;
  background: #fff;
  margin-right: 34px;
  justify-content: center;

  ${media.lg`
    justify-content: flex-end;
  `};
`;

const Cancel = styled.button`
  border: none;
  display: none;
  background: #fff;
  border-radius: 4px;
  color: #383838;
  font-family: CircularAir;
  line-height: normal;
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;
  padding: 12px 16px 13px 16px;

  ${media.md`
    display:block;
  `};
`;

const SeeHomes = styled.button`
  border: none;
  border-radius: 4px;
  color: #fff;
  font-family: CircularAir;
  line-height: normal;
  font-weight: bold;
  cursor: pointer;
  background: #ff5a5f;
  font-size: 18px;
  padding: 12px 28px 13px 28px;
  width: 100%;

  ${media.md`
    background: #008489;
    width: auto;
  `};
`;

export default props => (
  <Footer>
    <Wrapper>
      <Cancel onClick={props.onCancel}>Cancel</Cancel>
      <SeeHomes>See Homes</SeeHomes>
    </Wrapper>
  </Footer>
);
