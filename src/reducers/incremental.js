const incrementalReducer = (state = { speciality: 1, character: 1 }, action) => {
  switch (action.type) {
    case 'INCREMENT_CHARACTER_ID':
      return { ...state, character: state.character + 1 };
    case 'INCREMENT_SPECIALITY_ID':
      return { ...state, speciality: state.speciality + 1 };
    default:
      return state;
  }
};

export default incrementalReducer;
