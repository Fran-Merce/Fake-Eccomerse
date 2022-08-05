import React, { useState } from 'react';
import Cards from 'react-credit-cards';
import { useFormik } from 'formik';
import { initialPayInfoValues } from '../../../../formik/initialValues';
import { validationSchemaPayInfo } from '../../../../formik/schemas';
import { CheckoutBtn } from '../../../../components/UI/Buttons/CheckoutBtn/CheckoutBtn';
import { useDispatch, useSelector } from 'react-redux';
import { clearCartAction } from '../../../../redux/cart/cartActions';
import Swal from 'sweetalert2';
import {
  formatCreditCardNumber,
  formatCVC,
  formatExpirationDate,
} from './utils/formatPayInfo';
import {
  CreditCardInfoWrapper,
  ExpiryAndCvcWrapper,
  FormPaymentStyled,
  InputPayStyled,
  SmallStyled,
} from './PaymentInfoStyles';
import 'react-credit-cards/es/styles-compiled.css';
import { swalModalCongrats } from '../../../../helpers/swal/swal';
import { useNavigate } from 'react-router-dom';
import { handleInputChange } from './utils/handleInputChange';

export const PaymentInfo = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { currentUser } = useSelector(state => state.auth);
  const [focused, setFocused] = useState('');

  const handleInputFocus = ({ target }) => setFocused(target.name);

  const handleSubmitPayment = () => {
    dispatch(clearCartAction());
    Swal.fire(swalModalCongrats(currentUser?.displayName, currentUser?.email)).then(
      result => {
        if (result.isConfirmed) navigate('/products');
      }
    );
  };


  const { handleSubmit, handleChange, values, touched, errors } = useFormik({
    initialValues: initialPayInfoValues,
    validationSchema: validationSchemaPayInfo,
    onSubmit: handleSubmitPayment,
  });

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
            onChange={e => handleInputChange(e, handleChange)}
            onFocus={handleInputFocus}
            maxLength={19}
            placeholder='•••• •••• •••• ••••'
            autoComplete='off'
          />
          {errors.number && touched.number && (
            <SmallStyled>{errors.number}</SmallStyled>
          )}
        </label>
        <label>
          Nombre en la tarjeta
          <InputPayStyled
            type='text'
            name='name'
            onChange={e => handleInputChange(e, handleChange)}
            onFocus={handleInputFocus}
            placeholder='Your Name'
            autoComplete='off'
          />
          {errors.name && touched.name && <SmallStyled>{errors.name}</SmallStyled>}
        </label>

        <ExpiryAndCvcWrapper>
          <label>
            Fecha de vencimiento
            <InputPayStyled
              maxLength={5}
              type='text'
              name='expiry'
              onChange={e => handleInputChange(e, handleChange)}
              onFocus={handleInputFocus}
              placeholder='MM/YY'
              autoComplete='off'
            />
            {errors.expiry && touched.expiry && (
              <SmallStyled>{errors.expiry}</SmallStyled>
            )}
          </label>
          <label>
            CCV
            <InputPayStyled
              type='text'
              name='cvc'
              onChange={e => handleInputChange(e, handleChange)}
              onFocus={handleInputFocus}
              placeholder='***'
              autoComplete='off'
            />
            {errors.cvc && touched.cvc && <SmallStyled>{errors.cvc}</SmallStyled>}
          </label>
        </ExpiryAndCvcWrapper>
        <label>
          Provincia
          <InputPayStyled
            type='text'
            name='province'
            onChange={e => handleInputChange(e, handleChange)}
            placeholder='Buenos Aires'
          />
          {errors.province && touched.province && (
            <SmallStyled>{errors.province}</SmallStyled>
          )}
        </label>
        <label>
          Ciudad
          <InputPayStyled
            type='text'
            name='city'
            onChange={e => handleInputChange(e, handleChange)}
            placeholder='Arrecifes'
          />
          {errors.city && touched.city && <SmallStyled>{errors.city}</SmallStyled>}
        </label>
        <label>
          Direccion Y Numero
          <InputPayStyled
            type='text'
            name='address'
            onChange={e => handleInputChange(e, handleChange)}
            onFocus={handleInputFocus}
            placeholder='Calle falsa 123'
          />
          {errors.address && touched.address && (
            <SmallStyled>{errors.address}</SmallStyled>
          )}
        </label>
      </FormPaymentStyled>
      <CheckoutBtn type='submit' handleOnClick={handleSubmit}>
        Pagar
      </CheckoutBtn>
    </CreditCardInfoWrapper>
  );
};