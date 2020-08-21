import styled, { keyframes, css } from 'styled-components';
import { Link } from 'react-router-dom';

const blinkingEffect = () => {
  return keyframes`
    50% {
      opacity: 0;
    }
  `;
};

export const Container = styled.div`
  padding: 0.8rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #282c34;
  color: white;
`;

export const OptionsContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const BlinkLink = styled(Link)`
  font-weight: bold;
  color: white;
  text-decoration: none;
  margin-left: 1rem;
  display: initial;

  &:hover {
    text-decoration: underline;
  }

  ${({ blink }) => blink && css`
    animation: ${blinkingEffect} 1.5s linear infinite;
  `}

  ${({ hide }) => hide && css`
    @media (max-width: 600px) {
      display: none;
    }
  `}
`;

export const LogoImg = styled.img`
  width: 50px;
`;
