import {
  ADD_MEALS,
  CHANGE_CATEGORY_FILTER,
  CHANGE_AREA_FILTER,
} from '../constants/index';

export const addMeals = meals => ({
  type: ADD_MEALS,
  payload: { meals },
});

export const changeCategoryFilter = filter => ({
  type: CHANGE_CATEGORY_FILTER,
  payload: { filter },
});

export const changeAreaFilter = filter => ({
  type: CHANGE_AREA_FILTER,
  payload: { filter },
});
