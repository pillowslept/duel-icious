import styled, { css } from 'styled-components';

export const Legend = styled.span`
  font-size: 0.75rem;
  font-style: italic;
`;

export const Label = styled.label`
  margin-right: 0.5rem;
  font-weight: bold;
`;

export const Row = styled.div`
  margin-bottom: 0.5rem;
`;

export const Input = styled.input`
  border-radius: 0.4rem;
  padding: 0.3rem 0.5rem;
  border: solid 0.0625rem gray;

  &:active, &:focus {
    outline: none !important;
    border-color: #22A7F0;
    box-shadow: 0 0 0.625rem #22A7F0;
  }
`;

export const Button = styled.button`
  font-size: 0.9375rem;
  color: #22A7F0;
  outline: 0;
  border: 0;
  background: none;
  padding: 0.3rem 2.5rem;
  cursor: pointer;
  border-radius: 1rem;
  border: 0.125rem solid #22A7F0;
  transition: all 0.3s ease;

  ${({ disabled }) => !disabled && css`
    &:hover, &:active {
      background-color: #22A7F0;
      color: #FFF;
    }
  `}

  ${({ disabled }) => disabled && css`
    cursor: not-allowed;
  `}

  ${({ isCancel }) => isCancel && css`
    margin-left: 0.5rem;
    color: #F62459;
    border-color: #F62459;

    &:hover, &:active {
      background-color: #F62459;
      color: #FFF;
    }
  `}
`;
