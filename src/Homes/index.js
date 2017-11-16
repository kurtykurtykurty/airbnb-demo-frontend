import React from "react";
import { Route } from "react-router-dom";
import styled from "styled-components";
import List from "./List";
import Filters from "./Filters";
import { media } from "../media";
import MapLocation from "./MapLocation";
import Footer from "./List/Footer";

const MapWrapper = styled.div`
  position: fixed;
  top: 140px;
  bottom: 0;
  right: 0;
  left: calc(50% + 162px);

  ${media.xl`
    left: calc(50% + 198px);
  `};

  ${"" /* ${media.lg`
    display:
  `}; */};
`;

export default () => (
  <div>
    <Filters />
    <Route path="/homes" exact component={List} />
    <MapWrapper className="hidden-xs hidden-sm hidden-md">
      <MapLocation center={{ lat: 46.55189574, lng: 5.29309273 }} zoom={15} />
    </MapWrapper>
    <Footer />
  </div>
);
