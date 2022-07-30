import { TYPES } from '../TYPES';

const initialState = {
  currentUser: null,
  checkingAuth: false,
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case TYPES.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload,
        CHECKING_AUTH: false,
      };
    case TYPES.CHECKING_AUTH:
      return {
        ...state,
        checkingAuth: true,
      }
    case TYPES.AUTH_LOGOUT:
      return {
        ...state,
        currentUser: null,
      }
    default:
      return state;
  }
};
