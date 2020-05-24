import React, { Component } from 'react';
import StartDuel from '../components/StartDuel';
import Duel from '../components/Duel';
import DuelHistory from '../components/DuelHistory';

export class Duels extends Component {
  render() {
    return (
      <div>
        <StartDuel />
        <hr />
        <Duel />
        <hr />
        <DuelHistory />
      </div>
    );
  }
}

export default Duels;
