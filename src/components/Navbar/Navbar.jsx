import { LogoStyled, ModalOverlayStyled, NavbarWrapperStyled } from './NavbarStyled';
import { useSelector } from 'react-redux';
import { CartModal } from './cart/CardModal/CartModal';
import { AnimatePresence } from 'framer-motion';
import { LinkStyled } from '../UI/LinkStyled/LinkStyled';
import { NavLinks } from './components/NavLinks';
import { FlexComponent } from '../UI/FlexComponent/FlexComponent';
import { useResize } from '../../hooks/useResize';
import { NavMobileBtn } from './components/NavMobileBtn/NavMobileBtn';
import { useState } from 'react';
import { Welcome } from './components/Welcome/Welcome';
import { CartIcon } from './components/CartIcon/CartIcon';

export const Navbar = () => {
  const { hidden } = useSelector(state => state.cart);
  const [openMobile, setOpenMobile] = useState(false);
  const isPhone = useResize();

  return (
    <NavbarWrapperStyled>
      <LinkStyled to='/'>
        <LogoStyled src={'/assets/imgs/logo.svg'} />
      </LinkStyled>
      <Welcome />
      <FlexComponent>
        <AnimatePresence>{isPhone && openMobile && <NavLinks />}</AnimatePresence>
        {!isPhone && <NavLinks />}
        <CartIcon />
        {isPhone && <NavMobileBtn setOpen={setOpenMobile} open={openMobile} />}
      </FlexComponent>
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
