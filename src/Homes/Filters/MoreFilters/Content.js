import React from "react";
import styled from "styled-components";
import RoomBeds from "./RoomsBeds";
import MoreOprions from "./MoreOptions";
import { media } from "../../../media";
import RoomType from "../RoomType/Content";
import Price from "../Price/Content";
import Amenities from "./Amenities";
import Footer from "./Footer";
import Facilities from "./Facilities";

const Filter = styled.div`
  box-shadow: 0px 0.5px 0px 0px rgba(72, 72, 72, 0.3);
  padding-bottom: 32px;
  padding-top: 23px;
`;

const Title = styled.div`
  font-family: CircularAir;
  line-height: normal;
  font-size: 18px;
  color: #383838;
  text-align: left;

  ${media.md`
    font-size: 20px;
  `};
`;

const Wrap = styled.div`
  padding-bottom: 48px;
`;

export default props => (
  <Wrap>
    <Filter className="hidden-lg hidden-xl">
      <Title>Room Type</Title>
      <RoomType
        data={props.data.roomtype}
        onFilterChanged={data => props.onFilterChanged("roomtype", data)}
      />
    </Filter>
    <Filter className="hidden-lg hidden-xl">
      <Title>Price range</Title>
      <Price
        range={props.range}
        data={props.data.price}
        onChange={data => props.onFilterChanged("price", data)}
      />
    </Filter>
    <Filter>
      <Title>Rooms and beds</Title>
      <RoomBeds
        onFilterChanged={data => props.onFilterChanged("roomsbeds", data)}
        data={props.data.roomsbeds}
        min={0}
        max={15}
      />
    </Filter>
    <Filter>
      <Title>More options</Title>
      <MoreOprions
        onChange={data => props.onFilterChanged("moreoptions", data)}
        isActive={props.data.moreoptions}
        label="Superhost"
        descr="Stay with recognized hosts."
      />
    </Filter>
    <Filter>
      <Title>Amenities</Title>
      <Amenities
        data={props.data.amenities}
        onFilterChanged={(id, data) =>
          props.onFilterChanged("amenities", {
            ...props.data.amenities,
            [id]: data
          })
        }
      />
    </Filter>
    <Filter>
      <Title>Facilities</Title>
      <Facilities
        data={props.data.facilities}
        onFilterChanged={(id, data) =>
          props.onFilterChanged("facilities", {
            ...props.data.facilities,
            [id]: data
          })
        }
      />
    </Filter>
  </Wrap>
);
