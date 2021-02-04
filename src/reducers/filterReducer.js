import CHANGE_FILTER from '../constants/index';

const initialState = {
  filter: {
    category: null,
    area: null,
  },
};

const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_FILTER: {
      return { ...state, filter: action.payload.filter };
    }
    default:
      return state;
  }
};

export default filterReducer;
