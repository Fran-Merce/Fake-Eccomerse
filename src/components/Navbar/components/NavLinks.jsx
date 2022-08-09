import React from 'react';
import { auth } from '../../../firebase/firebase-utils';


import { useSelector, useDispatch } from 'react-redux';
import { handleCartToggleAction } from '../../../redux/cart/cartActions';
import { HiShoppingCart } from 'react-icons/hi';
import { LinkStyled } from '../../UI/LinkStyled/LinkStyled';
import { CartIconWrapper, LinksWrapperStyled } from './NavLinksStyled';
export const NavLinks = () => {
  const dispatch = useDispatch();
  const { currentUser } = useSelector(state => state.auth);
  const { cart } = useSelector(state => state.cart);
  const cartItems = cart.reduce((acc, curr) => acc + curr.quantity, 0);

  const logOut = () => auth.signOut();
  return (
    <LinksWrapperStyled>
      <LinkStyled to='/'>Home</LinkStyled>
      <LinkStyled to='/products'>Products</LinkStyled>
      {currentUser ? (
        <p style={{ cursor: 'pointer' }} onClick={logOut}>
          Cerrar Sesion
        </p>
      ) : (
        <LinkStyled to='/auth/login'>Iniciar Sesion</LinkStyled>
      )}
      <CartIconWrapper onClick={() => dispatch(handleCartToggleAction())}>
        <p>{cartItems}</p>
        <HiShoppingCart size='1.3rem' color='white' />
      </CartIconWrapper>
    </LinksWrapperStyled>
  );
};
