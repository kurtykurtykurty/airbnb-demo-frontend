import React from "react";
import styled from "styled-components";
import RoomType from "./RoomType";

const Filters = styled.div`
  width: 100%;
  padding-top: 12px;
  padding-bottom: 12px;
  border-bottom: 1px solid #eaebf0;
  background: white;
  position: fixed;
  top: 82px;
  left: 0px;
`;

const Button = styled.button`
  box-sizing: border-box;
  font-family: CircularAir;
  line-height: normal;
  font-size: 14px;
  color: #383838;
  padding: 7px 16px;
  background: none;
  border: 1px solid rgba(72, 72, 72, 0.2);
  border-radius: 4px;
  cursor: pointer;
  margin-right: 12px;
`;

export default function() {
  return (
    <Filters>
      <div className="container">
        <Button>Dates</Button>
        <Button>Guests</Button>
        <Button className="hidden-xs hidden-sm hidden-md">Room type</Button>
        <Button className="hidden-xs hidden-sm hidden-md">Price</Button>
        <Button className="hidden-xs hidden-sm hidden-md">Instant book</Button>
        <Button>More filters</Button>
      </div>
      <RoomType />
    </Filters>
  );
}
