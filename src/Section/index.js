import React from "react";
import styled from "styled-components";
import arr from "./arr.svg";
import nextpage from "./next-page.png";

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
export const NextPage = styled.div`
  width: 40px;
  height: 40px;
  display: block;
  position: absolute;
  left: calc(100% - 20px);
  top: calc(50% - 20px);
  background-image: url(${nextpage});
  background-size: cover;
  z-index: 1;
`;
export const SectionTitleExtented = props => (
  <TitleWrapper>
    <SectionTitle>{props.name}</SectionTitle>
    <SeeAll>
      See All<Arr src={arr} />
    </SeeAll>
  </TitleWrapper>
);
