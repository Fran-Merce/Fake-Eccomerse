import { products as productsData } from '../../data/products';

import { TYPES } from '../TYPES';
import { searchDataFiltered } from './filterHelpers';

const products = Object.values(productsData).flat();

const INITIAL_STATE = {
  categorySelected: null,
  dataFiltered: products,
  search: null,
};

export const filterReducer = (state = INITIAL_STATE, { payload, type }) => {
  switch (type) {
    case TYPES.SET_CATEGORY:
      return {
        ...state,
        categorySelected: state.categorySelected !== payload ? payload : null,
        dataFiltered:
          state.search !== null
            ? state.dataFiltered.filter(product => product.category === payload)
            : products.filter(product => product.category === payload),
      };
    case TYPES.REMOVE_CATEGORY:
      return {
        ...state,
        categorySelected: null,
        dataFiltered: products,
      };
    case TYPES.SET_SEARCH:
      return {
        ...state,
        dataFiltered: state.categorySelected
          ? searchDataFiltered(products, payload, state.categorySelected)
          : searchDataFiltered(products, payload),
        search: payload,
      };
    case TYPES.CLEAR_SEARCH:
      return {
        ...state,
        dataFiltered: state.categorySelected
          ? products.filter(product => product.category === state.categorySelected)
          : products,
        search: null,
      };
    default:
      return state;
  }
};
