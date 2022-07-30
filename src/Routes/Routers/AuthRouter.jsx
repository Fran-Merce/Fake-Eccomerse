import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

import HomePage from '../../pages/Homepage/HomePage';
const RegisterPage = lazy(() => import('../../pages/auth/Register/Register'));
const LoginPage = lazy(() => import('../../pages/auth/Login/LoginPage'));
const ForgotPassword = lazy(() => import('../../pages/auth/ForgotPassword/ForgotPassword'));

const AuthRouter = () => {
  return (
    <Routes>
      <Route path='/register' element={<RegisterPage />} />
      <Route path='/login' element={<LoginPage />} />
      <Route path='/forgot' element={<ForgotPassword />} />
      <Route path='*' element={<HomePage />} />
    </Routes>
  );
};

export default AuthRouter;
