import React, { Component } from 'react';
import AddCharacter from 'components/AddCharacter';
import CharacterList from 'components/CharacterList';

export class Characters extends Component {
  render() {
    return (
      <div>
        <AddCharacter />
        <hr />
        <CharacterList />
      </div>
    );
  }
}

export default Characters;
