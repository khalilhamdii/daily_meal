/* eslint-disable arrow-parens */

export const mealsStateToProps = (state) => {
  const { mealsReducer } = state;
  // console.log(state.filterReducer.filter);
  return { meals: mealsReducer.meals };
};

export const filtredMealsToProps = (state) => {
  const { meals } = state.mealsReducer;
  const { filter } = state.filterReducer;
  let filtredMeals = [];
  console.log(filter);
  if (filter.category === 'All categories' && filter.area === 'All areas') {
    filtredMeals = meals;
  } else if (
    filter.category !== 'All categories'
    && filter.area === 'All areas'
  ) {
    filtredMeals = meals.filter((meal) => meal.strCategory === filter.category);
  } else if (
    filter.category === 'All categories'
    && filter.area !== 'All areas'
  ) {
    filtredMeals = meals.filter((meal) => meal.strArea === filter.area);
  } else if (
    filter.category !== 'All categories'
    && filter.area !== 'All areas'
  ) {
    filtredMeals = meals
      .filter((meal) => meal.strCategory === filter.category)
      .filter((meal) => meal.strArea === filter.area);
  }

  return { meals: filtredMeals };
};
