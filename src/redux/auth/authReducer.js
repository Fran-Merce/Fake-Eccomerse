
import { TYPES } from '../TYPES';

const initialState = {
  status: 'not-authenticated',
  errorMessage: '',
  user: {
    displayName: null,
    photoURL: null,
    uid: null,
    email: null,

  },
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case TYPES.CHECKING_AUTH:
      return {
        ...state,
        status: 'checking-auth',
        errorMessage: null,
      };
    case TYPES.AUTH_LOGIN:
      return {
        ...state,
        status: 'authenticated',
        user: action.payload,
      };
    case TYPES.AUTH_LOGOUT:
      return {
        ...state,
        ...initialState,
      };
    case TYPES.AUTH_ERROR:
      return {
        ...state,
        ...initialState,
        status: 'not-authenticated',
        errorMessage: action.payload,
      };
    default:
      return state;
  }
};
