const charactersReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_CHARACTER': {
      const lastCharacter = [...state].pop();
      const id = lastCharacter ? lastCharacter.id + 1 : 1;

      return [...state, { ...action.payload, selected: false, id }];
    }
    case 'UPDATE_CHARACTER':
      const index = state.findIndex(({ id }) => id === action.payload.id);
      state.splice(index, 1, action.payload);

      return [...state];
    default:
      return state;
  }
};

export default charactersReducer;
