import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

export const useReduxTypes = {
  state: 'state',
  auth: 'auth',
  cart: 'cart',
  filter: 'filter',
};

export const useRedux = (reducer = false, haveDispatch = true) => {
  const dispatch = haveDispatch ? useDispatch() : null;

  if (!reducer) return  dispatch ;

  if (reducer === useReduxTypes.state)
    return { state: useSelector(state => state), dispatch };

  const state = useSelector(state => state[reducer]);
  return { state, dispatch };
};
