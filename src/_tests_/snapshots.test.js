import React from 'react';
// import { render } from '@testing-library/react';
import { renderer, TestRenderer } from 'react-test-renderer';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import App from '../components/App';
import Nav from '../components/Nav';
import Home from '../components/Home';
import rootReducer from '../reducers/index';
import initialState from './storeStateForTests';
import Meals from '../containers/Meals';

const store = createStore(rootReducer, initialState);
const { act } = TestRenderer;
describe('Snapshots', () => {
  it('renders App correctly', () => {
    let tree;
    act(() => {
      tree = renderer.create(<App />).toJSON();
    });

    expect(tree).toMatchSnapshot();
  });

  it('renders Home correctly', () => {
    const tree = renderer.create(<Home />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders Nav correctly', () => {
    const tree = renderer.create(<Nav />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('renders Meals correctly', () => {
    act(() => {
      const tree = renderer
        .create(
          <Provider store={store}>
            <Router>
              <Meals />
            </Router>
          </Provider>,
        )
        .toJSON();
      expect(tree).toMatchSnapshot();
    });
  });
});
