export const mealsStateToHome = (state) => {
  const { mealsReducer } = state;
  return mealsReducer.meals;
};
