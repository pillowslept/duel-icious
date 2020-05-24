const specialitiesReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_SPECIALITY':
      return [...state, { ...action.payload }];
    default:
      return state;
  }
};

export default specialitiesReducer;
