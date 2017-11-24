import React from "react";
import styled from "styled-components";

import checkbox from "./chkbx.svg";
import arrow from "./arrowdown.svg";

const Filter = styled.div`
  width: 495px;
  text-align: left;
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
  justify-content: space-between;
`;

const Row = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: left;
  margin-top: 25px;
`;

const Label = styled.div`
  display: flex;
  font-family: CircularAir;
  line-height: normal;
  font-size: 18px;
  font-weight: 200;
  text-align: left;
  color: #383838;
  margin-bottom: 14px;
`;

const CheckBox = styled.button`
  border: none;
  width: 24px;
  height: 24px;
  background: url(${checkbox});
  margin-right: 12px;
`;

const SeeAll = styled.a`
  font-family: CircularAir;
  line-height: normal;
  font-size: 16px;
  color: #0f7276;
  cursor: pointer;
  margin-top: 7px;
  cursor: pointer;
`;

const Arrow = styled.img`
  width: 12px;
  height: 7px;
  margin-left: 8px;
`;

export default props => (
  <Filter>
    <FilterTitle>{props.title}</FilterTitle>
    <FilterBody>
      <Row>
        <Label>
          <CheckBox />
          {props.label1}
        </Label>
        <Label>
          <CheckBox />
          {props.label3}
        </Label>
      </Row>
      <Row>
        <Label>
          <CheckBox />
          {props.label2}
        </Label>
        <Label>
          <CheckBox />
          {props.label4}
        </Label>
      </Row>
    </FilterBody>
    <SeeAll>
      {props.seeall}
      <Arrow src={arrow} />
    </SeeAll>
  </Filter>
);
