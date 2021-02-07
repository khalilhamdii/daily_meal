import {
  addMeals,
  changeCategoryFilter,
  changeAreaFilter,
} from '../actions/index';

describe('Actions', () => {
  describe('addMeals', () => {
    it('returns an object with type and payload properties', () => {
      const meals = [{ mealName: 'cake', mealCategory: 'dessert' }];
      expect(addMeals(meals)).toEqual({
        type: 'ADD_MEALS',
        payload: { meals },
      });
    });
  });

  describe('changeCategoryFilter', () => {
    it('returns an object with type and payload properties', () => {
      const filter = { category: 'dessert', area: 'Tunisian' };
      expect(changeCategoryFilter(filter)).toEqual({
        type: 'CHANGE_CATEGORY_FILTER',
        payload: { filter },
      });
    });
  });

  describe('changeAreaFilter', () => {
    it('returns an object with type and payload properties', () => {
      const filter = { category: 'dessert', area: 'Tunisian' };
      expect(changeAreaFilter(filter)).toEqual({
        type: 'CHANGE_AREA_FILTER',
        payload: { filter },
      });
    });
  });
});
