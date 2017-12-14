import React from "react";
import styled from "styled-components";
import { media } from "../../media";

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
  flex-wrap: wrap;
`;

const Stay = styled.div`
  font-family: CircularAir;
  line-height: normal;
  font-size: 18px;
  font-weight: 200;
  color: #383838;
  margin-right: 8px;
`;

const Type = styled.div`
  font-family: CircularAir;
  line-height: normal;
  font-size: 16px;
  font-weight: 200;
  color: #636363;
`;

const List = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Unit = styled.div`
  font-family: CircularAir;
  line-height: normal;
  font-size: 14px;
  font-weight: 200;
  color: #636363;
  width: 100%;
  cursor: pointer;
  margin-bottom: 2px;

  ${media.md`
    font-size: 12px;
    width: 33%;
  `};

  ${media.lg`
    font-size: 14px;
    width: 33%;
  `};
`;

export default () => (
  <Section>
    <Title>Explore other options in and around Armenia</Title>
    <Places>
      <Stay>More places to stay in Armenia:</Stay>
      <Type>Apartments · Houses · Bed & Breakfasts · Lofts · Villas</Type>
    </Places>
    <List>
      <Unit>Cartagena Vacation Rentals</Unit>
      <Unit>San Andrés Vacation Rentals</Unit>
      <Unit>Willemstad Vacation Rentals</Unit>
      <Unit>Bucaramanga</Unit>
      <Unit>Bogota</Unit>
      <Unit>Cali</Unit>
      <Unit>Manuel Antonio</Unit>
      <Unit>Santa Marta (Distrito Turistico Cultural E Historico)</Unit>
      <Unit>Chia</Unit>
      <Unit>Cartagena De Indias (Distrito Turistico Y Cultural)</Unit>
      <Unit>Rionegro</Unit>
      <Unit>Ibague</Unit>
      <Unit>Quito</Unit>
      <Unit>Anapoima</Unit>
      <Unit>Medellin</Unit>
      <Unit>Santander de Quilichao</Unit>
      <Unit>Puerto Rico</Unit>
      <Unit>Tabio</Unit>
    </List>
  </Section>
);
