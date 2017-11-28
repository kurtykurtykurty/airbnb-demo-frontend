import React from "react";
import styled from "styled-components";
import DropContainer from "../DropContainer";
import Option from "./Option";
import MobileGuests from "./MobileGuests";

const DropContainerGuests = styled(DropContainer)`
  width: 326px;
`;

const Content = styled.div`
  padding: 0px 15px 0 24px;
  display: flex;
  flex-direction: column;
  margin-top: 31px;
`;

export default function(props) {
  const { data, onFilterChanged } = props;
  const { adults, children, infants } = data;

  const onOptionChange = (id, value) => {
    onFilterChanged({ ...data, [id]: value });
  };

  return (
    <div>
      <div className="hidden-xs hidden-sm ">
        <DropContainerGuests>
          <Content>
            <Option
              id="adults"
              ageName="Adults"
              value={adults}
              onChange={onOptionChange}
              min={1}
              max={15}
            />
            <Option
              id="children"
              ageName="Children"
              value={children}
              ageDescr="Ages 2 — 12"
              onChange={onOptionChange}
              min={0}
              max={5}
            />
            <Option
              id="infants"
              ageName="Infants"
              value={infants}
              ageDescr="Under 2"
              onChange={onOptionChange}
              min={0}
              max={5}
            />
          </Content>
        </DropContainerGuests>
      </div>
      <div className="hidden-md hidden-lg hidden-xl">
        <MobileGuests onCancel={props.onCancel} />
      </div>
    </div>
  );
}
