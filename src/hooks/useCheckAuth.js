import { firebaseAuth } from '../firebase/config';
import { TYPES } from '../redux';

import { onAuthStateChanged } from 'firebase/auth';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../redux/auth/authActions';

export const useCheckingAuth = () => {
  const dispatch = useDispatch();
  const { status } = useSelector(state => state.auth);

  useEffect(() => {
    onAuthStateChanged(firebaseAuth, async user => {
      dispatch({ type: TYPES.CHECKING_AUTH });
      if (!user) return dispatch({ type: 'AUTH_LOGOUT' });

      const { uid, email, displayName, photoURL } = user;
      return dispatch(login({ uid, email, displayName, photoURL }));
    });
  }, []);

  return status;
};
