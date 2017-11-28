import React from "react";
import styled from "styled-components";
import DropContainer from "../DropContainer";

import Content from "./Content";

const Wrapper = styled.div`
  padding: 0px 16px 0 16px;
`;
const RoomTypeLabel = {
  entrie: "Entrie Home",
  private: "Private room",
  shared: "Shared room"
};

export function getRoomTypeButtonLabel(data) {
  const selectedRoomType = Object.keys(data).filter(key => data[key]);
  const selectedLength = selectedRoomType.length;
  if (selectedLength === 1) {
    return RoomTypeLabel[selectedRoomType[0]];
  }
  if (selectedLength > 1) {
    return "Room Type · " + selectedLength;
  }

  return "Room Type";
}

export default function(props) {
  return (
    <DropContainer onCancel={props.onCancel}>
      <Wrapper>
        <Content data={props.data} onFilterChanged={props.onFilterChanged} />
      </Wrapper>
    </DropContainer>
  );
}
