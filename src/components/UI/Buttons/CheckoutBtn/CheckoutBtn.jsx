import React from 'react';
import { CheckoutBtnStyled } from './CheckoutBtnStyled';
import { useSelector } from 'react-redux';

export const CheckoutBtn = ({ handleOnClick, children, type = 'button' }) => {

  const { cart } = useSelector(state => state.cart);
  return (
    <CheckoutBtnStyled 
      type={type} 
      disabled={!cart.length} 
      onClick={handleOnClick}
    >
      {children}
      <span>
        Alla voy <img src='/assets/imgs/creditcard.gif' alt='' />
      </span>
    </CheckoutBtnStyled>
  );
};
