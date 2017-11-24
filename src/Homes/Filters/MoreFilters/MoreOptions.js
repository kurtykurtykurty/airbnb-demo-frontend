import React from "react";
import styled from "styled-components";

import checkbox from "./slidechkbx.svg";

const Filter = styled.div``;

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
  margin-top: 25px;
`;

const Label = styled.div`
  display: flex;
  flex-direction: column;
  font-family: CircularAir;
  line-height: normal;
  font-size: 18px;
  font-weight: 200;
  text-align: left;
  color: #383838;
  width: 50%;
`;

const Description = styled.div`
  font-family: CircularAir;
  line-height: normal;
  font-size: 16px;
  font-weight: 200;
  color: #383838;
  margin: 3px 0 3px 0;
`;

const More = styled.a`
  font-family: CircularAir;
  line-height: normal;
  font-size: 16px;
  font-weight: 200;
  color: #0f7276;
  cursor: pointer;
`;

const CheckBox = styled.button`
  width: 64px;
  height: 40px;
  border: none;
  background: url(${checkbox});
  cursor: pointer;
`;

export default props => (
  <Filter>
    <FilterTitle>{props.title}</FilterTitle>
    <FilterBody>
      <Row>
        <Label>
          {props.label}
          <Description>{props.descr}</Description>
          <More>Learn more</More>
        </Label>
        <CheckBox />
      </Row>
    </FilterBody>
  </Filter>
);
