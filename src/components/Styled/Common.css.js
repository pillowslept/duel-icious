import styled, { css } from 'styled-components';

export const Legend = styled.span`
  font-size: 12px;
  font-style: italic;
`;

export const Button = styled.button`
  box-shadow: inset 0px 1px 0px 0px #ffffff;
  background: linear-gradient(to bottom, #ffffff 5%, #f6f6f6 100%);
  background-color: #ffffff;
  border-radius: 6px;
  border: 1px solid #dcdcdc;
  display: inline-block;
  cursor: pointer;
  color: #666666;
  font-family: Arial;
  font-size: 15px;
  font-weight: bold;
  padding: 6px 24px;
  text-decoration: none;
  text-shadow: 0px 1px 0px #ffffff;
  outline-color: #dcdcdc;

  &:hover {
    background: linear-gradient(to bottom, #f6f6f6 5%, #ffffff 100%);
    background-color: #f6f6f6;
  }

  &:active {
    position: relative;
    top: 1px;
  }

  &:disabled {
    cursor: not-allowed;
  }
`;
