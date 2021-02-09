/* eslint-disable arrow-parens */
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { mealsStateToProps, ingredientAndMesue } from '../helpers/index';
import Nav from './Nav';

const RecipeDiv = styled.div`
  background: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)),
    url(${(props) => props.url}) no-repeat;
  background-size: auto, cover;
  min-height: 100vh;
`;

const Recipe = (props) => {
  const { meals } = props;
  const {
    match: {
      params: { id },
    },
  } = props;

  const meal = meals.filter((meal) => meal.idMeal === id)[0];
  const instructions = meal.strInstructions
    .replace('\r\n', '')
    .split('.')
    .filter((i) => i);
  const ingredients = ingredientAndMesue(meal);

  return (
    <>
      <Nav />
      <RecipeDiv url={meal.strMealThumb}>
        <div className="container text-white">
          <Link to="/meals" className="btn back-link my-5">
            <i className="fa fa-reply mr-2" />
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
                <img
                  className="col-sm-12 col-lg-7 mb-5"
                  src={meal.strMealThumb}
                  alt={meal.strMeal}
                />
                <div className="col-sm-12 col-lg-3">
                  <h5 className="my-4">Ingredients</h5>
                  <ul>
                    {ingredients.map((ing) => (
                      <li key={ing} className="mb-2 pl-2">
                        {ing}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="d-flex flex-column mt-5">
                <h5 className="my-4">Preparation Instructions</h5>
                <ol>
                  {instructions.map((inst) => (
                    <li key={inst} className="mb-2 pl-2">
                      {`${inst}.`}
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        </div>
      </RecipeDiv>
    </>
  );
};

Recipe.propTypes = {
  meals: PropTypes.arrayOf(
    PropTypes.shape({
      idMeal: PropTypes.string,
      strMeal: PropTypes.string,
      strCategory: PropTypes.string,
      strArea: PropTypes.string,
      strMealThumb: PropTypes.string,
    }),
  ),
  match: PropTypes.shape({ params: PropTypes.shape({ id: PropTypes.string }) }),
};

Recipe.defaultProps = {
  meals: [],
  match: {
    params: { id: '52772' },
  },
};

export default connect(mealsStateToProps)(Recipe);
