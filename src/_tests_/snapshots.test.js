import React from 'react';
import TestRenderer from 'react-test-renderer';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
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
      tree = TestRenderer.create(<App />).toJSON();
    });

    expect(tree).toMatchSnapshot();
  });

  it('renders Home correctly', () => {
    const tree = TestRenderer.create(
      <BrowserRouter>
        <Home />
      </BrowserRouter>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders Nav correctly', () => {
    const tree = TestRenderer.create(<Nav />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('renders Meals correctly', () => {
    act(() => {
      const tree = TestRenderer.create(
        <Provider store={store}>
          <BrowserRouter>
            <Meals />
          </BrowserRouter>
        </Provider>,
      ).toJSON();
      expect(tree).toMatchSnapshot();
    });
  });
});
