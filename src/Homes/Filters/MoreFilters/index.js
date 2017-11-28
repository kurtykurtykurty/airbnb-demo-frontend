import React from "react";
import styled from "styled-components";
import Content from "./Content";
import MobileMoreFilters from "./MobileMoreFilters";

const FixedContainer = styled.div`
  position: fixed;
  left: 0px;
  right: 0px;
  top: 0px;
  background: #fff;
  width: 100%;
  margin-top: 140px;
  ${"" /* border: 5px solid green; */};
`;

const DropWraper = styled.div`
  z-index: 2;
  top: calc(100% - 4px);
  position: absolute;
  width: 66.66%;
  ${"" /* height: 100%; */} ${"" /* border: 5px solid red; */};
`;

const DropContainer = styled.div`
  ${"" /* border: 5px solid red; */} display: flex;
  flex-direction: column;
  text-align: center;
  ${"" /* overflow-wrap: break-word; */} background: #fff;
  box-sizing: border-box;
  ${"" /* position: relative; */} padding-top: 24px;
`;

const ScrollContainer = styled.div`
  ${"" /* border: 5px solid green; */} overflow-y: scroll;
  background: #fff;
  position: fixed;
  height: calc(100% - 160px);
  width: 58%;
`;

export default props => (
  <DropWraper>
    {console.log("More Filters index data", props)}
    <DropContainer className="hidden-xs hidden-sm hidden-md">
      <ScrollContainer>
        <Content
          data={props.data}
          onFilterChanged={props.onFilterChanged}
          //Room Type
          onRoomTypeChanged={props.onRoomTypeChanged}
          //Price props
          range={props.range}
          min={props.min}
          max={props.max}
          onPriceChanged={props.onPriceChanged}
          //Bads Rooms
          dataRoomsBeds={props.dataRoomsBeds}
          //More Options
          onMoreOptionsChanged={props.onMoreOptionsChanged}
          isActive={props.isActive}
        />
      </ScrollContainer>
    </DropContainer>
    <FixedContainer className="hidden-xs hidden-sm hidden-lg hidden-xl">
      <div className="container">
        <Content
          data={props.data}
          onRoomTypeChanged={props.onRoomTypeChanged}
          //Price props
          range={props.range}
          min={props.min}
          max={props.max}
          onPriceChanged={props.onPriceChanged}
          //Bads Rooms
          onBedsRoomsChanged={props.onBedsRoomsChanged}
          dataRoomsBeds={props.bedrooms}
        />
      </div>
    </FixedContainer>
    <MobileMoreFilters
      data={props.data}
      onRoomTypeChanged={props.onRoomTypeChanged}
      //Price props
      range={props.range}
      min={props.min}
      max={props.max}
      onPriceChanged={props.onPriceChanged}
      onCancel={props.onCancel}
      //Bads Rooms
      onBedsRoomsChanged={props.onBedsRoomsChanged}
      dataRoomsBeds={props.bedrooms}
    />
  </DropWraper>
);
