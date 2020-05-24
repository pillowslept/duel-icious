// CHARACTERS

export const addCharacter = (character) => {
  return {
    type: 'ADD_CHARACTER',
    payload: character,
  };
};

export const updateCharacter = (character) => {
  return {
    type: 'UPDATE_CHARACTER',
    payload: character,
  };
};

// DUELS

export const startDuel = (leftCharacter, rightCharacter) => {
  return {
    type: 'START_DUEL',
    payload: {
      leftCharacter,
      rightCharacter
    }
  };
};

export const finishDuel = () => {
  return {
    type: 'FINISH_DUEL',
  };
};

export const addDuelWinner = (duel) => {
  return {
    type: 'ADD_DUEL_WINNER',
    payload: duel
  };
};

// SPECIALITIES

export const addSpeciality = (speciality) => {
  return {
    type: 'ADD_SPECIALITY',
    payload: speciality
  };
};