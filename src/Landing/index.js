import React from "react";
import styled from "styled-components";
import Explore from "./Explore";
import Experiences from "./Experiences";
import Homes from "./Homes";
import Food from "./Food";
import Destinations from "./Destinations/";
import Header from "../Header";

const Landing = styled.div`
  padding-top: 128px;
`;

export default props => (
  <div>
    <Header isFixed />
    <Landing>
      <Explore />
      <Experiences />
      <Homes />
      <Food />
      <Destinations />
    </Landing>
  </div>
);
