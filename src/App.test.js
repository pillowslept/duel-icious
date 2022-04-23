import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { render, screen } from '@testing-library/react';

import reducers from './reducers';

import App from './App';

const store = createStore(
  reducers,
);

describe('App component', () => {
  it('renders appropriately', () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );
    expect(screen.getByText('Psssssss!!!')).toBeInTheDocument();
  });
});
