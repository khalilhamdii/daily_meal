/* eslint-disable arrow-parens */
import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Meal = (props) => {
  const { meal } = props;
  return (
    <div className="col-sm-6 col-md-4 col-lg-3 mt-4">
      <div className="card">
        <img
          className="card-img-top"
          src={meal.strMealThumb}
          alt={`${meal.strMeal}`}
        />
        <div className="card-block p-2">
          <h4 className="card-title text-truncate mt-3">{meal.strMeal}</h4>
          <div className="meta">
            <h6>{`Category : ${meal.strCategory}`}</h6>
          </div>
        </div>
        <div className="card-footer text-success ">
          {meal.strArea}
          <Link
            to={`/meals/${meal.idMeal}`}
            className="btn btn-secondary float-right btn-sm"
          >
            Show meal
          </Link>
        </div>
      </div>
    </div>
  );
};

Meal.propTypes = {
  meal: PropTypes.shape({
    idMeal: PropTypes.string,
    strMeal: PropTypes.string,
    strCategory: PropTypes.string,
    strArea: PropTypes.string,
    strMealThumb: PropTypes.string,
  }),
};

Meal.defaultProps = {
  meal: {
    idMeal: '52772',
    strMeal: 'Teriyaki Chicken Casserole',
    strCategory: 'Chicken',
    strArea: 'Japanese',
    strMealThumb:
      'https://www.themealdb.com/images/media/meals/wvpsxx1468256321.jpg',
  },
};

export default Meal;
