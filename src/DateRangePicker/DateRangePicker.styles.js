import styled, { css } from "styled-components";

export const DateRangePicker = styled.div`
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
  margin: 0;
`;

export const FiltersContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const Filter = styled.a`
  color: #a1a1a1;
  font-size: 10px;
  text-transform: uppercase;
  letter-spacing: 1px;
  letter-spacing: 1.5px;
  text-decoration: none;
  border-bottom: 1px solid transparent;
  margin: 0 10px;
  padding: 5px 0;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

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
