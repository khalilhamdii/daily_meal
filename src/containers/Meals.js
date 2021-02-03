import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Meal from '../components/Meal';
/* eslint-disable react/prop-types */
const Meals = props => {
  const [meals, setMeals] = useState([]);
  const category = 'Seafood';
  useEffect(() => {
    const url = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`;
    fetch(url)
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(response => setMeals(response.meals))
      .catch(() => props.history.push('/'));
  }, []);

  return (
    <>
      <div className="py-5">
        <main className="container">
          <Link to="/categories" className="btn btn-link">
            Categories
          </Link>
          <div className="row">
            {meals.map(meal => (
              <Meal key={meal.idMeal} meal={meal} />
            ))}
          </div>
        </main>
      </div>
    </>
  );
};

export default Meals;
