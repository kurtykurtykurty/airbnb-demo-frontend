import React from "react";
import styled from "styled-components";
import { media } from "../../../media";
import MapLocation from "../../../Homes/MapLocation";

const MapWrapper = styled.div`
  width: 100%;
  height: 192px;
  margin-bottom: 16px;

  ${media.sm`
    height: 300px;
  `};

  ${media.md`
    height: 474px;
  `};

  ${media.lg`
    height: 612px;
  `};
`;

const ExactLocation = styled.div`
  font-family: CircularAir;
  line-height: normal;
  font-size: 18px;
  font-weight: 200;
  color: #383838;
`;
export default function(props) {
  return (
    <div>
      <MapWrapper>
        <MapLocation center={{ lat: 46.55189574, lng: 5.29309273 }} zoom={15} />
      </MapWrapper>
      <ExactLocation>
        Exact location information is provided after a booking is confirmed.
      </ExactLocation>
    </div>
  );
}
