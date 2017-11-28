import React from "react";
import styled from "styled-components";
import RoomType from "./RoomType";
import Dates from "./Dates";
import Guests from "./Guests";
import InstantBook from "./InstantBook";
import MoreFilters from "./MoreFilters";
import Price from "./Price";
import { getPriceButtonLabel } from "./Price/Content";

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

//const formatDate = date => (date ? date.format("MMM Do") : "null");

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
const RoomTypeLabel = {
  entrie: "Entrie Home",
  private: "Private room",
  shared: "Shared room"
};

function getRoomTypeButtonLabel(data) {
  const selectedRoomType = Object.keys(data).filter(key => data[key]);
  const selectedLength = selectedRoomType.length;
  if (selectedLength === 1) {
    return RoomTypeLabel[selectedRoomType[0]];
  }
  if (selectedLength > 1) {
    return "Room Type · " + selectedLength;
  }

  return "Room Type";
}

function getGuestsButtonLabel(data) {
  const guestsCount = Number(data.guests.adults) + Number(data.guests.children);
  const infantCount = Number(data.guests.infants);
  console.clear();
  console.log("data.guests", data.guests);
  console.log("guestsCount", guestsCount);
  console.log("infantCount", infantCount);

  if (guestsCount > 1 && infantCount > 0) {
    return guestsCount + " Guests " + infantCount + " Infants";
  }

  if (guestsCount > 1) {
    return guestsCount + " Guests";
  }
  return "Guests";
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

const rheostatRange = {
  min: 0,
  max: 1000
};

const defaultState = {
  openedFilter: null,
  focusedInput: "startDate",
  startDate: null,
  endDate: null,
  selectedStartDate: null,
  selectedEndDate: null,
  guests: {
    adults: 1,
    children: 0,
    infants: 0
  },
  instantbook: false,
  roomtype: {
    entrie: false,
    private: false,
    shared: false
  },
  price: {
    min: 0,
    max: 1000
  },
  roomsbeds: {
    bedrooms: 0,
    beds: 0,
    bathrooms: 0
  },
  moreoptions: false
};

class Filters extends React.Component {
  state = defaultState;

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

  onFilterChanged = (id, value) => {
    this.setState({ [id]: value });
  };

  onBedsRoomsChanged = (id, value) => {
    this.setState({ roomsbeds: { ...this.state.roomsbeds, [id]: value } });
  };

  onInstantBookChanged = () => {
    this.setState({ instantbook: !this.state.instantbook });
  };

  onMoreOptionsChanged = () => {
    this.setState({ moreoptions: !this.state.moreoptions });
  };

  onRoomTypeChanged = (id, isActive) => {
    this.setState({ roomtype: { ...this.state.roomtype, [id]: !isActive } });
    console.log(" ROOTYPE setSTATE", {
      ...this.state.roomtype,
      [id]: isActive
    });
    console.log("isActive", isActive);
  };

  onPriceChanged = ({ min, max }) => {
    this.setState({ price: { ...this.state.price, min: min, max: max } });
  };

  render() {
    const isOpenMoreFilters = this.state.openedFilter === "Morefilters";

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
          label={getGuestsButtonLabel(this.state)}
          handleOpen={this.openFilter}
          openedFilter={this.state.openedFilter}
        >
          <Guests
            data={this.state.guests}
            onFilterChanged={data => this.onFilterChanged("guests", data)}
            onCancel={this.onCancel}
          />
          <CloseField onClick={this.closeFilter} />
        </Dropdown>

        <Dropdown
          className="hidden-xs hidden-sm hidden-md"
          id="RoomType"
          label={getRoomTypeButtonLabel(this.state.roomtype)}
          handleOpen={this.openFilter}
          openedFilter={this.state.openedFilter}
        >
          <RoomType
            data={this.state.roomtype}
            onRoomTypeChanged={this.onRoomTypeChanged}
            onCancel={this.onCancel}
          />
          <CloseField onClick={this.closeFilter} />
        </Dropdown>

        <Dropdown
          className="hidden-xs hidden-sm hidden-md"
          id="Price"
          label={getPriceButtonLabel(
            this.state.price.min,
            this.state.price.max,
            rheostatRange.min,
            rheostatRange.max
          )}
          handleOpen={this.openFilter}
          openedFilter={this.state.openedFilter}
        >
          <Price
            range={rheostatRange}
            min={this.state.price.min}
            max={this.state.price.max}
            onPriceChanged={this.onPriceChanged}
          />
          <CloseField onClick={this.closeFilter} />
        </Dropdown>

        <Dropdown
          className="hidden-xs hidden-sm hidden-md"
          id="Instantbook"
          label="Instant book"
          handleOpen={this.openFilter}
          openedFilter={this.state.openedFilter}
        >
          <InstantBook
            onInstantBookChanged={this.onInstantBookChanged}
            isActive={this.state.instantbook}
            onCancel={this.onCancel}
          />
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
        {isOpenMoreFilters && (
          <MoreFilters
            // RoomeType props
            data={this.state}
            onRoomTypeChanged={this.onRoomTypeChanged}
            onCancel={this.onCancel}
            //Price props
            range={rheostatRange}
            min={this.state.price.min}
            max={this.state.price.max}
            onPriceChanged={this.onPriceChanged}
            //Beds Rooms
            onFilterChanged={this.onFilterChanged}
            dataRoomsBeds={this.state.roomsbeds}
            //More Options
            onMoreOptionsChanged={this.onMoreOptionsChanged}
            isActive={this.state.moreoptions}
          />
        )}
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
