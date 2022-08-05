import { useFormik } from 'formik';
import {singInWithGoogle } from '../../../firebase/firebase-utils';
import { AuthLayout } from '../Layout/AuthLayout';
import { validationSchemaRegister } from '../../../formik/schemas';
import { AiFillGoogleCircle } from 'react-icons/ai';
import {
  FormButtonWrapper,
  FormContentWrapper,
  FormErrorStyled,
  FormStyled,
  InputStyled,
  SubmitButton,
} from '../Ui/FormStyles';
import { useRedirect } from '../../../hooks/useRedirect';

import { initialValuesRegister } from '../../../formik/initialValues';
import { handleSubmitFormRegister } from '../helpers/RegisterHandleSubmit';

export const Register = () => {
  useRedirect('/');

 

  const { handleSubmit, handleChange, values, touched, errors, handleBlur } =
    useFormik({
      initialValues: initialValuesRegister,
      validationSchema: validationSchemaRegister,
      onSubmit: handleSubmitFormRegister,
    });

  return (
    <AuthLayout bg='register'>
      <FormStyled onSubmit={handleSubmit}>
        <h1>Register</h1>
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
            <label> Name </label>
            <InputStyled
              error={errors.displayName && touched.displayName ? true : false}
              type='text'
              name='displayName'
              onChange={handleChange}
              value={values.displayName}
              onBlur={handleBlur}
              placeholder='Your name'
            />
            {errors.displayName && touched.displayName && (
              <FormErrorStyled>{errors.displayName}</FormErrorStyled>
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
            />
            {errors.password && touched.password && (
              <FormErrorStyled>{errors.password}</FormErrorStyled>
            )}
          </div>
        </FormContentWrapper>
        <FormButtonWrapper>
          <SubmitButton type='submit'>Submit</SubmitButton>
          <SubmitButton type='button' onClick={singInWithGoogle}>
            <AiFillGoogleCircle size='1.5rem'></AiFillGoogleCircle>
            Google
          </SubmitButton>
        </FormButtonWrapper>
      </FormStyled>
    </AuthLayout>
  );
};
export default Register;
