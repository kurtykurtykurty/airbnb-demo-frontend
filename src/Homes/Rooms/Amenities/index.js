import React from "react";
import styled from "styled-components";
import Section from "../Section";
import Spoiler from "../Spoiler";
import { media } from "../../../media";

import internet from "./internet.svg";
import family from "./family.svg";
import wifi from "./wifi.svg";
import parking from "./parking.svg";

const Option = styled.div`
  display: inline-flex;
  width: 50%;
  font-family: CircularAir;
  line-height: normal;
  font-size: 14px;
  color: #383838;
  font-weight: 200;
  margin-bottom: 16px;

  ${media.md`
    font-size: 16px;
    margin-bottom: 23px;
  `};
`;

const Img = styled.img`
  margin-right: 10px;
`;

export default () => (
  <Section title="Amenitites">
    <Option>
      <Img src={internet} />Internet
    </Option>
    <Option>
      <Img src={family} />Family/kid friendly
    </Option>
    <Option>
      <Img src={wifi} />Wireless Internet
    </Option>
    <Option>
      <Img src={parking} />Free parking on premises
    </Option>
    <Spoiler>Show all amenities</Spoiler>
  </Section>
);
