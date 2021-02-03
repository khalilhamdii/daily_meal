import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Category from '../components/Category';
/* eslint-disable react/prop-types */
const Categories = props => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const url = 'https://www.themealdb.com/api/json/v1/1/categories.php';
    fetch(url)
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(response => setCategories(response.categories))
      .catch(() => props.history.push('/'));
  }, []);

  return (
    <>
      <div className="py-5">
        <main className="container">
          <Link to="/" className="btn btn-link">
            Home
          </Link>
          <div className="row">
            {categories.map(category => (
              <Category key={category.idCategory} category={category} />
            ))}
          </div>
        </main>
      </div>
    </>
  );
};

export default Categories;
