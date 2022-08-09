import { TYPES } from '../TYPES';
import { addItemToCart, removeItemFromCart, totalPrice } from './cartHelpers';

const INITIAL_STATE = {
  cart: [],
  hidden: true,
  shippingCost: 0,
};

export const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TYPES.HADLE_TOGGLE_CART:
      return {
        ...state,
        hidden: !state.hidden,
      };
    case TYPES.ADD_TO_CART:
      return {
        ...state,
        cart: addItemToCart(state.cart, action.payload),
        total: totalPrice(state.cart),
        shippingCost: 500,
      };
    case TYPES.REMOVE_ONE_FROM_CART:
      return {
        ...state,
        cart: removeItemFromCart(state.cart, action.payload),
        shippingCost:
          removeItemFromCart(state.cart, action.payload).length >= 1 ? 500 : 0,
      };
    case TYPES.REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter(item => item.id !== action.payload.id),
        shippingCost:
          state.cart.filter(item => item.id !== action.payload.id).length >= 1
            ? 500
            : 0,
      };
    case TYPES.CLEAR_CART:
      return {
        ...state,
        cart: [],
        shippingCost: 0,
      };
    default:
      return state;
  }
};
