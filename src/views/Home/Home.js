import React from 'react';
import Randomize from 'components/Randomize/Randomize';
import {
  Options,
} from './Home.css';
import {
  FlexContainer,
} from 'components/Styled/Container.css';

const Home = () => {
  return (
    <FlexContainer
      column
    >
      <FlexContainer
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
      </FlexContainer>
      <Randomize />
    </FlexContainer>
  );
};

export default Home;
