/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Meal from '../components/Meal';
import mealsBg from '../assets/meals-bg.jpg';

const MealsDiv = styled.div`
  background: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)),
    url(${mealsBg}) no-repeat;
  background-size: auto, cover;
  min-height: 100vh;
`;
const Meals = (props) => {
  // const [meals, setMeals] = useState([]);
  // useEffect(() => {
  //   const urls = [];
  //   CATEGORIES.forEach((category) =>
  //     urls.push(
  //       `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`
  //     )
  //   );

  //   Promise.all(
  //     urls.map((url) =>
  //       fetch(url)
  //         .then((response) => response.json())
  //         .catch((err) => console.error(err))
  //     )
  //   )
  //     .then((categories) =>
  //       categories.map((category) => category.meals).flat(1)
  //     )
  //     .then((meals) => setMeals(meals))
  //     .catch(() => props.history.push('/'));
  // }, []);

  return (
    <>
      <MealsDiv className="py-5">
        <main className="container">
          <Link to="/categories" className="btn btn-link">
            Categories
          </Link>
          <div className="row">
            {meals.map((meal) => (
              <Meal key={meal.idMeal} meal={meal} />
            ))}
          </div>
        </main>
      </MealsDiv>
    </>
  );
};

export default Meals;
