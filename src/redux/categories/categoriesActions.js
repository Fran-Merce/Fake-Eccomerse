import { TYPES } from '../TYPES';

export const setCategoryAction = category => ({
  type: TYPES.SET_CATEGORY,
  payload: category,
});
