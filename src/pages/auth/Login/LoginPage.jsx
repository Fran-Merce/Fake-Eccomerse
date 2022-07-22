
import { AuthLayout } from '../Layout/AuthLayout';
import {
  FormContentWrapper,
  FormErrorStyled,
  FormStyled,

  InputStyled,
  SubmitButton,
} from '../Ui/FormStyles';

import {useFormik} from 'formik';
import { validationSchemaLogin } from '../validation/schemas';
import { startLogin } from '../../../redux/actions/authActions';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';




const LoginPage = () => {
  const initialValues = {
    email: '',
    password: '',
  };
  const dispatch = useDispatch();

  const handleSubmitForm = (values) => {

    dispatch(startLogin(values));
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
              value={values.email}
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
        <Link to='/auth/register'>no tenes cuenta?</Link>
      </FormStyled>
    </AuthLayout>
  );
};
export default LoginPage;
