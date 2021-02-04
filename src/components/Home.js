/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { addMeals } from '../actions/index';
import mealsStateToHome from '../helpers/index';
import { CATEGORIES } from '../constants/index';
import homeBg from '../assets/home-bg.jpg';

const HomeDiv = styled.div`
  background: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)),
    url(${homeBg}) no-repeat;
  background-size: auto, cover;
`;

const Home = props => {
  const { meals } = props;
  console.log(meals);
  useEffect(() => {
    if (meals.length === 0) {
      console.log('Fetching');
      const urls = [];
      CATEGORIES.forEach(category => urls.push(
        `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`,
      ));

      Promise.all(
        urls.map(url => fetch(url)
          .then(response => response.json())
          .catch(err => console.error(err))),
      )
        .then(categories => categories.map(category => category.meals).flat(1))
        .then(meals => props.addMeals(meals))
        .catch(err => console.log(err));
    }
  }, []);
  return (
    <HomeDiv className="vw-100 vh-100 primary-color d-flex align-items-center justify-content-center text-white">
      <div className="jumbotron jumbotron-fluid bg-transparent">
        <div className="container secondary-color">
          <h1 className="display-4">Daily meal</h1>
          <p className="lead">
            A curated list of recipes for the best homemade meal and delicacies.
          </p>
          <hr className="my-4" />
          <Link to="/categories" className="btn btn-lg orange" role="button">
            View Categories
          </Link>
        </div>
      </div>
    </HomeDiv>
  );
};

export default connect(mealsStateToHome, { addMeals })(Home);
