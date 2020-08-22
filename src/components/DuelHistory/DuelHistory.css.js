import styled from 'styled-components';

export const CardContainer = styled.div`
  display: grid;
  grid-auto-rows: auto;
  grid-gap: 1rem;
  grid-template-columns: repeat(4, 1fr);

  @media (max-width: 1000px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 800px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 600px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const Character = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.span`
  font-weight: bold;
`;

export const DescriptionContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #282c34;
  border-radius: 5px;
  padding: 1rem;
`;

