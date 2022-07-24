import {
  loginWithEmailAndPassword,
  registerWithEmailAndPassword,
  singInWithGoogle,
} from '../../firebase/providers';
import { TYPES } from '../TYPES';

export const startSingInWithGoogle = () => async dispatch => {
  dispatch({ type: TYPES.CHECKING_AUTH });
  const result = await singInWithGoogle();
  if (!result.ok)
    return dispatch({ type: TYPES.AUTH_ERROR, payload: result.errorMessage });
};

export const startSingInWithEmailandPass = formValues => async dispatch => {
  dispatch({ type: TYPES.CHECKING_AUTH });
  const result = await registerWithEmailAndPassword(formValues);
  if (!result.ok)
    return dispatch({ type: TYPES.AUTH_ERROR, payload: result.errorMessage });
  // Set Display name
  return dispatch({ type: TYPES.AUTH_LOGIN, payload: result.user });
};

export const startLogin =
  ({ email, password }) =>
  async dispatch => {
    const result = await loginWithEmailAndPassword({ email, password });

    if (!result.ok)
      return dispatch({ type: TYPES.AUTH_ERROR, payload: result.errorMessage });

    //  dispatch({ type: TYPES.AUTH_LOGIN, payload: result.user });
  };

export const login = payload => ({
  type: TYPES.AUTH_LOGIN,
  payload: payload,
});

export * as authActions from './authActions';
