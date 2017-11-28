import React from "react";
import styled from "styled-components";
import checkboxoff from "./chkbx-off.svg";
import checkboxon from "./chkbx-on.svg";

const CheckBox = styled.button`
  box-sizing: border-box;
  width: 24px;
  height: 24px;
  margin-right: 12px;
  border: none;
  background: url(${props => (props.isActive ? checkboxon : checkboxoff)});
  cursor: pointer;
`;

const Option = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 24px;
`;

const Box = styled.div`
  display: flex;
  align-items: center;
  font-family: CircularAir, sans-serif;
  line-height: normal;
  font-size: 16px;
  color: #383838;
  font-weight: 200;
`;

const BoxWrap = styled.div`
  display: flex;
  flex-direction: column;
  font-family: CircularAir, sans-serif;
  line-height: normal;
  font-size: 12px;
  font-weight: 200;
  text-align: left;
`;

const OptionRow = styled.div`
  display: flex;
  justify-content: space-between;
`;

const NoteDescr = styled.div`
  padding-left: 36px;
`;

const Img = styled.img`
  height: 32px;
  width: 32px;
`;

const Icon = styled.div``;

export default props => (
  <Option>
    <OptionRow>
      <BoxWrap>
        <Box>
          <CheckBox
            onClick={() => props.onChange(props.id, props.isActive)}
            isActive={props.isActive}
          />
          {props.typeroom}
        </Box>
        <NoteDescr>{props.descr}</NoteDescr>
      </BoxWrap>
      <Icon>
        <Img src={props.roomimg} />
      </Icon>
    </OptionRow>
  </Option>
);
