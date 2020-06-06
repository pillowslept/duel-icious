const duelHistoryReducers = (state = [], action) => {
  switch (action.type) {
    case 'ADD_DUEL_WINNER':
      return [{ ...action.payload, finished_at: new Date() }, ...state];
    default:
      return state;
  }
};

export default duelHistoryReducers;
