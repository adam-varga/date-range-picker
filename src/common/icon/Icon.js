import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { ReactComponent as CalendarIcon } from "./icons/calendar.svg";
import { ReactComponent as ArrowLeftIcon } from "./icons/arrow-left.svg";
import { ReactComponent as ArrowRightIcon } from "./icons/arrow-right.svg";

const iconComponentMap = {
  calendar: CalendarIcon,
  arrowLeft: ArrowLeftIcon,
  arrowRight: ArrowRightIcon,
};

const IconContainer = styled.div`
  display: inline-block;
  svg {
    width: ${(props) => props.size}px;
    height: ${(props) => props.size}px;
    path {
      fill: ${(props) => props.color};
    }
  }
`;

const Icon = ({ icon, size, color }) => {
  const IconComponent = iconComponentMap[icon];

  return (
    <IconContainer icon={icon} size={size} color={color}>
      <IconComponent />
    </IconContainer>
  );
};

Icon.defaultProps = {
  size: 15,
  color: "currentColor",
};

Icon.propTypes = {
  icon: PropTypes.oneOf(Object.keys(iconComponentMap)).isRequired,
  size: PropTypes.number,
  color: PropTypes.string,
};

export default Icon;
