import { ADD_MEALS } from '../constants/index';

const initialState = {
  meals: [],
};

const mealsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MEALS: {
      return { ...state, meals: action.payload.meals };
    }
    default:
      return state;
  }
};

export default mealsReducer;
