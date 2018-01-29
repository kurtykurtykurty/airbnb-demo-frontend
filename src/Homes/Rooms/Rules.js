import React from "react";
import styled from "styled-components";
import Section from "./Section";
import Spoiler from "./Spoiler";

const Description = styled.div`
  font-family: CircularAir;
  line-height: normal;
  font-size: 16px;
  color: #383838;
  font-weight: 200;
  margin-bottom: 15px;
`;

export default () => (
  <Section title="House Rules">
    <Description>
      Check-in is anytime after 1PM<br />Check out by 11AM
    </Description>
    <Spoiler>Read all rules</Spoiler>
  </Section>
);
