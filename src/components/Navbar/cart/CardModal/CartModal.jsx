import React from 'react';
import {
  BackBtnStyled,
  CartModalBody,
  CartModalCheckoutBtn,
  CartModalFooter,
  CartModalFooterText,
  CartModalHeader,
  CartModalStyled,
  ClearCartBtn,
} from './CartModalStyled';
import { useDispatch, useSelector } from 'react-redux';
import { TYPES } from '../../../../redux/TYPES';
import { CartModalItem } from '../cardModalItem/CartModalItem';
import { formatPrice } from '../../../../helpers/formatPrice';
import { totalPrice } from '../../../../redux/cart/cartHelpers';
import { FaTrash } from 'react-icons/fa';
// import { useCheckout, useRedirect } from '../../../../hooks/useRedirect';
import {useNavigate} from 'react-router-dom'
import payIcon from '../../../../assets/imgs/creditcard.gif';
import { handleCartToggleAction } from '../../../../redux/cart/cartActions';

export const CartModal = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { shippingCost, cart } = useSelector(state => state.cart);

  const subTotal = totalPrice(cart);
  const total = formatPrice(subTotal + shippingCost);
  const handleCheckout = () => {
    navigate('/checkout') 
    dispatch(handleCartToggleAction())
  }
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
          onClick={() => dispatch({ type: TYPES.CLEAR_CART })}
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
      <CartModalFooter>
        <CartModalFooterText>
          <p>Subtotal</p>
          <span>{formatPrice(subTotal)}</span>
        </CartModalFooterText>
        <CartModalFooterText>
          <p>Envio</p>
          <span>{formatPrice(shippingCost)}</span>
        </CartModalFooterText>
        <hr />
        <CartModalFooterText>
          <p>Total</p>
          <span>{total}</span>
        </CartModalFooterText>
        <CartModalCheckoutBtn disabled={!cart.length} onClick={handleCheckout }>
          Completar Compra
          <span>
            Alla voy <img src={payIcon} alt='' />
          </span>
        </CartModalCheckoutBtn>
      </CartModalFooter>
    </CartModalStyled>
  );
};
