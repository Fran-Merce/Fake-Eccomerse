import {
  CartIconWrapper,
  LinkStyled,
  LinksWrapperStyled,
  LogoStyled,
  ModalOverlayStyled,
  NavbarWrapperStyled,
} from './NavbarStyled';
import { HiShoppingCart } from 'react-icons/hi';
import { TYPES } from '../../redux/TYPES';

import { useSelector } from 'react-redux';
import { CartModal } from './cart/CardModal/CartModal';
import { useDispatch } from 'react-redux';
import { AnimatePresence } from 'framer-motion';
import { auth } from '../../firebase/firebase-utils';

export const Navbar = () => {
  const { hidden, cart } = useSelector(state => state.cart);
  const { currentUser } = useSelector(state => state.auth);
  const dispatch = useDispatch();
  const logOut = () => auth.signOut()
  const cartItems = cart.reduce((acc, curr) => acc + curr.quantity, 0);
  return (
    <NavbarWrapperStyled>
      <LinkStyled to='/'>
        <LogoStyled src={'./assets/imgs/logo.svg'} />
      </LinkStyled>
      <LinksWrapperStyled>
        <LinkStyled to='/'>Home</LinkStyled>
        <LinkStyled to='/products'>Products</LinkStyled>
        {currentUser ? (
          <p onClick={logOut}>Logout</p>
        ) : (
          <LinkStyled to='/auth/login'>Login</LinkStyled>
        )}
        <CartIconWrapper onClick={() => dispatch({ type: TYPES.HADLE_TOGGLE_CART })}>
          <p>{cartItems}</p>
          <HiShoppingCart size='1.3rem' color='white' />
        </CartIconWrapper>
      </LinksWrapperStyled>
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
