import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import MealsFilter from '../components/MealsFilter';

describe('rendered MealsFilter', () => {
  const filter = {
    category: 'All categories',
    area: 'All areas',
  };
  render(<MealsFilter filter={filter} />);

  test('has Text element', () => {
    const element = screen.getByText(/FILTER MEALS :/i);
    expect(element).toBeInTheDocument();
  });
});
