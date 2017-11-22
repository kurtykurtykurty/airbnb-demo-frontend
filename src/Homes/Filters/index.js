import React from "react";
import styled from "styled-components";
import RoomType from "./RoomType";
import Dates from "./Dates";

const FiltersWrapper = styled.div`
  width: 100%;
  border-bottom: 1px solid #eaebf0;
  border-top: 1px solid #eaebf0;
  background: white;
  position: fixed;
  top: 82px;
  left: 0px;
  z-index: 2;
`;

const ButtonRow = styled.div`
  display: flex;
`;

const Button = styled.button`
  box-sizing: border-box;
  font-family: CircularAir, sans-serif;
  line-height: normal;
  font-size: 14px;
  color: ${props => (props.isActive ? "white" : "#383838")};
  padding: 7px 16px;
  background: ${props => (props.isActive ? "#008489" : "white")};
  border-radius: 4px;
  border: 1px solid rgba(72, 72, 72, 0.2);
  cursor: pointer;
  margin-right: 12px;
  z-index: 42;
`;

const Field = styled.div`
  position: fixed;
  background: rgba(0, 0, 0, 0);
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
`;

function getDatesButtonLabel(state) {
  const isActive = state.openedFilter === "Dates";
  return isActive ? "Check in — Check out " : "Dates";
}

const DropdownLogic = props => {
  const isActive = props.openedFilter === props.id;

  const openFilter = function() {
    return props.handleOpen(props.id);
  };

  return (
    <div className={props.className}>
      <Button isActive={isActive} onClick={openFilter}>
        {props.label}
      </Button>
      {isActive && <div>{props.children}</div>}
    </div>
  );
};

const Dropdown = styled(DropdownLogic)`
  padding-top: 12px;
  padding-bottom: 12px;
`;

class Filters extends React.Component {
  state = {
    openedFilter: null
  };

  openFilter = key => {
    this.setState({ openedFilter: key });
  };

  closeFilter = () => {
    this.setState({ openedFilter: null });
  };

  onCancel = () => {
    this.closeFilter();
  };

  render() {
    return (
      <ButtonRow>
        <Dropdown
          id="Dates"
          handleOpen={this.openFilter}
          openedFilter={this.state.openedFilter}
          label={getDatesButtonLabel(this.state)}
        >
          <Dates onCancel={this.onCancel} />
          <Field onClick={this.closeFilter} />
        </Dropdown>

        <Dropdown
          id="Guests"
          label="Guests"
          handleOpen={this.openFilter}
          openedFilter={this.state.openedFilter}
        >
          <Field onClick={this.closeFilter} />
        </Dropdown>

        <Dropdown
          className="hidden-xs hidden-sm hidden-md"
          id="RoomType"
          label="Room Type"
          handleOpen={this.openFilter}
          openedFilter={this.state.openedFilter}
        >
          <RoomType onCancel={this.onCancel} />
          <Field onClick={this.closeFilter} />
        </Dropdown>

        <Dropdown
          className="hidden-xs hidden-sm hidden-md"
          id="Price"
          label="Price"
          handleOpen={this.openFilter}
          openedFilter={this.state.openedFilter}
        >
          <Field onClick={this.closeFilter} />
        </Dropdown>

        <Dropdown
          className="hidden-xs hidden-sm hidden-md"
          id="Instant book"
          label="Instant book"
          handleOpen={this.openFilter}
          openedFilter={this.state.openedFilter}
        >
          <Field onClick={this.closeFilter} />
        </Dropdown>

        <Dropdown
          id="More filters"
          label="More filters"
          handleOpen={this.openFilter}
          openedFilter={this.state.openedFilter}
        >
          <Field onClick={this.closeFilter} />
        </Dropdown>
      </ButtonRow>
    );
  }
}

export default function(props) {
  return (
    <FiltersWrapper>
      <div className="container">
        <Filters />
      </div>
    </FiltersWrapper>
  );
}
