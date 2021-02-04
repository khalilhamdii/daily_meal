import { ADD_MEALS, CHANGE_FILTER } from '../constants/index';

export const addMeals = meals => ({
  type: ADD_MEALS,
  payload: { meals },
});

export const changeFilter = filter => ({
  type: CHANGE_FILTER,
  payload: { filter },
});
