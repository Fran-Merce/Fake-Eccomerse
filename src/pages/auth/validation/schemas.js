import * as yup from 'yup';
import { errorMessages } from '../../../formik/errorMessages';

const { required, numberError, stringError } = errorMessages;

export const validationSchemaRegister = yup.object().shape({
  email: yup.string().email().required('Required'),
  password: yup.string().required().min(6, 'password must be at least 6 characters'),
  displayName: yup
    .string()
    .required('Required')
    .min(1, 'displayName must be at least 1 characters')
    .max(20, 'displayName must be at most 20 characters'),
});

export const validationSchemaLogin = yup.object().shape({
  email: yup.string().email().required('Required'),
  password: yup
    .string()
    .required('Required')
    .min(6, 'password must be at least 6 characters'),
});

export const validationSchemaForgotPassword = yup.object().shape({
  email: yup.string().email().required('Required'),
});

export const validationSchemaPayInfo = yup.object().shape({
  name: yup
    .string(stringError)
    .required(required)
    .matches(/^[^0-9]+$/, 'No se pueden ingresar numeros'),
  number: yup
    .string()
    .required(required)
    .min(19, 'Su tarjeta debe tener 16 dígitos'),
  cvc: yup.string().required(required).min(3, 'Debe tener almenos 3 dígitos'),
  expiry: yup.string().required(required).min(5, 'Formato Invalido'),
});
