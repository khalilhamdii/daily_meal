import { CHANGE_CATEGORY_FILTER, CHANGE_AREA_FILTER } from '../constants/index';

const initialState = {
  filter: {
    category: 'All categories',
    area: 'All areas',
  },
};

const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_CATEGORY_FILTER: {
      return {
        ...state,
        filter: { ...state.filter, category: action.payload.filter },
      };
    }
    case CHANGE_AREA_FILTER: {
      return {
        ...state,
        filter: { ...state.filter, area: action.payload.filter },
      };
    }
    default:
      return state;
  }
};

export default filterReducer;
