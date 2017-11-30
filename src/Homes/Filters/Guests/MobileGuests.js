import React from "react";
import styled from "styled-components";
import Option from "./Option";

import cross from "./cross.svg";

const Wrapper = styled.div`
  position: fixed;
  left: 0px;
  top: 0px;
  width: 100%;
  height: 100%;
  background: white;
  z-index: 5;
`;

const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 16px 8px;
  box-shadow: 0px 0.5px 0px rgba(72, 72, 72, 0.3);
`;

const Close = styled.button`
  background: url(${cross});
  background-position: center;
  background-repeat: no-repeat;
  height: 26px;
  width: 26px;
  cursor: pointer;
  border: none;
`;

const Title = styled.div`
  font-family: CircularAir, sans-serif;
  line-height: normal;
  font-size: 14px;
  color: #383838;
`;

const Reset = styled.div`
  font-family: CircularAir, sans-serif;
  color: #0f7276;
  line-height: normal;
  font-size: 14px;
  cursor: pointer;
`;

const Content = styled.div`
  padding: 0px 8px 0 8px;
  display: flex;
  flex-direction: column;
  margin-top: 31px;
  margin-bottom: 200px;
`;

const Save = styled.div`
  width: 100%;
  background: #ff5a5f;
  border-radius: 4px;
  font-family: CircularAir;
  line-height: normal;
  font-size: 18px;
  font-weight: bold;
  text-align: center;
  vertical-align: middle;
  color: #fff;
  cursor: pointer;
  padding-bottom: 13px;
  padding-top: 12px;
`;

const Footer = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  box-shadow: 0px -1px 0px #d5d5d5;
  align-items: center;
  padding: 16px 8px;
`;
export default function(props) {
  const { data, onFilterChanged } = props;
  const { adults, children, infants } = data;

  const onOptionChange = (id, value) => {
    onFilterChanged({ ...data, [id]: value });
  };

  return (
    <Wrapper>
      <Header>
        <Close onClick={props.onCancel} />
        <Title>Guest</Title>
        <Reset>Reset</Reset>
      </Header>
      <Content>
        <Option
          id="adults"
          label="Adults"
          value={adults}
          onChange={onOptionChange}
          min={1}
          max={15}
        />
        <Option
          id="children"
          label="Children"
          value={children}
          descr="Ages 2 — 12"
          onChange={onOptionChange}
          min={0}
          max={5}
        />
        <Option
          id="infants"
          label="Infants"
          value={infants}
          descr="Under 2"
          onChange={onOptionChange}
          min={0}
          max={5}
        />
      </Content>
      <Footer>
        <Save>Save</Save>
      </Footer>
    </Wrapper>
  );
}
