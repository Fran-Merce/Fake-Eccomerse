import React from 'react';
import { ToastContainer, Slide } from 'react-toastify';

export const CustomToastContainer = () => (
  <ToastContainer
    position='bottom-right'
    autoClose={1000}
    hideProgressBar={false}
    newestOnTop={false}
    closeOnClick
    rtl={false}
    pauseOnFocusLoss
    draggable
    pauseOnHover
    theme='dark'
    transition={Slide}
    limit={3}
  />
);
