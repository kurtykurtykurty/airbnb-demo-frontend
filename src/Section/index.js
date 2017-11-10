import React from "react";
import styled from "styled-components";
import arr from "./arr.svg";

export const SectionTitle = styled.h2`
  font-family: CircularAir;
  line-height: 34px;
  font-size: 32px;
  color: #383838;
  text-align: left;
`;
const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const SeeAll = styled.a`
  font-family: CircularAir;
  line-height: 24px;
  font-size: 14px;
  text-align: right;
  color: #383838;
`;
const Arr = styled.img`margin: 0 0 0 8px;`;
export const SectionTitleExtented = props => (
  <TitleWrapper>
    <SectionTitle>{props.name}</SectionTitle>
    <SeeAll>
      See All<Arr src={arr} />
    </SeeAll>
  </TitleWrapper>
);
