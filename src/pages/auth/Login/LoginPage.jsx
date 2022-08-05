import { AuthLayout } from '../Layout/AuthLayout';
import {
  FormContentWrapper,
  FormErrorStyled,
  FormStyled,
  InputStyled,
  SubmitButton,
} from '../Ui/FormStyles';

import { useFormik } from 'formik';
import { validationSchemaLogin } from '../validation/schemas';

import { Link } from 'react-router-dom';

import Swal from 'sweetalert2';
import {
  createUserProfileDocument,
  singInUser,
} from '../../../firebase/firebase-utils';
import { useRedirect } from '../../../hooks/useRedirect';

const LoginPage = () => {
  useRedirect('/');
  const initialValues = {
    email: '',
    password: '',
  };

  const handleSubmitForm = async values => {
    try {
      const { user } = await singInUser({ ...values });
      createUserProfileDocument(user);
    } catch (error) {
      console.log(error);
      if (error.code === 'auth/user-not-found') {
        Swal.fire('Error', 'El usuario no fue encontrado', 'error');
      } else if (error.code === 'auth/wrong-password') {
        Swal.fire('Error', 'La contraseña es incorrecta', 'error');
      } else {
        Swal.fire('Error', 'upps ocurrio un error en el inicio de sesion', 'error');
      }
    }

  };

  const { handleSubmit, handleChange, values, touched, errors, handleBlur } =
    useFormik({
      initialValues,
      validationSchema: validationSchemaLogin,
      onSubmit: handleSubmitForm,
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
              onBlur={handleBlur}
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
              onBlur={handleBlur}
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
