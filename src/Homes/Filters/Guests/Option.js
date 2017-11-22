import React from "react";
import styled from "styled-components";

import minus from "./minus.svg";
import plus from "./plus.svg";

const Option = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 18px;
`;

const Age = styled.div`
  font-family: CircularAir;
  line-height: normal;
  font-size: 20px;
  color: #383838;
`;

const AgeDescription = styled.div`
  font-family: CircularAir;
  line-height: normal;
  font-size: 16px;
  font-weight: 200;
  color: #383838;
  margin-top: 7px;
`;

const AgeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
`;

const Counter = styled.div`
  display: flex;
  font-family: CircularAir;
  line-height: normal;
  font-size: 18px;
  color: #383838;
  line-height: normal;
`;

const CountNumber = styled.div`
  line-height: normal;
  font-size: 18px;
  color: #383838;
  padding-top: 4px;
  margin-right: 19px;
  margin-left: 19px;
  font-weight: 200;
`;

const Minus = styled.button`
  width: 32px;
  height: 32px;
  border: none;
  background: url(${minus});
`;

const Plus = styled.button`
  width: 32px;
  height: 32px;
  border: none;
  background: url(${plus});
`;

export default props => (
  <Option>
    <AgeWrapper>
      <Age>{props.ageName}</Age>
      <AgeDescription>{props.ageDescr}</AgeDescription>
    </AgeWrapper>
    <Counter>
      <Minus />
      <CountNumber>0</CountNumber>
      <Plus />
    </Counter>
  </Option>
);
