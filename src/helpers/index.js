const mealsStateToHome = state => {
  const { mealsReducer } = state;
  console.log(mealsReducer);
  return { meals: mealsReducer.meals };
};

export default mealsStateToHome;
