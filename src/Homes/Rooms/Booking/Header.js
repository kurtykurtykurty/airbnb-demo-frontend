import React from "react";
import styled from "styled-components";
import Stars from "../Stars";

const Header = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
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
  font-family: CircularAir;
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

export default () => (
  <Header>
    <Title>
      42$<Time>per night</Time>
    </Title>
    <Rate>
      <Stars num={5} size="min" />111
    </Rate>
  </Header>
);
