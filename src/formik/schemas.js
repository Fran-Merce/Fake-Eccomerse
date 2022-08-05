import * as yup from 'yup';
import { errorMessages } from './errorMessages';

const { required, numberError, stringError } = errorMessages;

export const validationSchemaRegister = yup.object().shape({
  email: yup.string().email().required(required),
  password: yup.string().required().min(6, 'password must be at least 6 characters'),
  displayName: yup
    .string()
    .required(required)
    .min(1, 'El nombre debe tener al menos 1 caracter')
    .max(20, 'El nombre debe tener como maximo 20 caracteres'),
});

export const validationSchemaLogin = yup.object().shape({
  email: yup.string().email().required(required),
  password: yup
    .string()
    .required(required)
    .min(6, 'la contraseña debe tener al menos 6 caracteres'),
});

export const validationSchemaForgotPassword = yup.object().shape({
  email: yup.string().email().required(required),
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
  city: yup
    .string()
    .required(required)
    .matches(/^[^0-9]+$/, 'No se pueden ingresar numeros'),
  province: yup
    .string()
    .required(required)
    .matches(/^[^0-9]+$/, 'No se pueden ingresar numeros'),
  address: yup
    .string()
    .required(required)
})