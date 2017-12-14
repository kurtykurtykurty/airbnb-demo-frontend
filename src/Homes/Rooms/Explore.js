import React from "react";
import styled from "styled-components";

const Section = styled.div`
  margin-top: 47px;
  margin-bottom: 40px;
`;

const Title = styled.h3`
  font-family: CircularAir;
  line-height: normal;
  font-size: 24px;
  margin: 0;
  color: #383838;
  margin-bottom: 16px;
`;

const Places = styled.div`
  display: flex;
  align-items: baseline;
  margin-bottom: 16px;
`;

const Stay = styled.div`
  font-family: CircularAir;
  line-height: normal;
  font-size: 18px;
  font-weight: 200;
  color: #383838;
`;

const Type = styled.div`
  font-family: CircularAir;
  line-height: normal;
  font-size: 16px;
  font-weight: 200;
  color: #636363;
  margin-left: 8px;
`;
export default () => (
  <Section>
    <Title>Explore other options in and around Armenia</Title>
    <Places>
      <Stay>More places to stay in Armenia:</Stay>
      <Type>Apartments · Houses · Bed & Breakfasts · Lofts · Villas</Type>
    </Places>
  </Section>
);
