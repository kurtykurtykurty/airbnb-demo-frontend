import React from "react";
import styled from "styled-components";
import location from "./location.png";

const LocationSection = styled.div`
  width: 100%;
  bottom: 24px;
  right: 10px;
  position: fixed;
`;

const LocationRow = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const Location = styled.div`
  width: 45px;
  height: 45px;
  background: url(${location});
  background-repeat: no-repeat;
  cursor: pointer;
`;

export default function() {
  return (
    <LocationSection className="hidden-lg">
      <LocationRow>
        <Location />
      </LocationRow>
    </LocationSection>
  );
}
