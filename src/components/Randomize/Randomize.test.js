import React from 'react';
import { Provider } from 'react-redux';
import { combineReducers, createStore } from 'redux';
import { render, screen } from '@testing-library/react';
import Randomize from './Randomize';

import specialitiesReducer from '../../reducers/specialities';

const store = createStore(
  combineReducers({
    specialities: specialitiesReducer,
  })
);

describe('Randomize component', () => {
  it('renders appropriately', () => {
    render(
      <Provider store={store}>
        <Randomize />
      </Provider>
    );
    expect(screen.getByText('Psssssss!!!')).toBeInTheDocument();
  });
});
