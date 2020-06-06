import React, { Component } from 'react';

const result = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
};

const list = {
  textAlign: 'left',
};

export class Home extends Component {
  render() {
    return (
      <div style={result}>
        <strong>Welcome to Duel-icious web application</strong>
        <strong>You can do the following things:</strong>
        <ul style={list}>
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
        </ul>
      </div>
    );
  }
}

export default Home;
