import { lazy } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
const RegisterPage = lazy(() => import('../../pages/auth/Register/Register'));
const LoginPage = lazy(() => import('../..//pages/auth/Login/LoginPage'));


const AuthRouter = ({ status }) => {
  if (status === 'authenticated') {
    return <Navigate to='/home' />;
  }
  return (
    <Routes>
      <Route path='/register' element={<RegisterPage />} />
      <Route path='/login' element={<LoginPage />} />
      <Route path='*' element={<LoginPage />} />
    </Routes>
  );
};

export default AuthRouter;
