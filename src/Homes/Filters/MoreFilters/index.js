import React from "react";
import styled from "styled-components";
import Content from "./Content";
import MobileMoreFilters from "./MobileMoreFilters";

const FixedContainer = styled.div`
  position: fixed;
  left: 0px;
  right: 0px;
  top: 0px;
  background: #fff;
  width: 100%;
  margin-top: 140px;
  ${"" /* border: 5px solid green; */};
`;

const DropWraper = styled.div`
  z-index: 2;
  top: calc(100% - 4px);
  position: absolute;
  width: 66.66%;
  ${"" /* height: 100%; */} ${"" /* border: 5px solid red; */};
`;

const DropContainer = styled.div`
  ${"" /* border: 5px solid red; */} display: flex;
  flex-direction: column;
  text-align: center;
  ${"" /* overflow-wrap: break-word; */} background: #fff;
  box-sizing: border-box;
  ${"" /* position: relative; */} padding-top: 24px;
`;

const ScrollContainer = styled.div`
  ${"" /* border: 5px solid green; */} overflow-y: scroll;
  background: #fff;
  position: fixed;
  height: calc(100% - 160px);
  width: 58%;
`;

export default props => (
  <DropWraper>
    <DropContainer className="hidden-xs hidden-sm hidden-md">
      <ScrollContainer>
        <Content />
      </ScrollContainer>
    </DropContainer>
    <FixedContainer className="hidden-xs hidden-sm hidden-lg hidden-xl">
      <div className="container">
        <Content />
      </div>
    </FixedContainer>
    <MobileMoreFilters onCancel={props.onCancel} />
  </DropWraper>
);
