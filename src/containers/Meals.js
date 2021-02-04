/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Meal from '../components/Meal';
import mealsBg from '../assets/meals-bg.jpg';

const MealsDiv = styled.div`
  background: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)),
    url(${mealsBg}) no-repeat;
  background-size: auto, cover;
  min-height: 100vh;
`;
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
      <MealsDiv className="py-5">
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
      </MealsDiv>
    </>
  );
};

export default Meals;
