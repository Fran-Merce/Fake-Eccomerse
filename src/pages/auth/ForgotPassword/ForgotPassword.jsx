import React from 'react';
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';
import { resetPassword } from '../../../firebase/firebase-utils';
import { useRedirect } from '../../../hooks/useRedirect';
import { AuthLayout } from '../Layout/AuthLayout';
import {
  FormButtonWrapper,
  FormContentWrapper,
  FormErrorStyled,
  FormStyled,
  InputStyled,
  SubmitButton,
} from '../Ui/FormStyles';
import { validationSchemaForgotPassword } from '../../../formik/schemas';
const ForgotPassword = () => {
  const navigate = useNavigate();
  useRedirect('/home');

  const { handleSubmit, handleChange, touched, errors } = useFormik({
    initialValues: { email: '' },
    validationSchema: validationSchemaForgotPassword,
    onSubmit: values => resetPassword(values.email),
  });

  return (
    <AuthLayout bg={'register'}>
      <FormStyled onSubmit={handleSubmit}>
        <h1>Restablecer</h1>
        <FormContentWrapper>
          <div>
            <label> Email </label>
            <InputStyled
              onChange={handleChange}
              type='email'
              name='email'
              errors={errors.email && touched.email}
              placeholder='tuemail@gmail.com'
            />
            {errors.email && touched.email && (
              <FormErrorStyled>{errors.email}</FormErrorStyled>
            )}
          </div>
        </FormContentWrapper>
        <FormButtonWrapper>
          <SubmitButton type='button' onClick={() => navigate('/auth/login')}>
            Volver
          </SubmitButton>
          <SubmitButton type='submit'>Enviar</SubmitButton>
        </FormButtonWrapper>
      </FormStyled>
    </AuthLayout>
  );
};

export default ForgotPassword;
