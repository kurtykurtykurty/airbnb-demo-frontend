import React from "react";
import styled from "styled-components";
import { media } from "../../media";
import Section from "./Section";

const Description = styled.div`
  font-family: CircularAir;
  line-height: normal;
  font-size: 16px;
  color: #383838;
  font-weight: 200;
  margin-bottom: 23px;

  ${media.md`
    margin-bottom: 15px;
  `};

  ${media.lg`
    margin-bottom: 7px;
  `};
`;

const More = styled.div`
  font-family: CircularAir;
  line-height: normal;
  font-size: 16px;
  color: #0f7276;
`;

export default () => (
  <Section title="Always communicate through Airbnb">
    <Description>
      To protect your payment, never transfer money or communicate outside of
      the Airbnb website or app.
    </Description>
    <More>Learn more</More>
  </Section>
);
