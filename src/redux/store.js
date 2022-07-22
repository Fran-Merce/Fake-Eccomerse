import { authReducer } from './reducers/authReducer';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'



const composeEnhancers =
  (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const rootReducers = combineReducers({
  auth: authReducer,
});

export const store = createStore(
  rootReducers,
  {},
  composeEnhancers(applyMiddleware(thunk))
);
