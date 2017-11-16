import React from "react";
import styled from "styled-components";
import arr from "./arr.svg";
import nextpage from "./next-page.png";
import { media } from "../../media";

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
  margin-bottom: 16px;

  ${media.md`
    font-size: 32px;
    line-height: 24px;
  `};

  ${media.md`
    font-size: 14px;
  `};
`;

const Arr = styled.img`margin: 0 0 0 8px;`;

export const NextPage = styled.a`
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
  overflow-y: hidden;
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

export const SectionTitleShort = props => (
  <TitleWrapper>
    <SectionTitle>{props.name}</SectionTitle>
  </TitleWrapper>
);

const CardWrapper = styled.div`position: relative;`;

const SectionLayout = props => (
  <div className={props.className}>
    <CardWrapper>
      <SectionTitleExtented name={props.name} />
      <div className="row">{props.children}</div>
    </CardWrapper>
  </div>
);

const SectionLayoutShort = props => (
  <div className={props.className}>
    <CardWrapper>
      <SectionTitleShort name={props.name} />
      <div className="row">{props.children}</div>
    </CardWrapper>
  </div>
);

export const Section = styled(SectionLayout)`
  margin-bottom: 40px;
  font-family: CircularAir;

  ${media.md`
    margin-bottom: 48px;
  `};
`;

export const SectionShort = styled(SectionLayoutShort)`
  margin-bottom: 40px;
  font-family: CircularAir;

  ${media.md`
    margin-bottom: 48px;
  `};
`;
