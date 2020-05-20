import React from "react";
import {
  DateRangePicker,
  Header,
  SelectedRange,
  FiltersContainer,
  Filter,
} from "./DateRangePicker.styles";

export default class DateRangePickerContainer extends React.Component {
  onChange = (newState) => {
    this.props.onChange(newState);
  };

  render() {
    return (
      <DateRangePicker>
        <Header>
            <SelectedRange>Today</SelectedRange>
            <FiltersContainer>
                <Filter active>Day</Filter>
                <Filter>Week</Filter>
                <Filter>Month</Filter>
                <Filter>Range</Filter>
            </FiltersContainer>
        </Header>
      </DateRangePicker>
    );
  }
}
