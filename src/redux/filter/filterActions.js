import { TYPES } from '../TYPES';

export const setCategoryAction = category => ({
  type: TYPES.SET_CATEGORY,
  payload: category,
});



export const removeCategoryAction = () => ({
  type: TYPES.REMOVE_CATEGORY
})

export const setSearchAction = search => ({
  type: TYPES.SET_SEARCH,
  payload: search,
})

export const clearSearchAction = () => ({
  type: TYPES.CLEAR_SEARCH,
})