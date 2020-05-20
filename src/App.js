import React from "react";
import DateRangePicker from "./DateRangePicker/DateRangePicker";
import "./App.css";

export default class App extends React.Component {
  onDateChange = console.log;

  render() {
    return (
      <div className="App">
        <DateRangePicker onDateChange={this.onDateChange}></DateRangePicker>
      </div>
    );
  }
}
