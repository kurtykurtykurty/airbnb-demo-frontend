import React from "react";
import styled from "styled-components";
import Section from "./Section";

import shield from "./shield.svg";

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.div`
  font-family: CircularAir;
  line-height: normal;
  font-size: 16px;
  color: #383838;
  margin: 0px;
  margin-bottom: 4px;
`;

const Description = styled.div`
  font-family: CircularAir;
  line-height: normal;
  font-size: 16px;
  color: #383838;
  font-weight: 200;
`;

const ImgWrap = styled.div`
  width: 38px;
  height: 40px;
  margin-left: 15px;
`;

const Top = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;

const Line = styled.hr`
  display: flex;
  width: 65px;
  height: 1px;
  background: #767676;
  border: none;
  opacity: 0.2;
  margin: 0px;
  margin-bottom: 20px;
`;

const BottomTitle = styled.div`
  margin-bottom: 16px;
  font-family: CircularAir;
  line-height: normal;
  font-size: 16px;
  color: #383838;
  font-weight: 200;
`;

const More = styled.span`
  font-family: CircularAir;
  line-height: normal;
  font-size: 16px;
  color: #0f7276;
  font-weight: 200;
  cursor: pointer;
`;

export default () => (
  <Section title="Cancellations">
    <Top>
      <Wrap>
        <Title>Free cancellation</Title>
        <Description>
          Cancel within 48 hours of booking to get a full refund.
        </Description>
      </Wrap>
      <ImgWrap>
        <img src={shield} />
      </ImgWrap>
    </Top>
    <Line />
    <BottomTitle>Flexible</BottomTitle>
    <Description>
      Cancel up to 24 hours before check in and get a full refund (minus service
      fees). Cancel within 24 hours of your trip and the firs…<More>
        Read more
      </More>
    </Description>
  </Section>
);
