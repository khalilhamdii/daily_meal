/* eslint-disable react/prop-types */
import React from 'react';

import { Link } from 'react-router-dom';

const Category = props => {
  const { category } = props;
  return (
    <div className="col-md-6 col-lg-4">
      <div className="card mb-4 bg-faded">
        <img
          src={category.strCategoryThumb}
          className="card-img-top"
          alt={`${category.strCategory}`}
        />
        <div
          className="card-body"
          style={{ backgroundColor: 'rgba(230, 167, 86, 0.95)' }}
        >
          <h5 className="card-title">
            <Link to="/meals">{category.strCategory}</Link>
          </h5>
        </div>
      </div>
    </div>
  );
};

export default Category;
