import React from "react";
import styled from "styled-components";
import { media } from "../../../media";

import flag from "./flag.svg";

const Section = styled.div`
  padding-top: 24px;
  padding-bottom: 23px;
  box-shadow: 0px 0.5px 0px rgba(72, 72, 72, 0.2);
`;

const Wrap = styled.div`
  display: flex;
`;

const UserPic = styled.img`
  width: 48px;
  height: 48px;
  margin-right: 16px;
  margin-bottom: 16px;
  border: 0px;
`;

const UserName = styled.div`
  font-family: CircularAir;
  line-height: normal;
  font-size: 20px;
  color: #383838;
`;

const Date = styled.div`
  font-family: CircularAir;
  line-height: normal;
  font-size: 16px;
  color: #383838;
  font-weight: 200;
`;

const User = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const Report = styled.div`
  width: 16px;
  height: 16px;
  background: url(${flag});
  cursor: pointer;
`;

const Review = styled.div`
  font-family: CircularAir;
  line-height: normal;
  font-size: 18px;
  font-weight: 200;
  color: #383838;
`;

export default props => (
  <Section>
    <Wrap>
      <UserPic src={props.pic} />
      <User>
        <UserName>
          {props.name}
          <Date>{props.date}</Date>
        </UserName>
        <Report />
      </User>
    </Wrap>
    <Review>{props.children}</Review>
  </Section>
);
