import React from "react";
import styled from "styled-components";
import { media } from "../../../media";

import userpic from "./userpicbig.png";
import medal from "./medal.svg";
import reviews from "./reviews.svg";
import verify from "./verify.svg";

const Wrap = styled.div`
  padding-top: 33px;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
`;

const User = styled.div`
  display: flex;
  position: relative;
  background: url(${userpic});
  background-size: 100%;
  background-repeat: no-repeat;
  width: 60px;
  height: 60px;
  min-width: 60px;
  margin-left: 16px;
  margin-right: 5px;

  ${media.md`
    width: 88px;
    height: 88px;
  `};
`;

const Medal = styled.div`
  position: absolute;
  background: url(${medal});
  background-size: 100%;
  width: 16px;
  height: 30px;
  left: 83%;
  top: 65%;
`;

const Title = styled.h2`
  font-family: CircularAir;
  line-height: normal;
  font-size: 24px;
  color: #383838;
  margin: 0;
  margin-bottom: 16px;

  ${media.md`
    margin-bottom: 8px;
    font-size: 28px;
  `};
`;

const Location = styled.div`
  font-family: CircularAir;
  line-height: normal;
  font-size: 16px;
  font-weight: 200;
  color: #636363;
  padding-bottom: 24px;

  ${media.md`
    padding-bottom: 16px;
  `};
`;

const UserInfoWrap = styled.div`
  display: flex;
  flex-direction: column;

  ${media.md`
    flex-direction: row;
  `};
`;

const UserInfo = styled.div`
  display: flex;
  font-family: CircularAir;
  align-items: center;
  line-height: normal;
  font-size: 18px;
  font-weight: 200;
  color: #636363;
  margin-bottom: 24px;
  margin-right: 33px;
`;

const Reviews = styled.div`
  background: url(${reviews});
  width: 50px;
  height: 35px;
  background-size: 100%;
  background-repeat: no-repeat;
  margin-right: 16px;
`;

const Verify = styled.div`
  background: url(${verify});
  width: 32px;
  height: 32px;
  background-size: 100%;
  background-repeat: no-repeat;
  margin-right: 16px;
`;

const About = styled.div`
  font-family: CircularAir;
  line-height: normal;
  font-size: 18px;
  font-weight: 200;
  color: #383838;
  margin-bottom: 16px;
`;

const More = styled.span`
  font-family: CircularAir;
  line-height: normal;
  font-size: 18px;
  font-weight: 200;
  color: #0f7276;
  cursor: pointer;
`;

const Contact = styled.button`
  background: #ffffff;
  border: 1px solid #008489;
  box-sizing: border-box;
  border-radius: 2px;
  font-family: CircularAir;
  line-height: normal;
  font-size: 14px;
  color: #0f7276;
  padding: 7px 12px;
  cursor: pointer;
  margin-bottom: 24px;
`;

const Param = styled.div`
  font-family: CircularAir;
  line-height: normal;
  font-size: 18px;
  color: #383838;
  font-weight: bold;
  margin-bottom: 4px;
`;

const Property = styled.span`
  font-family: CircularAir;
  line-height: normal;
  font-size: 18px;
  color: #383838;
  font-weight: 200;
`;

export default () => (
  <Wrap>
    <div className="container">
      <div className="col-xs-12 col-lg-8">
        <Header>
          <Info>
            <Title>Hosted by Yudy & Victoria</Title>
            <Location>
              Santa Ana, California, United States · Joined in August 2014
            </Location>
            <UserInfoWrap>
              <UserInfo>
                <Reviews />Reviews
              </UserInfo>
              <UserInfo>
                <Verify />Verified
              </UserInfo>
            </UserInfoWrap>
          </Info>
          <User>
            <Medal />
          </User>
        </Header>
        <About>
          Yudy and I (Victoria) are sisters-in law. Yudy lives in Colombia and
          would be your hostess on the property. I live in California and am the
          owner of the property. It is my goal to create a "boutique eco-resort"
          on the approximately 5 acre farm we have in the coffee growing reg…<More
          >
            Read more
          </More>
        </About>
        <Contact>Contact host</Contact>
        <Param>
          <Property>Languages: </Property>English, Español
        </Param>
        <Param>
          <Property>Response rate: </Property>100%
        </Param>
        <Param>
          <Property>Response time: </Property>within a few hours
        </Param>
      </div>
    </div>
  </Wrap>
);
