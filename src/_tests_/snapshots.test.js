import React from 'react';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';
import Nav from '../components/Nav';
import Home from '../components/Home';
import Meals from '../containers/Meals';

describe('Snapshots', () => {
  it('renders Home correctly', () => {
    const tree = renderer.create(<Home />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('renders Meals correctly', () => {
    const tree = renderer.create(<Meals />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
