import { AuthLayout } from '../Layout/AuthLayout';
import {
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
        <h1>Login</h1>
        <FormContentWrapper>
          <div>
            <label> Email </label>
            <InputStyled
              error={errors.email && touched.email ? true : false}
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
            <label> Password </label>
            <InputStyled
              error={errors.password && touched.password ? true : false}
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
        <SubmitButton type='submit'>Login</SubmitButton>
        <div>
          <Link to='/auth/register'>no tenes cuenta?</Link>
          <Link to='/auth/reset-password'>Olvidaste tu contraseña?</Link>
        </div>
      </FormStyled>
    </AuthLayout>
  );
};
export default LoginPage;
