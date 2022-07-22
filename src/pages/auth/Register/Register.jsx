
import { useDispatch, useSelector } from 'react-redux';
import { AuthLayout } from '../Layout/AuthLayout';
import {
  FormButtonWrapper,
  FormContentWrapper,
  FormErrorStyled,
  FormStyled,

  InputStyled,
  SubmitButton,
} from '../Ui/FormStyles';
import { bindActionCreators } from 'redux';
import { authActions } from '../../../redux/actions/index';
import { useFormik } from 'formik';
import { validationSchemaRegister } from '../validation/schemas';
import { AiFillGoogleCircle } from 'react-icons/ai';


const initialValues= {
  email: '',
  password: '',
  displayName: '',
};

export const Register = () => {
  const dispatch = useDispatch();
  const { startSingInWithGoogle, startSingInWithEmailandPass } = bindActionCreators(
    authActions,
    dispatch
  );

  const handleSubmitForm = (values) => {
    startSingInWithEmailandPass(values);
  };

  const { handleSubmit, handleChange, values, touched, errors, handleBlur } =
    useFormik({
      initialValues,
      validationSchema: validationSchemaRegister,
      onSubmit: handleSubmitForm,
    });

  return (
    <AuthLayout bg='register'>
      <FormStyled  onSubmit={handleSubmit}>
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
              value={values.email}
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
          <SubmitButton onClick={startSingInWithGoogle}>
            <AiFillGoogleCircle size='1.5rem'></AiFillGoogleCircle>
            Google
          </SubmitButton>
        </FormButtonWrapper>
      </FormStyled>
    </AuthLayout>
  );
};
export default Register;
