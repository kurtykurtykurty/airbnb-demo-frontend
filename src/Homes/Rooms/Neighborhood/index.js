import React from "react";
import styled from "styled-components";
import { media } from "../../../media";
import SpoilerBar from "../Spoiler";

const Section = styled.section`
  margin-top: 43px;
  box-shadow: 0px 0.5px 0px rgba(72, 72, 72, 0.2);
  padding-bottom: 16px;

  ${media.md`
    padding-bottom: 24px;
  `};
`;

const Title = styled.h2`
  margin: 0;
  font-family: CircularAir;
  line-height: normal;
  font-size: 24px;
  color: #383838;
  margin-bottom: 16px;

  ${media.md`
    font-size: 28px;
  `};
`;

const Location = styled.div`
  font-family: CircularAir;
  line-height: normal;
  font-size: 18px;
  font-weight: 200;
  color: #383838;
  margin-bottom: 15px;
`;

const Spoiler = styled(SpoilerBar)`
  margin-bottom: 16px;
`;

export default function(props) {
  return (
    <Section>
      <Title>The neighborhood</Title>
      <Location>
        Yudy & Victoria’s home is located in Armenia, Quindio, Colombia.<p>
          We are situated in the heart of the coffee region in the Andean
          mountains in Colombia. We are in "Vereda La Pradera" neighborhood,
          near the small town of "El Caimo", 20 minutes from Armenia and 20
          minutes from the airport, by car. Close enough for comfort and easy
          access, far enough from the hustle of traffic and city noise that you
          can commune with nature. Sleep to the sound of the crickets and awaken
          to the sound of birds.
        </p>
      </Location>
      <Spoiler>Read more about neighborhood</Spoiler>
    </Section>
  );
}
