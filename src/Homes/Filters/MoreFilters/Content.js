import React from "react";
import styled from "styled-components";
import RoomBeds from "./RoomsBeds";
import MoreOprions from "./MoreOptions";
import Amenities, { Amenity } from "./Amenities";
import { media } from "../../../media";
import RoomType from "../RoomType/Content";
import Price from "../Price/Content";
import Footer from "./Footer";

const Filter = styled.div`
  box-shadow: 0px 0.5px 0px 0px rgba(72, 72, 72, 0.3);
  padding-bottom: 32px;
  padding-top: 23px;
`;

const FilterTitle = styled.div`
  font-family: CircularAir;
  line-height: normal;
  font-size: 18px;
  color: #383838;
  text-align: left;

  ${media.md`
    font-size: 20px;
  `};
`;

export default props => (
  <div>
    <Filter className="hidden-lg hidden-xl">
      <FilterTitle>Room Type</FilterTitle>
      <RoomType
        data={props.data.roomtype}
        onFilterChanged={data => props.onFilterChanged("roomtype", data)}
      />
    </Filter>
    <Filter className="hidden-lg hidden-xl">
      <FilterTitle>Price range</FilterTitle>
      <Price
        range={props.range}
        data={props.data.price}
        onChange={data => props.onFilterChanged("price", data)}
      />
    </Filter>
    <Filter>
      <FilterTitle>Rooms and beds</FilterTitle>
      <RoomBeds
        onFilterChanged={data => props.onFilterChanged("roomsbeds", data)}
        data={props.data.roomsbeds}
        min={0}
        max={15}
      />
    </Filter>
    <Filter>
      <FilterTitle>More options</FilterTitle>
      <MoreOprions
        onChange={data => props.onFilterChanged("moreoptions", data)}
        isActive={props.data.moreoptions}
        label="Superhost"
        descr="Stay with recognized hosts."
      />
    </Filter>
    <Filter>
      <FilterTitle>Amenities</FilterTitle>
      <Amenities seeall="See all amenities">
        <Amenity label="Heating" />
        <Amenity label="Kitchen" />
        <Amenity label="TV" />
        <Amenity label="Wireless Internet" />
      </Amenities>
    </Filter>
    <Filter>
      <FilterTitle>Facilities</FilterTitle>
      <Amenities seeall="See all facilities">
        <Amenity label="Elevator" />
        <Amenity label="Free parking on premises" />
        <Amenity label="Pool" />
        <Amenity label="Wheelchair accessible" />
      </Amenities>
    </Filter>
  </div>
);
