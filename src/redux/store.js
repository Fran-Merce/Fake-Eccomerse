import { createStore, applyMiddleware, compose } from 'redux';
import { persistStore } from 'redux-persist';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import  rootReducers  from './rootReducer';



const initialState = {};
const middleware = [thunk];


export const store = createStore(
  rootReducers,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export const persistor = persistStore(store);
