import React from "react";
import styled from "styled-components";

import { CheckBoxSlider } from "../../../UI";

const Filter = styled.div``;

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

export default props => (
  <Filter>
    <FilterBody>
      <Row>
        <Label>
          {props.label}
          <Description>{props.descr}</Description>
          <More>Learn more</More>
        </Label>
        <CheckBoxSlider onClick={props.onChange} isActive={props.isActive} />
      </Row>
    </FilterBody>
  </Filter>
);
