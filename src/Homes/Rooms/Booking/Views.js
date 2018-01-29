import React from "react";
import styled from "styled-components";

import bulb from "./bulb.png";

const Section = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const WrapViews = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const TitleViews = styled.div`
  display: flex;
  font-family: CircularAir;
  line-height: normal;
  font-size: 14px;
  color: #383838;
  width: 100%;
`;

const Views = styled.div`
  display: flex;
  font-family: CircularAir;
  line-height: normal;
  font-size: 14px;
  font-weight: 200;
  color: #636363;
  width: 100%;
`;

const Bulb = styled.div`
  width: 48px;
  height: 48px;
  background: red;
`;

export default () => (
  <Section>
    <WrapViews>
      <TitleViews>This home is on people’s minds.</TitleViews>
      <Views>It’s been viewed 500+ times in the past week.</Views>
    </WrapViews>
    <Bulb>
      <img src={bulb} />
    </Bulb>
  </Section>
);
