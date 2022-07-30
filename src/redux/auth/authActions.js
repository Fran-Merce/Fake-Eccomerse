import { TYPES } from '../TYPES';

export const setCurrentUserAction = user => ({
  type: TYPES.SET_CURRENT_USER,
  payload: user,
});
