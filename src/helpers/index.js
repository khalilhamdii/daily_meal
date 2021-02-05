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
  // const filterSwitch = (item) => {
  //   switch (filter.category) {
  //     case item === 'All categories':
  //       console.log('1');
  //       filtredMeals = meals;
  //       break;
  //     case item && CATEGORIES.includes(item):
  //       console.log('2');
  //       filtredMeals = meals.filter((meal) => meal.strCategory === item);
  //       break;

  //     default:
  //       console.log('3');
  //       filtredMeals = meals;
  //   }
  //   switch (filter.area) {
  //     case item === 'All areas':
  //       console.log('4');
  //       filtredMeals = meals;
  //       break;
  //     case item && AREAS.includes(item):
  //       console.log('5');
  //       filtredMeals = meals.filter((meal) => meal.strArea === item);
  //       break;

  //     default:
  //       console.log('6');
  //       filtredMeals = meals;
  //   }
  // };
  // console.log(switchArr);
  // switchArr.forEach((item) => filterSwitch(item));

  return { meals: filtredMeals };
};
