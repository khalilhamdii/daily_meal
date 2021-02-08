import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import homeBg from '../assets/home-bg.jpg';

const HomeDiv = styled.div`
  background: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)),
    url(${homeBg}) no-repeat;
  background-size: auto, cover;
`;

const Home = () => (
  <HomeDiv className="vw-100 vh-100 primary-color d-flex align-items-center justify-content-center text-white">
    <div className="jumbotron jumbotron-fluid bg-transparent">
      <div className="container secondary-color">
        <h1 className="display-4">Daily meal</h1>
        <p className="lead">
          A curated list of recipes for the best homemade meal and delicacies.
        </p>
        <hr className="my-4" />
        <Link to="/meals" className="view-meals">
          <h4>View meals</h4>
        </Link>
      </div>
    </div>
  </HomeDiv>
);

export default Home;
