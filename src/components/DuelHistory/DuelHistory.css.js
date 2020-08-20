import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
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
  width: 25%;
  border: 1px solid #282c34;
  border-radius: 5px;
  padding: 1rem;
  margin-right: 1rem;
  margin-bottom: 1rem;

  @media (max-width: 600px) {
    width: 100%;
  }
`;

