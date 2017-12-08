import React from "react";
import styled from "styled-components";
import Stars from "../Stars";
import Footer from "./Views";
import { Sticky } from "react-sticky";

import flag from "../flag.svg";

const Section = styled.section`
  background: #ffffff;
  border: 1px solid rgba(118, 118, 118, 0.2);
  box-sizing: border-box;
  padding: 15px 24px 24px 24px;
`;

const Header = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  box-shadow: 0px 0.5px 0px rgba(72, 72, 72, 0.2);
  padding-bottom: 23px;
`;

const Title = styled.h2`
  font-family: CircularAir;
  line-height: normal;
  font-size: 24px;
  margin: 0;
  margin-bottom: 9px;
  color: #383838;
`;

const Time = styled.span`
  font-family: Circular Air;
  line-height: normal;
  font-size: 12px;
  color: #636363;
  font-weight: normal;
  margin-left: 4px;
`;

const Rate = styled.div`
  display: flex;
  align-items: center;
  font-family: CircularAir;
  line-height: normal;
  font-size: 12px;
  color: #383838;
`;

const Body = styled.div`
  height: 273px;
  box-shadow: 0px 0.5px 0px rgba(72, 72, 72, 0.2);
  margin-bottom: 16px;
`;

const Report = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 16px;
  cursor: pointer;
  margin-bottom: 16px;
`;

const Flag = styled.div`
  background: url(${flag});
  background-size: 100%;
  width: 16px;
  height: 16px;
  margin-right: 8px;
`;

const Label = styled.div`
  font-family: CircularAir;
  line-height: normal;
  font-size: 14px;
  text-align: center;
  color: #383838;
`;

const navHeight = 72;

function Booking({ isSticky, style }) {
  return (
    <div style={{ ...style, paddingTop: isSticky ? navHeight : 24 }}>
      <Section>
        <Header>
          <Title>
            42$<Time>per night</Time>
          </Title>
          <Rate>
            <Stars num={5} size="min" />111
          </Rate>
        </Header>
        <Body />
        <Footer />
      </Section>
      <Report>
        <Flag />
        <Label>Report this listing</Label>
      </Report>
    </div>
  );
}

export default () => <Sticky topOffset={-48}>{Booking}</Sticky>;
