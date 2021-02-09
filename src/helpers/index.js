/* eslint-disable arrow-parens */
/* eslint-disable array-callback-return */
/* eslint-disable consistent-return */

export const mealsStateToProps = (state) => {
  const { mealsReducer } = state;
  return { meals: mealsReducer.meals };
};

export const filtredMealsToProps = (state) => {
  const { meals } = state.mealsReducer;
  const { filter } = state.filterReducer;
  let filtredMeals = [];
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

  return { meals: filtredMeals, filter };
};

export const ingredientAndMesue = (obj) => {
  const list = [];
  let tmp = '';
  const ingredients = Object.keys(obj)
    .map((key) => {
      if (/strIngredient/.test(key)) {
        return obj[key];
      }
    })
    .filter((i) => i);

  const mesures = Object.keys(obj)
    .map((key) => {
      if (/strMeasure/.test(key)) {
        return obj[key];
      }
    })
    .filter((i) => i);

  for (let i = 0; i < ingredients.length; i += 1) {
    tmp = `${ingredients[i]} : ${mesures[i]}`;
    list.push(tmp);
  }
  return list;
};
