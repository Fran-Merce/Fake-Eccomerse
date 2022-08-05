import { createStore, applyMiddleware, compose } from 'redux';
import { persistStore } from 'redux-persist';

import thunk from 'redux-thunk';
import { rootReducers } from './rootReducer';

const composeEnhancers =
  (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const initialState = {};

export const store = createStore(
  rootReducers,
  initialState,
  composeEnhancers(applyMiddleware(thunk))
);

export const persistor = persistStore(store);
