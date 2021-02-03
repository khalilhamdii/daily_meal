import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from '../components/Home';
import Categories from '../containers/Categories';
import Meals from '../containers/Meals';

const Routes = () => (
  <Router>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/categories" exact component={Categories} />
      <Route path="/meals" exact component={Meals} />
    </Switch>
  </Router>
);

export default Routes;
