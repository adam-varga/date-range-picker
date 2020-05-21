import React from "react";
import DateRangePicker from "./datepicker/DateRangePicker";
import "./App.css";

export default class App extends React.Component {
  state = {
    filter: undefined,
    range: {
      from: undefined,
      to: undefined,
    },
  };

  onDateRangeChange = ({ filter, start, end }) => {
    this.setState({
      filter,
      range: {
        from: start,
        to: end,
      },
    });
  };

  render() {
    const {
      filter,
      range: { from, to },
    } = this.state;

    return (
      <div className="App">
        <DateRangePicker
          onChange={this.onDateRangeChange}
          filter={filter}
          start={from}
          end={to}
        ></DateRangePicker>
      </div>
    );
  }
}
