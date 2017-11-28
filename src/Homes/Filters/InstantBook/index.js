import React from "react";
import DropContainer from "../DropContainer";
import styled from "styled-components";
import { CheckBoxSlider } from "../../../UI";

const Content = styled.div`
  margin: 24px 16px 16px 16px;
  display: flex;
  flex-direction: column;
  margin-top: 31px;
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Label = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
`;

const Title = styled.div`
  font-family: CircularAir;
  line-height: normal;
  font-size: 18px;
  color: #383838;
`;

const Description = styled.div`
  font-family: CircularAir;
  line-height: normal;
  font-size: 14px;
  color: #383838;
  font-weight: 200;
  margin-top: 4px;
`;

const Check = styled.div``;

export default props => (
  <div className="hidden-xs hidden-sm hidden-md">
    <DropContainer onCancel={props.onCancel}>
      <Content>
        <Row>
          <Label>
            <Title>Instant Book</Title>
            <Description>
              Listings you can book without waiting for host approval.
            </Description>
          </Label>
          <Check>
            <CheckBoxSlider
              onClick={props.onInstantBookChanged}
              isActive={props.isActive}
            />
          </Check>
        </Row>
      </Content>
    </DropContainer>
  </div>
);
