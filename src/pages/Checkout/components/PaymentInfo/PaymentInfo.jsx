import React, { useState } from 'react';
import Cards from 'react-credit-cards';
import 'react-credit-cards/es/styles-compiled.css';
import {
  clearNumber,
  formatCreditCardNumber,
  formatCVC,
  formatExpirationDate,
} from './utils/formatPayInfo';
import { useFormik } from 'formik';
import { validationSchemaPayInfo } from '../../../auth/validation/schemas';
import { initialCreditCardValues } from '../../../auth/validation/initialValues';
import {
  CreditCardInfoWrapper,
  ExpiryAndCvcWrapper,
  FormPaymentStyled,
  InputPayStyled,
} from './PaymentInfoStyles';
import { CheckoutBtn } from '../../../../components/UI/Buttons/CheckoutBtn/CheckoutBtn';
import { useDispatch } from 'react-redux';
import { clearCartAction } from '../../../../redux/cart/cartActions';
import Swal from 'sweetalert2';

export const PaymentInfo = () => {
  const dispatch = useDispatch();
  const [focused, setFocused] = useState('');
  const handleInputFocus = ({ target }) => setFocused(target.name);

  const handleSubmitPayment = () => {
    dispatch(clearCartAction());
    Swal.fire(
      'Pago realizado con exito',
      'Toda la informacion del pago se envio al email',
      'success'
    );
  };
  const { handleSubmit, handleChange, values, touched, errors, handleBlur } =
    useFormik({
      initialValues: initialCreditCardValues,
      validationSchema: validationSchemaPayInfo,
      onSubmit: handleSubmitPayment,
    });
  const handleInputChange = e => {
    const { target } = e;
    handleChange(e);
    console.log(errors,'errors');
    if (target.name === 'number') {
      target.value = formatCreditCardNumber(target.value);
    } else if (target.name === 'expiry') {
      target.value = formatExpirationDate(target.value);
    } else if (target.name === 'cvc') {
      target.value = formatCVC(target.value);
    }
  };

  return (
    <CreditCardInfoWrapper>
      <Cards
        name={values.name}
        expiry={formatExpirationDate(values.expiry)}
        number={formatCreditCardNumber(values.number)}
        cvc={formatCVC(values.cvc)}
        focused={focused}
        preview={true}
      />
      <FormPaymentStyled onSubmit={handleSubmit}>
        <label>
          Numero de tarjeta
          <InputPayStyled
            type='text'
            name='number'
            onChange={handleInputChange}
            onFocus={handleInputFocus}
            maxLength={19}
            placeholder='•••• •••• •••• ••••'
            autoComplete='off'
          />
          {errors.number && touched.number && (
            <small style={{ color: 'var(--secondary-text)' }}>{errors.number}</small>
          )}
        </label>
        <label>
          Nombre en la tarjeta
          <InputPayStyled
            type='text'
            name='name'
            onChange={handleInputChange}
            onFocus={handleInputFocus}
            placeholder='Your Name'
            autoComplete='off'
          />
          {errors.name && touched.name && (
            <small style={{ color: 'var(--secondary-text)' }}>{errors.name}</small>
          )}
        </label>

        <ExpiryAndCvcWrapper>
          <label>
            Fecha de vencimiento
            <InputPayStyled
              maxLength={5}
              type='text'
              name='expiry'
              onChange={handleInputChange}
              onFocus={handleInputFocus}
              placeholder='MM/YY'
              autoComplete='off'
            />
            {errors.expiryDate && touched.expiryDate && (
              <small style={{ color: 'var(--secondary-text)' }}>
                {errors.expiryDate}
              </small>
            )}
          </label>
          <label>
            CCV
            <InputPayStyled
              type='text'
              name='cvc'
              onChange={handleInputChange}
              onFocus={handleInputFocus}
              placeholder='***'
              autoComplete='off'
            />
            {errors.cvv && touched.cvv && (
              <small style={{ color: 'var(--secondary-text)' }}>{errors.cvv}</small>
            )}
          </label>
        </ExpiryAndCvcWrapper>
      </FormPaymentStyled>
      <CheckoutBtn type='submit' handleOnClick={handleSubmit}>
        Pagar
      </CheckoutBtn>
    </CreditCardInfoWrapper>
  );
};
