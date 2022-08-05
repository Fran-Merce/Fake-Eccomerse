import React from 'react';
import { CongratulationsStyled } from './CongratulationsStyled';
import { motion } from 'framer-motion';
import { useSelector } from 'react-redux';
import { swalModalCongrats } from '../../utils/swal';
import Swal from 'sweetalert2';
const pathVariants = {
  hidden: {
    pathLength: 0,
  },
  show: {
    pathLength: 1,
    transition: {
      duration: 7,
      ease: 'easeInOut',
    },
  },
};

export const Congratulations = () => {
  const { currentUser} = useSelector(state => state.auth);
const handleClick = () => {
  Swal.fire({
    title: '¡Gracias por tu compra!',
    text: 'Te esperamos nuevamente',
    icon: 'success',
    confirmButtonText: 'Cerrar',
    confirmButtonColor: '#ffc107',
    allowOutsideClick: false,
    allowEscapeKey: false,
    allowEnterKey: false,
    showConfirmButton: true,
    showCloseButton: true,
    closeOnClickOutside: false,
    closeOnEsc: false,
    timer: 5000,
    fontFamily: 'Poppins',
  });
}
// onClick={() => Swal.fire(swalModalCongrats(currentUser?.displayName,currentUser?.email))}
  return (
    <CongratulationsStyled
      initial={{ opacity: 0, y: '-100%', x: '-50%' }}
      animate={{ opacity: 1, y: '-45%', x: '-50%' }}
      // exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: 'easeInOut' }}
    >
      <h1>Felicitaciones {currentUser?.displayName}</h1>
      <h3>Compra Exitosa</h3>
      <p>Te hemos enviado toda la informacion del pedido a {currentUser?.email}</p>
      <button onClick={handleClick} >
        Seguir Comprando
      </button>
    </CongratulationsStyled>
  );
};
