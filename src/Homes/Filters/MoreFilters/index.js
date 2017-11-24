import React from "react";
import styled from "styled-components";
import RoomBeds from "./RoomsBeds";
import MoreOprions from "./MoreOptions";
import Amenities, { Amenity } from "./Amenities";
import { media } from "../../../media";
import RoomType from "../RoomType";

const DropContainer = styled.div`
  display: flex;
  width: 733px;
  position: absolute;
  flex-direction: column;
  text-align: center;
  overflow-wrap: break-word;
  background: #fff;
  box-sizing: border-box;
  border-radius: 4px;
  z-index: 2;
  top: calc(100% - 4px);
  padding-left: 81px;
  padding-top: 24px;
  left: 0;
`;

const Filter = styled.div`
  box-shadow: 0px 0.5px 0px 0px rgba(72, 72, 72, 0.3);
  padding-bottom: 32px;
  padding-top: 23px;
`;

const Footer = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 32px 16px 8px 0;
`;

const Cancel = styled.button`
  border: none;
  background: #fff;
  border-radius: 4px;
  color: #383838;
  font-family: CircularAir;
  line-height: normal;
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;
  padding: 12px 16px 13px 16px;
`;

const SeeHomes = styled.button`
  background: #008489;
  border: none;
  border-radius: 4px;
  color: #fff;
  font-family: CircularAir;
  line-height: normal;
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;
  padding: 12px 28px 13px 28px;
`;

export default props => (
  <DropContainer>
    <Filter>
      <RoomBeds
        title="Rooms and beds"
        label1="Bedrooms"
        label2="Beds"
        label3="Bathrooms"
        count="0+"
      />
    </Filter>
    <Filter>
      <MoreOprions
        title="More options"
        label="Superhost"
        descr="Stay with recognized hosts."
      />
    </Filter>
    <Filter>
      <Amenities title="Amenities" seeall="See all amenities">
        <Amenity label="Heating" />
        <Amenity label="Kitchen" />
        <Amenity label="TV" />
        <Amenity label="Wireless Internet" />
      </Amenities>
    </Filter>
    <Filter>
      <Amenities title="Facilities">
        <Amenity label="Elebator" />
        <Amenity label="Free parking on premises" />
        <Amenity label="Pool" />
        <Amenity label="Wheelchair accessible" />
      </Amenities>
    </Filter>
    <Footer>
      <Cancel>Cancel</Cancel>
      <SeeHomes>See Homes</SeeHomes>
    </Footer>
  </DropContainer>
);
