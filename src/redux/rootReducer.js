import { combineReducers } from 'redux';
import { authReducer } from './auth/authReducer';
import { cartReducer } from './cart/cartReducer';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { categoriesReducer } from './categories/categoriesReducer';
const persistConfig = {
  key: 'root',
  storage: storage,
  whitelist: ['cart'],
};

export const rootReducers = combineReducers({
  auth: authReducer,
  cart: cartReducer,
  category: categoriesReducer,
});

export const persistedReducer = persistReducer(persistConfig, rootReducers);
