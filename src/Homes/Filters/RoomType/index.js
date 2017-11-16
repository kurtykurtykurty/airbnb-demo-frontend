import React from "react";
import styled from "styled-components";
import DropContainer from "../DropContainer";

import chkbx from "./chkbx.png";
import home from "./home.png";
import proom from "./proom.png";
import sroom from "./sroom.png";

const Chk = styled.img`
  box-sizing: border-box;
  width: 24px;
  height: 24px;
  margin-right: 12px;
`;

const Option = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 15px;
`;

const Box = styled.div`
  display: flex;
  align-items: center;
  font-family: CircularAir;
  line-height: normal;
  font-size: 16px;
  color: #383838;
  font-weight: 200;
`;

const BoxWrapp = styled.div`
  display: flex;
  flex-direction: column;
  font-family: CircularAir;
  line-height: normal;
  font-size: 12px;
  font-weight: 200;
  text-align: left;
`;

const OptionRow = styled.div`
  display: flex;
  justify-content: space-between;
`;

const NoteDescr = styled.div`padding-left: 36px;`;

const Img = styled.img`
  height: 32px;
  width: 32px;
`;

const Icon = styled.div``;

export default props => (
  <DropContainer>
    <Option>
      <OptionRow>
        <BoxWrapp>
          <Box>
            <Chk src={chkbx} />Entrie Home
          </Box>
          <NoteDescr> Have a place to yourself</NoteDescr>
        </BoxWrapp>
        <Icon>
          <Img src={home} />
        </Icon>
      </OptionRow>
    </Option>

    <Option>
      <OptionRow>
        <BoxWrapp>
          <Box>
            <Chk src={chkbx} />Private room
          </Box>
          <NoteDescr>Have your own room and share some common spaces</NoteDescr>
        </BoxWrapp>
        <Icon>
          <Img src={proom} />
        </Icon>
      </OptionRow>
    </Option>

    <Option>
      <OptionRow>
        <BoxWrapp>
          <Box>
            <Chk src={chkbx} />Shared room
          </Box>
          <NoteDescr>Stay in a shared space, like a common room</NoteDescr>
        </BoxWrapp>
        <Icon>
          <Img src={sroom} />
        </Icon>
      </OptionRow>
    </Option>
  </DropContainer>
);
