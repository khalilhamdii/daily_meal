/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import styled from 'styled-components';
import Meal from '../components/Meal';
import mealsBg from '../assets/meals-bg.jpg';
import mealsStateToHome from '../helpers/index';

const MealsDiv = styled.div`
  background: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)),
    url(${mealsBg}) no-repeat;
  background-size: auto, cover;
  min-height: 100vh;
`;
const Meals = props => {
  const { meals } = props;
  console.log(meals);
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

export default connect(mealsStateToHome)(Meals);
