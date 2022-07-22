import React from 'react';
import { AuthLayoutStyled } from './AuthLayoutStyled';



export const AuthLayout = ({ children, bg }) => {
  return <AuthLayoutStyled bg={bg}>{children}</AuthLayoutStyled>;
};
