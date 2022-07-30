import React from 'react';
import { useNavigate } from 'react-router-dom';
import { resetPassword } from '../../../firebase/firebase-utils';
import { useRedirect } from '../../../hooks/useRedirect';
import { AuthLayout } from '../Layout/AuthLayout';
import { FormStyled } from '../Ui/FormStyles';
const ForgotPassword = () => {
  const navigate = useNavigate();
  useRedirect('/home');

  return (
    <AuthLayout bg={'register'}>
      <FormStyled>
        <h1>Forgot Password</h1>
        <div>
          <label> Email </label>
          <input type='email' />
        </div>
        <button  type='button' onClick={() => navigate('/auth/login')}>
          VOLVER
        </button>
        <button type='button' onClick={(e)=> resetPassword('franmerce1@gmail.com')}>
          ENVIAR
        </button>
      </FormStyled>
    </AuthLayout>
  );
};

export default ForgotPassword;
