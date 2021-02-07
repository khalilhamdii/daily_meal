import {
  mealsStateToProps,
  filtredMealsToProps,
  ingredientAndMesue,
} from '../helpers/index';

describe('mealsStateToProps', () => {
  it('should return meals from state', () => {
    const state = {
      mealsReducer: { meals: [] },
    };
    expect(mealsStateToProps(state)).toEqual({ meals: [] });
  });

  it('should not return filters from state', () => {
    const state = {
      mealsReducer: { meals: [] },
    };
    expect(mealsStateToProps(state)).not.toEqual({ filter: {} });
  });
});

describe('filtredMealsToProps', () => {
  const state1 = {
    mealsReducer: {
      meals: [
        { strCategory: 'Beef' },
        { strCategory: 'Pasta' },
        { strCategory: 'Chicken' },
      ],
    },
    filterReducer: { filter: { category: 'Beef' } },
  };
  const state2 = {
    mealsReducer: {
      meals: [
        { strArea: 'Tunisian' },
        { strArea: 'Turkish' },
        { strArea: 'Egyptian' },
      ],
    },
    filterReducer: { filter: { area: 'Tunisian' } },
  };
  it('should return filtred meals from state by category', () => {
    expect(filtredMealsToProps(state1)).toEqual({
      meals: [{ strCategory: 'Beef' }],
      filter: { category: 'Beef' },
    });
  });

  it('should not return meals only from state', () => {
    expect(filtredMealsToProps(state1)).not.toEqual({
      meals: [{ strCategory: 'Beef' }],
    });
  });

  it('should return filtred meals from state by category', () => {
    expect(filtredMealsToProps(state2)).toEqual({
      meals: [{ strArea: 'Tunisian' }],
      filter: { area: 'Tunisian' },
    });
  });

  it('should not return filter only from state', () => {
    expect(filtredMealsToProps(state2)).not.toEqual({
      filter: { area: 'Tunisian' },
    });
  });
});

describe('ingredientAndMesue', () => {
  it('should return an array of ingredients and mesures', () => {
    const obj = {
      strIngredient1: 'soy sauce',
      strIngredient2: 'water',
      strIngredient3: 'brown sugar',
      strIngredient4: 'ground ginger',
      strIngredient5: 'minced garlic',
      strIngredient6: 'cornstarch',
      strIngredient7: 'chicken breasts',
      strIngredient8: 'stir-fry vegetables',
      strIngredient9: 'brown rice',
      strMeasure1: '3/4 cup',
      strMeasure2: '1/2 cup',
      strMeasure3: '1/4 cup',
      strMeasure4: '1/2 teaspoon',
      strMeasure5: '1/2 teaspoon',
      strMeasure6: '4 Tablespoons',
      strMeasure7: '2',
      strMeasure8: '1 (12 oz.)',
      strMeasure9: '3 cups',
    };

    const result = [
      'soy sauce : 3/4 cup',
      'water : 1/2 cup',
      'brown sugar : 1/4 cup',
      'ground ginger : 1/2 teaspoon',
      'minced garlic : 1/2 teaspoon',
      'cornstarch : 4 Tablespoons',
      'chicken breasts : 2',
      'stir-fry vegetables : 1 (12 oz.)',
      'brown rice : 3 cups',
    ];
    expect(ingredientAndMesue(obj)).toEqual(result);
  });
});
