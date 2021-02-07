import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Nav from '../components/Nav';

describe('rendered Home', () => {
  render(<Nav />);

  test('has Text element', () => {
    const element = screen.getByText(/Daily meal/i);
    expect(element).toBeInTheDocument();
  });
});
