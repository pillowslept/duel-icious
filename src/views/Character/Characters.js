import React from 'react';
import AddCharacter from 'components/AddCharacter';
import CharacterList from 'components/CharacterList';

const Characters = () => {
  return (
    <div>
      <AddCharacter />
      <hr />
      <CharacterList />
    </div>
  );
};

export default Characters;
