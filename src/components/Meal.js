/* eslint-disable react/prop-types */
/* eslint-disable arrow-parens */
import React from 'react';
import { Link } from 'react-router-dom';

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

export default Meal;
