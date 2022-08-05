import React from 'react';
import {
  BackBtnStyled,
  CartModalBody,
  CartModalHeader,
  CartModalStyled,
  ClearCartBtn,
} from './CartModalStyled';
import { useDispatch, useSelector } from 'react-redux';
import { TYPES } from '../../../../redux/TYPES';
import { CartModalItem } from '../cardModalItem/CartModalItem';
import { FaTrash } from 'react-icons/fa';

import { useNavigate } from 'react-router-dom';

import { clearCartAction, handleCartToggleAction } from '../../../../redux/cart/cartActions';

import { PaymentInfoPrice } from '../../../UI/PaymentInfo/PaymentInfoPrice';
import { CheckoutBtn } from '../../../UI/Buttons/CheckoutBtn/CheckoutBtn';

export const CartModal = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { cart } = useSelector(state => state.cart);

  const handleCheckout = () => {
    navigate('/checkout');
    dispatch(handleCartToggleAction());
  };
  return (
    <CartModalStyled
      initial={{ y: -200 }}
      animate={{ y: 0 }}
      exit={{ y: -300 }}
      transition={{ duration: 0.1, ease: 'linear' }}
    >
      <BackBtnStyled
        color='#000'
        size='1.3rem'
        onClick={() => dispatch({ type: TYPES.HADLE_TOGGLE_CART })}
        whilehover={{ backgroundColor: 'var(--secondary-text)' }}
      />

      <CartModalHeader>
        <h2>Mis Productos</h2>
      </CartModalHeader>
      <CartModalBody>
        <ClearCartBtn
          onClick={() => dispatch(clearCartAction())}
          disabled={!cart.length}
        >
          <FaTrash color='#fff' />
        </ClearCartBtn>

        {!cart.length ? (
          <p>Carrito Vacio</p>
        ) : (
          cart.map(item => <CartModalItem key={item.id} product={item} />)
        )}
      </CartModalBody>
      <PaymentInfoPrice />
      <CheckoutBtn handleOnClick={handleCheckout}>
       Ir al Pago
      </CheckoutBtn>
    </CartModalStyled>
  );
};
