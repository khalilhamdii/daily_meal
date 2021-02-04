/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Category from '../components/Category';
import categoriesBg from '../assets/categories-bg.jpg';

const CategoriesDiv = styled.div`
  background: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)),
    url(${categoriesBg}) no-repeat;
  background-size: auto, cover;
  min-height: 100vh;
`;
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
      <CategoriesDiv className="py-5">
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
      </CategoriesDiv>
    </>
  );
};

export default Categories;
