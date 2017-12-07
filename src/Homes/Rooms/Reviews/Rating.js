import React from "react";
import styled from "styled-components";
import { media } from "../../../media";
import Stars from "../Stars";

const Table = styled.div`
  display: flex;
  flex-direction: column;
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 8px;
  margin-bottom: 8px;
`;

const Propertie = styled.div`
  font-family: CircularAir;
  line-height: normal;
  font-size: 18px;
  font-weight: 200;
  color: #383838;
`;

const Grade = styled.div``;

export function RatingRow(props) {
  return (
    <Row>
      <Propertie>{props.propertie}</Propertie>
      <Grade>
        <Stars size="mid" num={props.rating} />
      </Grade>
    </Row>
  );
}

export default props => <Table>{props.children}</Table>;
