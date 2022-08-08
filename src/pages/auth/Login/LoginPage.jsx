import { AuthLayout } from '../Layout/AuthLayout';
import {
  FormButtonWrapper,
  FormContentWrapper,
  FormErrorStyled,
  FormStyled,
  InputStyled,
  SubmitButton,
} from '../Ui/FormStyles';

import { useFormik } from 'formik';
import { validationSchemaLogin } from '../../../formik/schemas';
import { Link } from 'react-router-dom';
import { useRedirect } from '../../../hooks/useRedirect';
import { initialValuesLogin } from '../../../formik/initialValues';
import { handleSubmitFormLogin } from '../helpers/loginHandleSubmit';
import { singInWithGoogle } from '../../../firebase/firebase-utils';
import { AiFillGoogleCircle } from 'react-icons/ai';

const LoginPage = () => {
  useRedirect('/');

  const { handleSubmit, handleChange, values, touched, errors } = useFormik({
    initialValues: initialValuesLogin,
    validationSchema: validationSchemaLogin,
    onSubmit: handleSubmitFormLogin,
  });

  return (
    <AuthLayout bg='login'>
      <FormStyled onSubmit={handleSubmit}>
        <h1>Inciar Sesion</h1>
        <FormContentWrapper>
          <div>
            <label> Email </label>
            <InputStyled
              errors={errors.email && touched.email}
              type='email'
              name='email'
              onChange={handleChange}
              placeholder='youremail@gmail.com'
            />
            {errors.email && touched.email && (
              <FormErrorStyled>{errors.email}</FormErrorStyled>
            )}
          </div>

          <div>
            <label> Contraseña </label>
            <InputStyled
              errors={errors.password && touched.password }
              type='password'
              name='password'
              onChange={handleChange}
              value={values.password}
              placeholder='********'
              autoComplete='current-password'
            />
            {errors.password && touched.password && (
              <FormErrorStyled>{errors.password}</FormErrorStyled>
            )}
          </div>
        </FormContentWrapper>

      
        <FormButtonWrapper>
          <SubmitButton type='submit'>Iniciar</SubmitButton>
          <SubmitButton type='button' onClick={singInWithGoogle}>
            <AiFillGoogleCircle size='1.5rem' />
            Google
          </SubmitButton>
        </FormButtonWrapper>
        <FormButtonWrapper>
          <Link to='/auth/register'>No tenes cuenta?</Link>
          <Link to='/auth/reset-password'>Olvidaste tu contraseña?</Link>
        </FormButtonWrapper>
      </FormStyled>
    </AuthLayout>
  );
};
export default LoginPage;
