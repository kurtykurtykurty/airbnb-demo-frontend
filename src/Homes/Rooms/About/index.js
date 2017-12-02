import React from "react";
import styled from "styled-components";
import { media } from "../../../media";
import userpic from "./userpic.png";

const Wrap = styled.div`
  padding-top: 24px;
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
  line-height: 26px;
  font-size: 16px;
  color: #636363;
  font-weight: 200;
`;

const User = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 16px;
  margin-right: 62px;
  max-width: 70px;
`;

const UserPic = styled.div`
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
`;

export default () => (
  <div className="container">
    <div className="col-xs-12 col-lg-8">
      <Wrap>
        <HeaderWrap>
          <Header>
            <Title>Romantic Cabana with view</Title>
            <Nav>Entire cabin · Armenia</Nav>
          </Header>
          <User>
            <UserPic />
            <UserName>
              <div className="hidden-xs">Yudi & Victoria</div>
            </UserName>
          </User>
        </HeaderWrap>
      </Wrap>
    </div>
  </div>
);
