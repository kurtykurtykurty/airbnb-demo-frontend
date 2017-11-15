import React from "react";
import styled from "styled-components";
import Explore from "./Explore";
import Experiences from "./Experiences";
import Home from "./Homes";
import Food from "./Food";
import Destinations from "./Destinations/";

const Landing = styled.div`padding-top: 128px;`;

export default props => (
  <Landing>
    <Explore />
    <Experiences />
    <Home />
    <Food />
    <Destinations />
  </Landing>
);
