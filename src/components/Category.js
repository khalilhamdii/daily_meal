/* eslint-disable react/prop-types */
import React from 'react';

// import { Link } from 'react-router-dom';

const Category = props => {
  const { category } = props;
  return (
    <div className="col-md-6 col-lg-4">
      <div className="card mb-4">
        <img
          src={category.strCategoryThumb}
          className="card-img-top"
          alt={`${category.strCategory}`}
        />
        <div className="card-body">
          <h5 className="card-title">{category.strCategory}</h5>
          <a href="/meals" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
    </div>
  );
};

export default Category;
