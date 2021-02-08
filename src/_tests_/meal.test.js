import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import '@testing-library/jest-dom/extend-expect';
import Meal from '../components/Meal';

describe('rendered Meal', () => {
  const meal = {
    idMeal: 1,
    strMeal: 'meal',
    strCategory: 'category',
    strArea: 'area',
  };
  render(
    <Router>
      <Meal meal={meal} />
    </Router>,
  );

  test('has Text element', () => {
    const element = screen.getByText(/Show meal/i);
    expect(element).toBeInTheDocument();
  });
});
