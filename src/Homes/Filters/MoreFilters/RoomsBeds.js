import React from "react";
import styled from "styled-components";
import NumInput from "../Guests/NumInput";

const Filter = styled.div`
  width: 326px;
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

function bound(value, min, max) {
  return value < min ? min : value && value > max ? max : value;
}
export default function(props) {
  const { data = {} } = props;

  return (
    <Filter>
      <FilterBody>
        <Row>
          <Label>Bedrooms</Label>
          <Counter>
            <NumInput
              min={props.min}
              max={props.max}
              value={data.bedrooms}
              onChange={value =>
                props.onChange("bedrooms", bound(value, props.min, props.max))
              }
            />
          </Counter>
        </Row>
        <Row>
          <Label>Beds</Label>
          <Counter>
            <NumInput
              min={props.min}
              max={props.max}
              value={data.beds}
              onChange={value =>
                props.onChange("beds", bound(value, props.min, props.max))
              }
            />
          </Counter>
        </Row>
        <Row>
          <Label>Bathrooms</Label>
          <Counter>
            <NumInput
              min={props.min}
              max={props.max}
              value={data.bathrooms}
              onChange={value =>
                props.onChange("bathrooms", bound(value, props.min, props.max))
              }
            />
          </Counter>
        </Row>
      </FilterBody>
    </Filter>
  );
}
