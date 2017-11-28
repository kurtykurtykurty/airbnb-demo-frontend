import React from "react";
import styled from "styled-components";
import moment from "moment";
import { DayPickerRangeController } from "react-dates";
import "react-dates/initialize";
import "react-dates/lib/css/_datepicker.css";
import DropContainer from "../DropContainer";
import { media } from "../../../media";
import "./style.css";
import MobileDayPicker from "./MobileDayPicker";

const Wrapper = styled(DropContainer)`
  width: 337px;
  z-index: 5;

  ${media.md`
    width: 337px;
`};

  ${media.lg`
    width: 637px;
`};
`;

const Content = styled.div`
  padding-top: 12px;
  padding-left: 8px;
  padding-right: 8px;
`;

export function getDatesButtonLabel(state) {
  const isActive = state.openedFilter === "Dates";
  const { selectedStartDate, selectedEndDate } = state.dates;

  if (isActive) {
    return `${
      selectedStartDate ? selectedStartDate.format("MMM Do") : "Check in "
    } — 
      ${selectedEndDate ? selectedEndDate.format("MMM Do") : "Check out"}`;
  }

  const { startDate, endDate } = state.dates;
  if (startDate && endDate) {
    return `${startDate.format("MMM Do")} — ${endDate.format("MMM Do")}`;
  }

  return "Date";
}

export default class Dates extends React.Component {
  state = { focusedInput: "startDate" };

  render() {
    const props = this.props;
    const { data } = props;
    const { selectedStartDate, selectedEndDate } = data;

    return (
      <Wrapper onApply={props.onApply} onCancel={props.onCancel}>
        <Content>
          <div className="hidden-xs hidden-sm hidden-md">
            <DayPickerRangeController
              startDate={selectedStartDate}
              endDate={selectedEndDate}
              focusedInput={this.state.focusedInput}
              onDatesChange={({ startDate, endDate }) => {
                props.onFilterChanged({
                  selectedStartDate: startDate,
                  selectedEndDate: endDate
                });
              }}
              onFocusChange={focusedInput => {
                this.setState({ focusedInput: focusedInput || "startDate" });
              }}
              isDayBlocked={day => day.isBefore(moment(), "day")}
              hideKeyboardShortcutsPanel
              initialVisibleMonth={null}
              numberOfMonths={2}
            />
          </div>
          <div className="hidden-xs hidden-sm hidden-lg hidden-xl">
            <DayPickerRangeController
              startDate={selectedStartDate}
              endDate={selectedEndDate}
              onFocusChange={props.onFocusChange}
              focusedInput={this.state.focusedInput}
              onDatesChange={props.onDatesChange}
              isDayBlocked={day => day.isBefore(moment(), "day")}
              hideKeyboardShortcutsPanel
              initialVisibleMonth={null}
              numberOfMonths={1}
            />
          </div>
          <div className="hidden-md hidden-lg hidden-xl">
            <MobileDayPicker
              startDate={selectedStartDate}
              endDate={selectedEndDate}
              onFocusChange={props.onFocusChange}
              focusedInput={this.state.focusedInput}
              onDatesChange={props.onDatesChange}
              onCancel={props.onCancel}
              isDayBlocked={day => day.isBefore(moment(), "day")}
              orientation="verticalScrollable"
              hideKeyboardShortcutsPanel
              initialVisibleMonth={null}
              numberOfMonths={2}
            />
          </div>
        </Content>
      </Wrapper>
    );
  }
}
