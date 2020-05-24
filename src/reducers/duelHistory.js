const duelHistoryReducers = (state = [], action) => {
  switch (action.type) {
    case 'ADD_DUEL_WINNER':
      return [...state, { ...action.payload }];
    default:
      return state;
  }
};

export default duelHistoryReducers;
