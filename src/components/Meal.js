/* eslint-disable react/prop-types */
import React from 'react';

// import { Link } from 'react-router-dom';

const Meal = props => {
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
          <h5 className="card-title text-truncate">{meal.strMeal}</h5>
          <a href="/meals" className="btn btn-primary">
            View meal
          </a>
        </div>
      </div>
    </div>
  );
};

export default Meal;
