import {
  LogoStyled,
  ModalOverlayStyled,
  NavbarWrapperStyled,
} from './NavbarStyled';

import { useSelector } from 'react-redux';
import { CartModal } from './cart/CardModal/CartModal';
import { AnimatePresence } from 'framer-motion';
import { LinkStyled } from '../UI/LinkStyled/LinkStyled';
import { NavLinks } from './components/NavLinks';


export const Navbar = () => {
  const { hidden } = useSelector(state => state.cart);
  const { currentUser } = useSelector(state => state.auth);

  const displayNameFormatted = currentUser
    ? currentUser.displayName.split(' ', 1).toString()
    : '';

  return (
    <NavbarWrapperStyled>
      <LinkStyled to='/'>
        <LogoStyled src={'/assets/imgs/logo.svg'} />
      </LinkStyled>
      {currentUser && <h3>Bienvenido {displayNameFormatted} 😎 </h3>}
      <NavLinks />
      <AnimatePresence>{hidden === false && <CartModal />}</AnimatePresence>
      <AnimatePresence>
        {!hidden && (
          <ModalOverlayStyled
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%', opacity: 0 }}
            transition={{ duration: 0.3 }}
          />
        )}
      </AnimatePresence>
    </NavbarWrapperStyled>
  );
};
