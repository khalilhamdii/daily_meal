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
      <section className="jumbotron jumbotron-fluid text-center">
        <div className="container py-5">
          <h1 className="display-4">Recipes for every occasion</h1>
          <p className="lead text-muted">
            We’ve pulled together our most popular recipes, our latest
            additions, and our editor’s picks, so there’s sure to be something
            tempting for you to try.
          </p>
        </div>
      </section>
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
