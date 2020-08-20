import styled, { css } from 'styled-components';

export const FlexContainer = styled.div`
  display: flex;
  flex-direction: ${({ column }) => column ? 'column' : 'row' };
  justify-content: ${({ justifyContent }) => justifyContent ? justifyContent : 'initial' };

  ${({ align }) => align && css`
    align-items: ${align};
  `}
`;
