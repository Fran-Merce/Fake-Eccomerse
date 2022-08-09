import Swal from "sweetalert2";
import { createUser } from "../../../firebase/firebase-utils";
import { swalModalAuth } from "../../../helpers/swal/swal";

export const handleSubmitFormRegister = async (values, actions) => {
  try {
    await createUser({ ...values });
  } catch (error) {
    if (error.code === 'auth/email-already-in-use')
      Swal.fire(swalModalAuth('Error', 'Email ya esta en uso', 'error'));
    else if (error.code === 'auth/invalid-email') 
      Swal.fire(swalModalAuth('Error', 'El Email Ingresado no es valido', 'error'));
    else if (error.code === 'auth/weak-password')
      Swal.fire(swalModalAuth('Error', 'La Contraseña es deamsiado debil', 'error'));
    else
      Swal.fire(swalModalAuth('Error', 'Upps ocurrio un error en el registro', 'error'));
      console.log(error)
  }
  actions.resetForm();
};