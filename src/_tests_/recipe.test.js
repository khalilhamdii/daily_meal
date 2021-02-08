import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import rootReducer from '../reducers/index';

import Recipe from '../components/Recipe';
import initialState from './storeStateForTests';

const store = createStore(rootReducer, initialState);
describe('rendered Recipe', () => {
  const match = {
    params: { id: '1' },
  };
  render(
    <Provider store={store}>
      <Router>
        <Recipe match={match} />
      </Router>
    </Provider>,
  );

  test('has Text element', () => {
    const element = screen.getByText(/Preparation Instructions/i);
    expect(element).toBeInTheDocument();
  });
});
