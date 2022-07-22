
import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

const CheckoutPage = lazy(() => import('../../pages/Checkout/CheckoutPage'));
const HomePage = lazy(() => import('../../pages/Homepage/HomePage'));
const ProductsPage = lazy(() => import('../../pages/Products/ProductsPage'));
const ProductPage = lazy(() => import('../../pages/Product/ProductPage'));

const AppRouter = () => {
  return (
    <Routes>
      <Route path='/home' element={<HomePage />} />
      <Route path='/checkout' element={<CheckoutPage />} />
      <Route path='/products' element={<ProductsPage />} />
      <Route path='/products/:id' element={<ProductPage />} />
      <Route path='*' element={<HomePage />} />
    </Routes>
  );
};
export default AppRouter;
