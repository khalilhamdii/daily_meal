/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import Home from '../components/Home';
import Categories from '../containers/Categories';
import Meals from '../containers/Meals';
import { CATEGORIES } from '../constants/index';
import { addMeals } from '../actions/index';
import mealsStateToProps from '../helpers/index';

const Routes = props => {
  useEffect(() => {
    const { meals } = props;
    console.log(meals);
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
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/categories" exact component={Categories} />
        <Route path="/meals" exact component={Meals} />
      </Switch>
    </Router>
  );
};

export default connect(mealsStateToProps, { addMeals })(Routes);
