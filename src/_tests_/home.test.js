import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Home from '../components/Home';

describe('rendered Home', () => {
  render(<Home />);

  test('has Text element', () => {
    const element = screen.getByText(
      /A curated list of recipes for the best homemade meal and delicacies./i
    );
    expect(element).toBeInTheDocument();
  });
});
