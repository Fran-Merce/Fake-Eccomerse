import './swal.css';

const swalCustomConfig = {
  dangerMode: true,
  fontFamily: 'Signika',

  confirmButtonClass: 'btn btn-primary',
  customClass: {
    title: 'swalTitle',
    content: 'swalText',
    confirmButtonClass: 'swalButton',
    container: 'swalContainer',
  },
};

export const swalModalCongrats = (displayName, email) => {
  return {
    ...swalCustomConfig,
    title: `Felicidades ${displayName}!`,
    text: `La compra se ha realizado con éxito, te hemos enviado un correo a ${email} con los detalles de la compra.`,
    icon: 'success',
    confirmButtonText: 'Seguir Comprando',
  };
};

export const swalModalAuth = (title,text,icon) => {
  return {
    ...swalCustomConfig,
    title: title,
    text: text,
    icon: icon,
  };
}