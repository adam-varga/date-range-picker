import React from "react";
import styled, { css } from "styled-components";
import Icon from "../common/icon/Icon";

export const Container = styled.div`
  display: block;
  background: #141414;
  padding: 20px;
  font-family: sans-serif;
  width: 100%;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const SelectedRange = styled.h1`
  color: white;
  font-size: 24px;
  font-weight: normal;
  margin: 0;
`;

export const FiltersContainer = styled.div`
  display: flex;
  align-items: center;
`;

const filterLinkHeight = 15;

const FilterLink = styled.a`
  color: #a1a1a1;
  font-size: 10px;
  text-transform: uppercase;
  letter-spacing: 1px;
  letter-spacing: 1.5px;
  text-decoration: none;
  border-bottom: 1px solid transparent;
  margin: 0 10px;
  padding: 4px 0;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  display: inline-flex;
  align-items: center;
  height: ${filterLinkHeight}px;

  span {
    display: inline-block;
  }

  &:hover {
    color: white;
  }

  ${(props) =>
    props.active &&
    css`
      color: #f54141;
      border-bottom-color: #f54141;
      cursor: default;

      &:hover {
        color: #f54141;
      }
    `}
`;

const FilterIconContainer = styled.div`
  margin-right: 5px;
  display: inline-block;
  position: relative;
  top: 2px;
`;

export const Filter = (props) => (
  <FilterLink {...props}>
    {props.icon && (
      <FilterIconContainer>
        <Icon size={filterLinkHeight} icon={props.icon} />
      </FilterIconContainer>
    )}
    <span>{props.children}</span>
  </FilterLink>
);
