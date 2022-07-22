import { useCheckingAuth } from '../hooks/useCheckAuth';
import HomePage from '../pages/Homepage/HomePage';

import { lazy } from 'react';

import { Route, Routes } from 'react-router-dom';

const AppRouter = lazy(() => import('./Routers/AppRouter'));
const AuthRouter = lazy(() => import('./Routers/AuthRouter'));

export const MainRouter = () => {
  const status = useCheckingAuth();
  if (status === 'checking-auth') return <>'Loading'</>;

  return (
    <Routes>
      {status === 'authenticated' ? (
        <Route path='/' element={<AppRouter />} />
      ) : (
        <>
          <Route path='/*' element={<AppRouter />} />
          <Route path='/auth/*' element={<AuthRouter status={status} />} />
        </>
      )}

      <Route path='*' element={<HomePage />} />
    </Routes>
  );
};
