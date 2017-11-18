import React from "react";
import styled from "styled-components";
import DropContainer from "../DropContainer";

import checkbox from "./chkbx.svg";
import home from "./home.svg";
import proom from "./proom.svg";
import sroom from "./sroom.svg";

const Checkbox = styled.img`
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

const BoxWrap = styled.div`
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

const Content = styled.div`padding: 10px 16px 0 16px;`;

export default props => (
  <DropContainer {...props}>
    <Content>
      <Option>
        <OptionRow>
          <BoxWrap>
            <Box>
              <Checkbox src={checkbox} />Entrie Home
            </Box>
            <NoteDescr> Have a place to yourself</NoteDescr>
          </BoxWrap>
          <Icon>
            <Img src={home} />
          </Icon>
        </OptionRow>
      </Option>

      <Option>
        <OptionRow>
          <BoxWrap>
            <Box>
              <Checkbox src={checkbox} />Private room
            </Box>
            <NoteDescr>
              Have your own room and share some common spaces
            </NoteDescr>
          </BoxWrap>
          <Icon>
            <Img src={proom} />
          </Icon>
        </OptionRow>
      </Option>

      <Option>
        <OptionRow>
          <BoxWrap>
            <Box>
              <Checkbox src={checkbox} />Shared room
            </Box>
            <NoteDescr>Stay in a shared space, like a common room</NoteDescr>
          </BoxWrap>
          <Icon>
            <Img src={sroom} />
          </Icon>
        </OptionRow>
      </Option>
    </Content>
  </DropContainer>
);
