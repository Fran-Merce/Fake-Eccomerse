import Swal from 'sweetalert2';
import {
  createUserProfileDocument,
  singInUser,
} from '../../../firebase/firebase-utils';
import { swalModalAuth } from '../../../helpers/swal/swal';

export const handleSubmitFormLogin = async values => {
  try {
    const { user } = await singInUser({ ...values });
    createUserProfileDocument(user);
  } catch (error) {
    if (error.code === 'auth/user-not-found') {
      Swal.fire(swalModalAuth('Error', 'Usuario no encontrado', 'error'));
    } else if (error.code === 'auth/wrong-password') {
      Swal.fire(swalModalAuth('Error', 'Email o Contraseña incorrecta', 'error'));
    } else {
      Swal.fire(swalModalAuth('Error', 'upps ocurrio un error en el inicio de sesion', 'error'));
    }
  }
};
