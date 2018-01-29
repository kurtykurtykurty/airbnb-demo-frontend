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

export default function(props) {
  const { data = {}, onFilterChanged } = props;

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
                onFilterChanged({
                  ...data,
                  bedrooms: value
                })
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
                onFilterChanged({
                  ...data,
                  beds: value
                })
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
                onFilterChanged({
                  ...data,
                  bathrooms: value
                })
              }
            />
          </Counter>
        </Row>
      </FilterBody>
    </Filter>
  );
}
