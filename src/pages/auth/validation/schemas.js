import * as yup from 'yup';

export const validationSchemaRegister = yup.object().shape({
  email: yup.string().email().required('Required'),
  password: yup.string().required().min(6, 'password must be at least 6 characters'),
  displayName: yup.string()
  .required('Required')
  .min(1, 'displayName must be at least 1 characters')
  .max(20, 'displayName must be at most 20 characters'),
});
  

export const validationSchemaLogin = yup.object().shape({
  email: yup.string().email().required('Required'),
  password: yup.string()
  .required('Required')
  .min(6, 'password must be at least 6 characters'),
    
});
