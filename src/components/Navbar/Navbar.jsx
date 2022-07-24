import { Link, Navigate, useNavigate } from 'react-router-dom';
import {
  LinksWrapperStyled,
  LogoStyled,
  ModalOverlayStyled,
  NavbarWrapperStyled,
} from './NavbarStyled';
import { HiShoppingCart } from 'react-icons/hi';
import { TYPES } from '../../redux/TYPES';
import { logoutFirebase } from '../../firebase/providers';
import { useSelector } from 'react-redux';
import { CartModal } from './cart/CardModal/CartModal';
import { useDispatch } from 'react-redux';
import { AnimatePresence } from 'framer-motion';
export const Navbar = () => {
  const { status } = useSelector(state => state.auth);
  const { hidden } = useSelector(state => state.cart);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleLogout = () => {
    logoutFirebase();
    navigate('/auth/login');
  };

  return (
    <NavbarWrapperStyled>
      <Link to='/home'>
        <LogoStyled src={'/src/assets/imgs/logo.svg'} />
      </Link>
      <LinksWrapperStyled>
        <Link to='/home'>Home</Link>
        <Link to='/products'>Products</Link>
        {status === 'authenticated' ? (
          <Link to='/auth/logout' onClick={handleLogout}>
            Logout
          </Link>
        ) : (
          <Link to='/auth/login'>Login</Link>
        )}

        <HiShoppingCart
          size='1.3rem'
          color='white'
          onClick={() => dispatch({ type: TYPES.HADLE_TOGGLE_CART })}
        />
      </LinksWrapperStyled>
      <AnimatePresence>{!hidden && <CartModal />}</AnimatePresence>
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
