import React from "react";
import styled from "styled-components";
import { media } from "../../../media";
import Spoiler from "../Spoiler";
import userpic from "./userpic.png";

import medal from "./medal.svg";

import baths from "./baths.svg";
import bed from "./bed.svg";
import door from "./door.svg";
import guests from "./guests.svg";

const Wrap = styled.div`
  padding-top: 16px;
  padding-bottom: 23px;
  box-shadow: 0px 0.5px 0px rgba(72, 72, 72, 0.2);

  ${media.md`
    padding-top: 24px;
  `};
`;

const Title = styled.h1`
  display: flex;
  font-family: CircularAir;
  font-size: 24px;
  color: #383838;
  margin: 0px;

  ${media.md`
    font-size: 36px;
  `};
`;

const Nav = styled.div`
  font-family: CircularAir;
  line-height: normal;
  font-size: 14px;
  color: #636363;
  font-weight: 200;
  margin-bottom: 32px;
  margin-top: 18px;

  ${media.md`
    margin-top: 0px;
    margin-bottom: 50px;
    font-size: 16px;    
  `};
`;

const User = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-right: 0px;
  max-width: 70px;

  ${media.md`
    margin-right: 0px;
  `};
`;

const UserPic = styled.div`
  position: relative;
  background: url(${userpic});
  background-size: 100%;
  width: 40px;
  height: 40px;
  margin-bottom: 12px;

  ${media.md`
    width: 64px;
    height: 64px;
  `};
`;

const Medal = styled.div`
  position: absolute;
  background: url(${medal});
  background-size: 100%;
  width: 10px;
  height: 18px;
  left: 78%;
  top: 60%;

  ${media.md`
    width: 16px;
    height: 30px;
  `};
`;

const UserName = styled.div`
  font-family: CircularAir;
  line-height: normal;
  font-size: 18px;
  text-align: center;
  color: #636363;
  font-weight: 200;
  word-wrap: break-word;
`;

const Header = styled.div`
  display: flex;
  flex-direction: column;
`;

const HeaderWrap = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 16px;
`;

const RowWrap = styled.div`
  display: flex;
`;

const OptionsRow = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Option = styled.div`
  display: flex;
  margin-right 30px;
  margin-bottom: 16px;
  `;

const Label = styled.span`
  margin-left: 9px;
  font-family: CircularAir;
  line-height: normal;
  font-size: 14px;
  color: #383838;
  font-weight: 200;
`;

const About = styled.div`
  font-family: CircularAir;
  line-height: normal;
  font-size: 16px;
  color: #383838;
  font-weight: 200;
  margin-bottom: 23px;

  ${media.md`
    font-size: 18px;
  `};
`;

const Contact = styled.div`
  font-family: CircularAir;
  line-height: normal;
  font-size: 16px;
  color: #0f7276;
  margin-top: 23px;
  cursor: pointer;
`;

export default () => (
  <div className="container">
    <div className="col-xs-12 col-lg-8">
      <Wrap>
        <HeaderWrap>
          <Header>
            <Title>Romantic Cabana with view</Title>
            <Nav>Entire cabin · Armenia</Nav>
            <RowWrap>
              <OptionsRow>
                <Option>
                  <img src={guests} />
                  <Label>2 guests</Label>
                </Option>
                <Option>
                  <img src={door} />
                  <Label>Studio</Label>
                </Option>
              </OptionsRow>
              <OptionsRow>
                <Option>
                  <img src={bed} />
                  <Label>2 beds</Label>
                </Option>
                <Option>
                  <img src={baths} />
                  <Label>1 bath</Label>
                </Option>
              </OptionsRow>
            </RowWrap>
          </Header>
          <User>
            <UserPic>
              <Medal />
            </UserPic>
            <UserName>
              <div className="hidden-xs">Yudi & Victoria</div>
            </UserName>
          </User>
        </HeaderWrap>
        <About>
          Located in the coffee region, in the Andean mountains of Colombia,
          South America, a charming cabana made from bamboo, with a great view
          and a "sendero" or pathway through the bamboo forest which
          criss-crosses our 5 acre organic farm, leading down to a stream. A
          place to relax and commune with nature.
        </About>
        <Spoiler>Read more about the space</Spoiler>
        <Contact>Contact host</Contact>
      </Wrap>
    </div>
  </div>
);
