import React from 'react';
import AddCharacter from 'components/AddCharacter/AddCharacter';
import CharacterList from 'components/CharacterList/CharacterList';

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
