import React from 'react';
import StartDuel from 'components/StartDuel/StartDuel';
import Duel from 'components/Duel/Duel';
import DuelHistory from 'components/DuelHistory/DuelHistory';

const Duels = () => {
  return (
    <div>
      <StartDuel />
      <hr />
      <Duel />
      <hr />
      <DuelHistory />
    </div>
  );
};

export default Duels;
