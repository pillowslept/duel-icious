const duelReducer = (state = {}, action) => {
  switch (action.type) {
    case 'START_DUEL':
      return { ...action.payload };
    case 'FINISH_DUEL':
      return {};
    default:
      return state;
  }
};

export default duelReducer;
