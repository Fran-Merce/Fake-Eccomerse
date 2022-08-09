import React from 'react';
import { auth } from '../../../firebase/firebase-utils';
import { useSelector } from 'react-redux';
import { LinkStyled } from '../../UI/LinkStyled/LinkStyled';
import { LinksWrapperStyled } from './NavLinksStyled';


export const NavLinks = () => {
  const { currentUser } = useSelector(state => state.auth);
  const logOut = () => auth.signOut();
  return (
  
      <LinksWrapperStyled
        initial={{ x: '-100%' }}
        animate={{ x: 0 }}
        exit={{ x: '-100%'}}
        transition={{ duration: 0.3 }}
      >
        <LinkStyled to='/'>Home</LinkStyled>
        <LinkStyled to='/products'>Products</LinkStyled>
        {currentUser ? (
          <p style={{ cursor: 'pointer' }} onClick={logOut}>
            Cerrar Sesion
          </p>
        ) : (
          <LinkStyled to='/auth/login'>Iniciar Sesion</LinkStyled>
        )}
      </LinksWrapperStyled>
  
  );
};
