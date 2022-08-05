import { TYPES } from '../TYPES';

export const addProductAction = product => {
  return {
    type: TYPES.ADD_TO_CART,
    payload: product,
  };
};

export const removeProductAction = product => {
  return {
    type: TYPES.REMOVE_FROM_CART,
    payload: product,
  };
};

export const handleCartToggleAction = () => {
  return {
    type: TYPES.HADLE_TOGGLE_CART,
  };
};

export const clearCartAction = () => {
  return {
    type: TYPES.CLEAR_CART,
  };
}