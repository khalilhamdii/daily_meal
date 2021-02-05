/* eslint-disable react/prop-types */
/* eslint-disable arrow-parens */
import React from 'react';
import { Link } from 'react-router-dom';

const Meal = (props) => {
  const { meal } = props;
  return (
    <div className="col-md-6 col-lg-4">
      <div className="card mb-4 bg-faded">
        <img
          src={meal.strMealThumb}
          className="card-img-top"
          alt={`${meal.strMeal}`}
        />
        <div className="card-body">
          <h5 className="card-title text-truncate">
            <Link to={`/meals/${meal.idMeal}`}>{meal.strMeal}</Link>
          </h5>
        </div>
      </div>
    </div>
  );
};

export default Meal;
