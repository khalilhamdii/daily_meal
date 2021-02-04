// import { CHANGE_FILTER } from '../actions/index';

const initialState = {
  filter: 'All',
};

const categoryFilter = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_FILTER: {
      return { ...state, filter: action.payload.filter };
    }
    default: {
      return state;
    }
  }
};

export default categoryFilter;
