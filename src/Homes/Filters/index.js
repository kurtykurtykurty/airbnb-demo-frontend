import React from "react";
import styled from "styled-components";
import RoomType from "./RoomType";
import Dates from "./Dates";
import Guests from "./Guests";
import InstantBook from "./InstantBook";
import MoreFilters from "./MoreFilters";

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
  position: relative;
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

const CloseField = styled.div`
  position: fixed;
  background: rgba(0, 0, 0, 0);
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
`;

const formatDate = date => (date ? date.format("MMM Do") : "null");

function getDatesButtonLabel(state) {
  const isActive = state.openedFilter === "Dates";
  const { selectedStartDate, selectedEndDate } = state;

  if (isActive) {
    return `${
      selectedStartDate ? selectedStartDate.format("MMM Do") : "Check in "
    } — 
      ${selectedEndDate ? selectedEndDate.format("MMM Do") : "Check out"}`;
  }

  const { startDate, endDate } = state;
  if (startDate && endDate) {
    return `${startDate.format("MMM Do")} — ${endDate.format("MMM Do")}`;
  }

  return "Date";
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
  ${"" /* position: relative; */} padding-top: 12px;
  padding-bottom: 12px;
`;

class Filters extends React.Component {
  state = {
    openedFilter: null,
    dropdown: null,
    startDate: null,
    endDate: null,
    selectedStartDate: null,
    selectedEndDate: null,
    focusedInput: "startDate"
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

  onCancelDates = () => {
    this.setState({
      selectedStartDate: null,
      selectedEndDate: null,
      startDate: null,
      endDate: null
    });
    this.closeFilter();
  };

  onApplyDates = () => {
    this.setState({
      startDate: this.state.selectedStartDate,
      endDate: this.state.selectedEndDate
    });
    this.closeFilter();
  };

  render() {
    const isOpenMoreFilters = this.state.openedFilter === "Morefilters";
    console.clear();
    console.log("focusedInput", this.state.focusedInput);
    console.log("selectedStartDate", formatDate(this.state.selectedStartDate));
    console.log("selectedEndDate", formatDate(this.state.selectedEndDate));
    console.log("startDate", formatDate(this.state.startDate));
    console.log("endDate", formatDate(this.state.endDate));

    return (
      <ButtonRow>
        <Dropdown
          id="Dates"
          handleOpen={this.openFilter}
          openedFilter={this.state.openedFilter}
          label={getDatesButtonLabel(this.state)}
        >
          <Dates
            startDate={this.state.selectedStartDate}
            endDate={this.state.selectedEndDate}
            focusedInput={this.state.focusedInput}
            onFocusChange={focusedInput =>
              this.setState({ focusedInput: focusedInput || "startDate" })
            }
            onDatesChange={({ startDate, endDate }) => {
              this.setState({
                selectedStartDate: startDate,
                selectedEndDate: endDate
              });
            }}
            onCancel={this.onCancelDates}
            onApply={this.onApplyDates}
          />
          <CloseField onClick={this.closeFilter} />
        </Dropdown>

        <Dropdown
          id="Guests"
          label="Guests"
          handleOpen={this.openFilter}
          openedFilter={this.state.openedFilter}
        >
          <Guests onCancel={this.onCancel} />
          <CloseField onClick={this.closeFilter} />
        </Dropdown>

        <Dropdown
          className="hidden-xs hidden-sm hidden-md"
          id="RoomType"
          label="Room Type"
          handleOpen={this.openFilter}
          openedFilter={this.state.openedFilter}
        >
          <RoomType onCancel={this.onCancel} />
          <CloseField onClick={this.closeFilter} />
        </Dropdown>

        <Dropdown
          className="hidden-xs hidden-sm hidden-md"
          id="Price"
          label="Price"
          handleOpen={this.openFilter}
          openedFilter={this.state.openedFilter}
        >
          <CloseField onClick={this.closeFilter} />
        </Dropdown>

        <Dropdown
          className="hidden-xs hidden-sm hidden-md"
          id="Instantbook"
          label="Instant book"
          handleOpen={this.openFilter}
          openedFilter={this.state.openedFilter}
        >
          <InstantBook onCancel={this.onCancel} />
          <CloseField onClick={this.closeFilter} />
        </Dropdown>

        <Dropdown
          id="Morefilters"
          label="More filters"
          handleOpen={this.openFilter}
          openedFilter={this.state.openedFilter}
        >
          <CloseField onClick={this.closeFilter} />
        </Dropdown>
        {isOpenMoreFilters && <MoreFilters onCancel={this.onCancel} />}
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
