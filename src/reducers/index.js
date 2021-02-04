import { combineReducers } from 'redux';
import mealsReducer from './mealsReducer';
import filterReducer from './filterReducer';

export default combineReducers({ mealsReducer, filterReducer });
