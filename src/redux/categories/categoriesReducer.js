import { TYPES } from '../TYPES';

const INITIAL_STATE = {
  categorySelected: null,
};

export const categoriesReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TYPES.SET_CATEGORY:
      return {
        ...state,
        categorySelected:
          state.categorySelected !== action.payload ? action.payload : null,
      };

    default:
      return state;
  }
};
