import { combineReducers } from 'redux';

import { cartReducer } from './cart/cartReducer';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { authReducer } from './auth/authReducer';

import { filterReducer } from './filter/filterReducer';


const persistConfig = {
  key: 'root',
  storage: storage,
  whitelist: ['cart'],
};

const rootReducers = combineReducers({
  auth: authReducer,
  cart: cartReducer,
  filter: filterReducer,

});

export default persistReducer(persistConfig, rootReducers);
