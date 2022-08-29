
import { useFormik } from 'formik';
import { initialPayInfoValues } from '../../../../formik/initialValues';
import { validationSchemaPayInfo } from '../../../../formik/schemas';
import { CheckoutBtn } from '../../../../components/UI/Buttons/CheckoutBtn/CheckoutBtn';
import { useDispatch, useSelector } from 'react-redux';
import { clearCartAction } from '../../../../redux/cart/cartActions';
import Swal from 'sweetalert2';

import {
  CreditCardInfoWrapper,
  ExpiryAndCvcWrapper,
  FormPaymentStyled,
  InputPayStyled,
  SmallStyled,
} from './PaymentInfoStyles';

import { swalModalCongrats } from '../../../../helpers/swal/swal';
import { useNavigate } from 'react-router-dom';
import { handleInputChange } from './utils/handleInputChange';

export const PaymentInfo = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { currentUser } = useSelector(state => state.auth);
  const { cart } = useSelector(state => state.cart);

  const handleSubmitPayment = () => {
    if (cart.length <= 0) return;
    dispatch(clearCartAction());
    Swal.fire(swalModalCongrats(currentUser?.displayName, currentUser?.email)).then(
      result => {
        if (result.isConfirmed) navigate('/products');
      }
    );
  };

  const { handleSubmit, handleChange, touched, errors } = useFormik({
    initialValues: initialPayInfoValues,
    validationSchema: validationSchemaPayInfo,
    onSubmit: handleSubmitPayment,
  });

  return (
    <CreditCardInfoWrapper>
      <FormPaymentStyled onSubmit={handleSubmit}>
        <label>
          Numero de tarjeta
          <InputPayStyled
            type='text'
            name='number'
            onChange={e => handleInputChange(e, handleChange)}
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
              placeholder='MM/YY'
              autoComplete='off'
            />
            {errors.expiry && touched.expiry && (
              <SmallStyled>{errors.expiry}</SmallStyled>
            )}
          </label>
          <label>
            CVC
            <InputPayStyled
              type='text'
              name='cvc'
              onChange={e => handleInputChange(e, handleChange)}
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
