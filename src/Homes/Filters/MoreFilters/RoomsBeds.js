import React from "react";
import styled from "styled-components";

import minus from "./minus.svg";
import plus from "./plus.svg";

const Filter = styled.div`
  width: 326px;
`;

const FilterTitle = styled.div`
  font-family: CircularAir;
  line-height: normal;
  font-size: 20px;
  color: #383838;
  text-align: left;
`;

const FilterBody = styled.div`
  display: flex;
  flex-direction: column;
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 25px;
`;

const Label = styled.div`
  font-family: CircularAir;
  line-height: normal;
  font-size: 18px;
  font-weight: 200;
  text-align: left;
  color: #383838;
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
  margin-right: 12px;
  margin-left: 16px;
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
  <Filter>
    <FilterTitle>{props.title}</FilterTitle>
    <FilterBody>
      <Row>
        <Label>{props.label1}</Label>
        <Counter>
          <Minus />
          <CountNumber>{props.count}</CountNumber>
          <Plus />
        </Counter>
      </Row>
      <Row>
        <Label>{props.label2}</Label>
        <Counter>
          <Minus />
          <CountNumber>{props.count}</CountNumber>
          <Plus />
        </Counter>
      </Row>
      <Row>
        <Label>{props.label3}</Label>
        <Counter>
          <Minus />
          <CountNumber>{props.count}</CountNumber>
          <Plus />
        </Counter>
      </Row>
    </FilterBody>
  </Filter>
);
