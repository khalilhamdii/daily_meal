/* eslint-disable react/prop-types */
/* eslint-disable arrow-parens */
import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import styled from 'styled-components';
import Meal from '../components/Meal';
import mealsBg from '../assets/meals-bg.jpg';
import { filtredMealsToProps } from '../helpers/index';
import { changeCategoryFilter, changeAreaFilter } from '../actions/index';
import MealsFilter from '../components/MealsFilter';
import Nav from '../components/Nav';

const MealsDiv = styled.div`
  background: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)),
    url(${mealsBg}) no-repeat;
  background-size: auto, cover;
  min-height: 100vh;
`;
const Meals = (props) => {
  const { meals, filter } = props;
  console.log(meals);
  const handleCatFilterChange = (filter) => {
    props.changeCategoryFilter(filter);
  };
  const handleAreaFilterChange = (filter) => {
    props.changeAreaFilter(filter);
  };
  return (
    <>
      <Nav />
      <MealsDiv className="py-5">
        <main className="container">
          <MealsFilter
            filter={filter}
            handleCatFilterChange={handleCatFilterChange}
            handleAreaFilterChange={handleAreaFilterChange}
          />
          <Link to="/" className="btn back-link my-5">
            <i className="fa fa-reply mr-2" />
            Back to Home
          </Link>
          <div className="row">
            {meals.map((meal) => (
              <Meal key={meal.idMeal} meal={meal} />
            ))}
          </div>
        </main>
      </MealsDiv>
    </>
  );
};

export default connect(filtredMealsToProps, {
  changeCategoryFilter,
  changeAreaFilter,
})(Meals);
