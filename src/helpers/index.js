import { CATEGORIES, AREAS } from '../constants/index';

export const mealsStateToProps = (state) => {
  const { mealsReducer } = state;
  console.log(mealsReducer);
  return { meals: mealsReducer.meals };
};

export const filtredMealsToProps = (state) => {
  const switchArr = CATEGORIES.concat(AREAS);
  const { meals } = state.mealsReducer;
  const { filter } = state.filterReducer;
  let filtredMeals = [];
  const filterSwitch = (item) => {
    switch (filter) {
      case item === 'All categories' || item === 'All areas':
        filtredMeals = meals;
        break;
      case item && CATEGORIES.includes(item):
        filtredMeals = meals.filter((meal) => meal.strCategory === item);
        break;
      case item && AREAS.includes(item):
        filtredMeals = meals.filter((meal) => meal.strArea === item);
        break;

      default:
        filtredMeals = meals;
    }
  };

  switchArr.forEach((item) => filterSwitch(item));

  return { meals: filtredMeals };
};
