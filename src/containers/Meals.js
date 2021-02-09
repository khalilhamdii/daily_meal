/* eslint-disable arrow-parens */
import '../assets/loader.css';
import React from 'react';
import PropTypes from 'prop-types';
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
          <div className="w-100 d-flex justify-content-center mt-2">
            <div
              id="loader-icon"
              className={`${meals.length === 0 ? 'loader' : ''}`}
            />
          </div>
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

Meals.propTypes = {
  meals: PropTypes.arrayOf(
    PropTypes.shape({
      idMeal: PropTypes.string,
      strMeal: PropTypes.string,
      strCategory: PropTypes.string,
      strArea: PropTypes.string,
      strMealThumb: PropTypes.string,
    }),
  ),
  filter: PropTypes.shape({
    category: PropTypes.string,
    area: PropTypes.string,
  }),
  changeCategoryFilter: PropTypes.func,
  changeAreaFilter: PropTypes.func,
};

Meals.defaultProps = {
  meals: [],
  filter: {
    category: 'All categories',
    area: 'All areas',
  },
  changeCategoryFilter: (filter) => ({
    type: 'CHANGE_CATEGORY_FILTER',
    payload: { filter },
  }),
  changeAreaFilter: (filter) => ({
    type: 'CHANGE_AREA_FILTER',
    payload: { filter },
  }),
};

export default connect(filtredMealsToProps, {
  changeCategoryFilter,
  changeAreaFilter,
})(Meals);
