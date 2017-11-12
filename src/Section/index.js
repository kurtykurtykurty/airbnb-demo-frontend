import React from "react";
import styled from "styled-components";
import arr from "./arr.svg";
import nextpage from "./next-page.png";
import { media } from "../media.js";

export const SectionTitle = styled.h2`
  font-family: CircularAir;
  font-size: 24px;
  line-height: normal;
  color: #383838;
  text-align: left;
  margin-top: 0px;
  margin-bottom: 0px;
  margin-bottom: 16px;

  ${media.md`
    font-size: 32px;
    margin-bottom: 24px; 
    line-height: 34px;
  `};
`;
export const Section = styled.section`
  margin-bottom: 40px;
  font-family: CircularAir;
  ${media.md`
    margin-bottom: 48px;
  `};
`;

const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  ${media.md`
    font-size: 32px;
    line-height: 34px;
  `};
`;
const SeeAll = styled.a`
  font-family: CircularAir;
  line-height: 24px;
  font-size: 12px;
  text-align: right;
  color: #383838;

  ${"" /* margin-bottom: 16px; */} ${media.md`
    font-size: 32px;
    ${"" /* margin-bottom: 24px; */}
    line-height: 34px;
  `};

  ${"" /* margin-bottom: 16px; */} ${media.md`
    font-size: 14px;
  `};
`;

const Arr = styled.img`margin: 0 0 0 8px;`;

export const NextPage = styled.div`
  width: 40px;
  height: 40px;
  display: none;
  position: absolute;
  left: calc(100% - 20px);
  top: calc(50% - 20px);
  background-image: url(${nextpage});
  background-size: cover;
  z-index: 1;

  ${media.lg`
    display: block;
  `};
`;

export const ScrollWrapper = styled.div`
  display: flex;
  overflow-x: auto;
  overflow-y: auto;
  flex-wrap: nowrap;
  width: 100%;
  height: 100%;
`;

export const SectionTitleExtented = props => (
  <TitleWrapper>
    <SectionTitle>{props.name}</SectionTitle>
    <SeeAll>
      See&nbsp;all<Arr src={arr} />
    </SeeAll>
  </TitleWrapper>
);
