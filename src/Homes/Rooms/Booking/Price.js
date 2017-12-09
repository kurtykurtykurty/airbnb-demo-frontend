import React from "react";
import styled from "styled-components";
import Stars from "../Stars";

const PriceWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Price = styled.h2`
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
  <PriceWrapper>
    <Price>
      42$<Time>per night</Time>
    </Price>
    <Rate>
      <Stars num={5} size="min" />111
    </Rate>
  </PriceWrapper>
);
