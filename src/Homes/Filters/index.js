import React from "react";
import styled from "styled-components";
import RoomType from "./RoomType";
import Dates from "./Dates";
import Guests from "./Guests";
import InstantBook from "./InstantBook";
import MoreFilters from "./MoreFilters";
import Price from "./Price";
import { getPriceButtonLabel } from "./Price/Content";
import { getRoomTypeButtonLabel } from "./RoomType";
import { getGuestsButtonLabel } from "./Guests";
import { getDatesButtonLabel } from "./Dates";

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

const rheostatRange = {
  min: 0,
  max: 1000
};

const defaultState = {
  openedFilter: null,
  dates: {
    startDate: null,
    endDate: null,
    selectedStartDate: null,
    selectedEndDate: null
  },
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
  moreoptions: false,
  amenities: {}
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
      dates: {
        selectedStartDate: null,
        selectedEndDate: null,
        startDate: null,
        endDate: null
      }
    });
    this.closeFilter();
  };

  onApplyDates = () => {
    this.setState({
      dates: {
        startDate: this.state.dates.selectedStartDate,
        endDate: this.state.dates.selectedEndDate
      }
    });
    this.closeFilter();
  };

  onFilterChanged = (id, value) => {
    this.setState({ [id]: value });
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
            data={this.state.dates}
            onFilterChanged={data => this.onFilterChanged("dates", data)}
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
            onFilterChanged={data => this.onFilterChanged("roomtype", data)}
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
            data={this.state.price}
            range={rheostatRange}
            onFilterChanged={data => this.onFilterChanged("price", data)}
            onCancel={this.onCancel}
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
            onFilterChanged={data => this.onFilterChanged("instantbook", data)}
            data={this.state.instantbook}
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
            onFilterChanged={this.onFilterChanged}
            data={this.state}
            onCancel={this.onCancel}
            //Price props
            range={rheostatRange}
            //Beds Rooms
            dataRoomsBeds={this.state.roomsbeds}
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
