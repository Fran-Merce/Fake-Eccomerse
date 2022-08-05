import React from 'react';
import { formatPrice } from '../../../helpers/formatPrice';

import { PriceInfoText, PriceInfoWrapper } from './PaymentInfoPriceStyled';
import { useSelector } from 'react-redux';
import { totalPrice } from '../../../redux/cart/cartHelpers';
import { CheckoutBtn } from '../Buttons/CheckoutBtn/CheckoutBtn';
export const PaymentInfoPrice = () => {
  const { shippingCost, cart } = useSelector(state => state.cart);

  const subTotal = totalPrice(cart);
  const total = formatPrice(subTotal + shippingCost);

  return (
    <PriceInfoWrapper>
      <PriceInfoText>
        <p>Subtotal</p>
        <span>{formatPrice(subTotal)}</span>
      </PriceInfoText>
      <PriceInfoText>
        <p>Envio</p>
        <span>{formatPrice(shippingCost)}</span>
      </PriceInfoText>
      <hr />
      <PriceInfoText>
        <p>Total</p>
        <span>{total}</span>
      </PriceInfoText>

    </PriceInfoWrapper>
    
  );
};
