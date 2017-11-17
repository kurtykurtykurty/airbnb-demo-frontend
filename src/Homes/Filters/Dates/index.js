import React from "react";
import styled from "styled-components";
import {
  DateRangePicker,
  SingleDatePicker,
  DayPickerRangeController
} from "react-dates";
import "react-dates/initialize";
import "react-dates/lib/css/_datepicker.css";

const DateWrapper = styled.div`
  display: flex;
  position: absolute;
  margin-top: 200px;
`;

export default props => (
  <DateWrapper>
    <DateRangePicker
      startDate={this.state.startDate} // momentPropTypes.momentObj or null,
      endDate={this.state.endDate} // momentPropTypes.momentObj or null,
      onDatesChange={({ startDate, endDate }) =>
        this.setState({ startDate, endDate })} // PropTypes.func.isRequired,
      focusedInput={this.state.focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
      onFocusChange={focusedInput => this.setState({ focusedInput })} // PropTypes.func.isRequired,
    />
  </DateWrapper>
);
