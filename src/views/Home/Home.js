import React from 'react';
import {
  Container,
  Options,
} from './Home.css';

const Home = () => {
  return (
    <Container
      align="center"
      column
    >
      <strong>Welcome to Duel-icious web application</strong>
      <strong>You can do the following things:</strong>
      <Options>
        <li>
          Configure new specialities
        </li>
        <li>
          Add some characters
        </li>
        <li>
          Create duels between the characters
        </li>
        <li>
          See the duels history
        </li>
      </Options>
    </Container>
  );
};

export default Home;
