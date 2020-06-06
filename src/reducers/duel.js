const duelReducer = (state = { progress: false }, action) => {
  switch (action.type) {
    case 'START_DUEL':
      return { ...action.payload, progress: true, starts_at: new Date() };
    case 'CLEAR_DUEL':
      return {};
    default:
      return state;
  }
};

export default duelReducer;
