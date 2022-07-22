import { Link, Navigate, useNavigate } from 'react-router-dom';
import { LinksWrapperStyled, LogoStyled, NavbarWrapperStyled } from './NavbarStyled';
import { HiShoppingCart } from 'react-icons/hi';

import { logoutFirebase } from '../../firebase/providers';
import { useSelector } from 'react-redux';

export const Navbar = () => {
  const { status } = useSelector(state => state.auth);
  const navigate = useNavigate();
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

        <HiShoppingCart size='1.3rem' color='white' />
      </LinksWrapperStyled>
    </NavbarWrapperStyled>
  );
};
