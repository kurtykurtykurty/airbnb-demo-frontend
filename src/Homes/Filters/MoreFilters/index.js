import React from "react";
import styled from "styled-components";
import Content from "./Content";
import Footer from "./Footer";

import { media } from "../../../media";
import { ScrollWrapper } from "../../../Landing/Section/index";

import cross from "../Dates/cross.svg";

const DropWraper = styled.div`
  top: 0px;
  width: 100%;
  left: 0px;
  right: 0px;
  bottom: 0px;
  position: fixed;
  background: rgba(255, 255, 255, 0.5);
  ${"" /* border: 3px solid red; */} ${media.md`
    top: 140px;
  `};
`;

const DropContainer = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  text-align: center;
  box-sizing: border-box;
  margin-left: auto;
  margin-right: auto;
  ${"" /* border: 3px solid green; */} height: 100%;
  ${media.md`
    width: 768px;
  `};

  ${media.lg`
    width: 991px;
  `};

  ${media.xl`
    width: 1200px;
  `};
`;

const SizeContainer = styled.div`
  height: 100%;
  width: 100%;
  position: relative;

  ${media.lg`
    width: 66%;
  `};
`;

export const ScrollContainer = styled.div`
  overflow-y: scroll;
  padding-left: 16px;
  padding-right: 16px;
  background: #fff;
  height: 100%;
`;

const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 16px 8px;
  box-shadow: 0px 0.5px 0px rgba(72, 72, 72, 0.3);
  background: #fff;
  z-index: 2;
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

export default props => (
  <DropWraper>
    <DropContainer className="hidden-xs hidden-sm hidden-md">
      <SizeContainer>
        <ScrollContainer>
          <Content
            data={props.data}
            onFilterChanged={props.onFilterChanged}
            onCancel={props.onCancel}
            //Price props
            range={props.range}
            //Bads Rooms
            dataRoomsBeds={props.dataRoomsBeds}
          />
        </ScrollContainer>
        <Footer onCancel={props.onCancel} />
      </SizeContainer>
    </DropContainer>
    <DropContainer className="hidden-xs hidden-sm hidden-lg hidden-xl">
      <ScrollContainer>
        <Content
          data={props.data}
          onFilterChanged={props.onFilterChanged}
          onCancel={props.onCancel}
          //Price props
          range={props.range}
          //Bads Rooms
          dataRoomsBeds={props.bedrooms}
        />
      </ScrollContainer>
      <Footer onCancel={props.onCancel} />
    </DropContainer>
    <DropContainer className="hidden-md hidden-lg hidden-xl">
      <Header>
        <Close onClick={props.onCancel} />
        <Title>Guest</Title>
        <Reset>Reset</Reset>
      </Header>
      <ScrollContainer>
        <Content
          data={props.data}
          onFilterChanged={props.onFilterChanged}
          onCancel={props.onCancel}
          //Price props
          range={props.range}
          min={props.min}
          max={props.max}
        />
      </ScrollContainer>
      <Footer onCancel={props.onCancel} />
    </DropContainer>
  </DropWraper>
);
