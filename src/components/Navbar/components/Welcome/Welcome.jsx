import React from 'react';
import { useSelector } from 'react-redux';

export const Welcome = () => {
  const { currentUser } = useSelector(state => state.auth);
  const nameFormatted = currentUser
    ? currentUser.displayName.split(' ', 1).toString()
    : '';

  return (
    <>
      {currentUser && (
        <p>Bienvenido {nameFormatted.length < 20 && nameFormatted} 😎 </p>
      )}
    </>
  );
};
