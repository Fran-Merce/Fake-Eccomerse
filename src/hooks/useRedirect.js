import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRedux, useReduxTypes } from './useRedux';


export const useRedirect = redirectTo => {
  const navigate = useNavigate();
  const { state: { currentUser} } = useRedux(useReduxTypes.auth,false);
  
  useEffect(() => {
    if (currentUser) {
      navigate(redirectTo);
    }
  }, [currentUser, navigate, redirectTo]);
};