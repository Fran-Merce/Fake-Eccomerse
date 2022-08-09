import React from 'react';
import { HiShoppingCart } from 'react-icons/hi';
import { useDispatch, useSelector } from 'react-redux';
import { handleCartToggleAction } from '../../../../redux/cart/cartActions';
import { CartIconWrapper } from '../NavLinksStyled';

export const CartIcon = () => {
  const dispatch = useDispatch();
  const { cart } = useSelector(state => state.cart);
  const cartItems = cart.reduce((acc, curr) => acc + curr.quantity, 0);
  return (
    <CartIconWrapper onClick={() => dispatch(handleCartToggleAction())}>
      <p>{cartItems}</p>
      <HiShoppingCart size='1.5rem' color='white' />
    </CartIconWrapper>
  );
};
