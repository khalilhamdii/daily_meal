/* eslint-disable arrow-parens */
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import Home from '../components/Home';
import Meals from '../containers/Meals';
import Recipe from '../components/Recipe';
import { CATEGORIES } from '../constants/index';
import { addMeals } from '../actions/index';
import { mealsStateToProps } from '../helpers/index';

const Routes = (props) => {
  useEffect(() => {
    const { meals } = props;
    if (meals.length === 0) {
      const urls = [];

      CATEGORIES.forEach((category) => (category !== 'All categories'
        ? urls.push(
          `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`,
        )
        : null));

      Promise.all(
        urls.map((url) => fetch(url)
          .then((response) => response.json())
          .catch((err) => err)),
      )
        .then((categories) => categories.map((category) => category.meals).flat(1))
        .then((catMeals) => catMeals.map((meal) => meal.idMeal))
        .then((idArr) => Promise.all(
          idArr.map((id) => fetch(
            `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`,
          )
            .then((response) => response.json())
            .then((json) => json.meals)
            .catch((err) => err)),
        ))
        .then((meals) => {
          const result = meals.flat(1);
          props.addMeals(result);
        })
        .catch((err) => err);
    }
  }, []);
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/meals" exact component={Meals} />
        <Route path="/meals/:id" exact component={Recipe} />
      </Switch>
    </BrowserRouter>
  );
};

Routes.propTypes = {
  meals: PropTypes.arrayOf(
    PropTypes.shape({
      idMeal: PropTypes.string,
      strMeal: PropTypes.string,
      strCategory: PropTypes.string,
      strArea: PropTypes.string,
      strMealThumb: PropTypes.string,
    }),
  ),
  addMeals: PropTypes.func,
};

Routes.defaultProps = {
  meals: [],
  addMeals: (meals) => ({
    type: 'ADD_MEALS',
    payload: { meals },
  }),
};

export default connect(mealsStateToProps, { addMeals })(Routes);
