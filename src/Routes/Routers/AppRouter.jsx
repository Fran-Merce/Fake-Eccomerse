import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { ProtectedRoutes } from '../ProtectedRoutes';

import { NotFoundPage } from '../../pages/NotFound/NotFoundPage';

const CheckoutPage = lazy(() => import('../../pages/Checkout/CheckoutPage'));
const HomePage = lazy(() => import('../../pages/Homepage/HomePage'));
const ProductsPage = lazy(() => import('../../pages/Products/ProductsPage'));
const ProductPage = lazy(() => import('../../pages/Product/ProductPage'));
const AuthRouter = lazy(() => import('./AuthRouter'));


const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/products' element={<ProductsPage />} />
        <Route path='/product/:id' element={<ProductPage />} />
        <Route path='/auth/*' element={<AuthRouter />} />
        <Route
          path='/checkout'
          element={
            // <ProtectedRoutes redirectTo='/auth/register'>
              <CheckoutPage />
            // </ProtectedRoutes>
          }
          
        />
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </>
  );
};
export default AppRouter;
