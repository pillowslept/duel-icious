import styled, { css } from 'styled-components';

export const FlexContainer = styled.div`
  display: flex;
  flex-direction: ${({ column }) => column ? 'column' : 'row' };

  ${({ justifyContent }) => justifyContent && css`
    justify-content: ${justifyContent};
  `}

  ${({ align }) => align && css`
    align-items: ${align};
  `}
`;
