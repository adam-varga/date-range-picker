import React from "react";
import {
  Container,
  Header,
  SelectedRange,
  FiltersContainer,
  Filter,
} from "./DateRangePicker.styles";
import PropTypes from "prop-types";

export const FILTERS = {
  DAY: "DAY",
  WEEK: "WEEK",
  MONTH: "MONTH",
  RANGE: "RANGE",
};

const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const filterProps = [
  {
    id: FILTERS.DAY,
    text: "Day",
  },
  {
    id: FILTERS.WEEK,
    text: "Week",
  },
  {
    id: FILTERS.MONTH,
    text: "Month",
  },
  {
    id: FILTERS.RANGE,
    text: "Range",
    icon: "calendar",
  },
];

export default class DateRangePicker extends React.Component {
  onChange = (newState) => {
    const { onChange } = this.props;

    onChange && typeof onChange === "function" && this.props.onChange(newState);
  };

  getPresetRange = (presetFilter) => {
    const today = new Date();

    switch (presetFilter) {
      case FILTERS.DAY: {
        return {
          start: today,
          end: today,
        };
      }

      case FILTERS.WEEK: {
        const oneWeekFromNow = new Date();

        oneWeekFromNow.setDate(oneWeekFromNow.getDate() + 7);

        return {
          start: today,
          end: oneWeekFromNow,
        };
      }

      case FILTERS.MONTH: {
        const firstDayOfMonth = new Date();

        firstDayOfMonth.setDate(1);

        return {
          start: firstDayOfMonth,
          end: today,
        };
      }

      default:
        break;
    }
  };

  onFilterChange = (filter) => {
    const { props } = this;

    if (filter === props.filter) {
      return;
    }

    /**
     * If range is selected, use previously selected filter to define range if not use the newly selected one.
     */
    const range = this.getPresetRange(
      filter === FILTERS.RANGE ? props.filter : filter
    );

    this.onChange({
      filter,
      ...range,
    });
  };

  getDateString = (date, options = {}) => {
    function getExactDigitNumberString(n, digits) {
      n = `${n}`;

      if (n.length === digits) {
        return n;
      } else if (n.length > digits) {
        return n.substr(n.length - digits);
      } else {
        return new Array(digits - n.length + 1).join(0) + n;
      }
    }

    let string =
      getExactDigitNumberString(date.getMonth() + 1, 2) +
      "/" +
      getExactDigitNumberString(date.getDate(), 2);

    if (options.showYear) {
      string +=
        "/" +
        getExactDigitNumberString(date.getYear(), options.yearDigits || 4);
    }

    return string;
  };

  getSelectedRangeText = () => {
    switch (this.props.filter) {
      case FILTERS.DAY: {
        return "Today";
      }

      case FILTERS.WEEK: {
        const { start, end } = this.props;

        return `${this.getDateString(start)} - ${this.getDateString(end)}`;
      }

      case FILTERS.MONTH: {
        return monthNames[new Date().getMonth()];
      }

      case FILTERS.RANGE: {
        const { start, end } = this.props;

        return (
          this.getDateString(start, { showYear: true, yearDigits: 2 }) +
          " - " +
          this.getDateString(end, { showYear: true, yearDigits: 2 })
        );
      }

      default:
        break;
    }
  };

  render() {
    return (
      <Container>
        <Header>
          <SelectedRange>{this.getSelectedRangeText()}</SelectedRange>
          <FiltersContainer>
            {filterProps.map((filter) => (
              <Filter
                key={filter.id}
                active={this.props.filter === filter.id}
                onClick={() => this.onFilterChange(filter.id)}
                icon={filter.icon}
              >
                {filter.text}
              </Filter>
            ))}
          </FiltersContainer>
        </Header>
      </Container>
    );
  }
}

const today = new Date();

DateRangePicker.defaultProps = {
  filter: FILTERS.DAY,
  start: today,
  end: today,
};

DateRangePicker.propTypes = {
  filter: PropTypes.oneOf(Object.values(FILTERS)),
  start: PropTypes.instanceOf(Date),
  end: function endDate(props, propName, componentName) {
    const isDate = props.end instanceof Date;

    if (!isDate) {
      return new Error(
        `Invalid prop \`${propName}\` passed to \`${componentName}\`. Expected Date object instance.`
      );
    }

    if (props.end < props.start) {
      return new Error(
        `Invalid prop \`${propName}\` passed to \`${componentName}\`. End date can't be earlier than start date.`
      );
    }
  },
};
