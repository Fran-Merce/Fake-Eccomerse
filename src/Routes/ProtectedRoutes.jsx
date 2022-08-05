import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
export const ProtectedRoutes = ({ children, redirectTo }) => {
  const { currentUser } = useSelector(state => state.auth);



  return currentUser  ? children : <Navigate to={redirectTo} />;
};
