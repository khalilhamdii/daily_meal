/* eslint-disable react/prop-types */
/* eslint-disable arrow-parens */
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { mealsStateToProps } from '../helpers/index';
import Nav from './Nav';

const Recipe = (props) => {
  const { meals } = props;
  const {
    match: {
      params: { id },
    },
  } = props;

  const meal = meals.filter((meal) => meal.idMeal === id)[0];
  const RecipeDiv = styled.div`
    background: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)),
      url(${meal.strMealThumb}) no-repeat;
    background-size: auto, cover;
    min-height: 100vh;
  `;
  console.log(meal);
  return (
    <>
      <Nav />
      <RecipeDiv>
        <div className="container text-white">
          <Link to="/meals" className="btn btn-link py-4">
            Back to meals
          </Link>
          <div>
            <div className="hero position-relative d-flex align-items-center justify-content-center">
              <div className="overlay bg-dark position-absolute" />
              <h1 className="display-4 position-relative text-white">
                {meal.strMeal}
              </h1>
            </div>
            <div className="container py-5">
              <div className="row">
                <div className="col-sm-12 col-lg-3">
                  <ul className="list-group">
                    <h5 className="mb-2">Ingredients</h5>
                  </ul>
                </div>
                <div className="col-sm-12 col-lg-7">
                  <h5 className="mb-2">Preparation Instructions</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </RecipeDiv>
    </>
  );
};

export default connect(mealsStateToProps)(Recipe);
