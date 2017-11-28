import React from "react";
import styled from "styled-components";
import { CheckBox } from "../../../UI";
import { isAbsolute } from "path";

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

export default function(props) {
  return (
    <Option>
      <OptionRow>
        <BoxWrap>
          <Box>
            <CheckBox
              onClick={() => props.onChange(props.id, !props.isActive)}
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
}
