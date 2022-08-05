import React from 'react';
import { useSelector } from 'react-redux';
import { CartModalItem } from '../../../../components/Navbar/cart/cardModalItem/CartModalItem';
import { PaymentInfoPrice } from '../../../../components/UI/PaymentInfo/PaymentInfoPrice';
import { CheckoutProductsWrapper, ProductsWrapper } from './CheckoutProductsStyled';

export const CheckoutProducts = () => {
  const { cart } = useSelector(state => state.cart);
  return (
    <CheckoutProductsWrapper>
      <ProductsWrapper>
        {cart.map(product => (
          <CartModalItem key={product.id} product={product} />
        ))}
      </ProductsWrapper>
      <PaymentInfoPrice />
    </CheckoutProductsWrapper>
  );
};
