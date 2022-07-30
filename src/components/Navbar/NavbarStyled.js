import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
export const NavbarWrapperStyled = styled.nav`
  position: relative;
  width: 100%;
  height: 90px;
  background-color: #000;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1rem;
  color: #fff;
`;

export const LinksWrapperStyled = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  font-family: 'poppins', sans-serif;
`;
export const LinkStyled = styled(Link)`
  font-size: 1.1rem;
  font-weight: 300;

  &:hover {
    color: #dedede;
  }
`;
export const LogoStyled = styled.img`
  width: 70px;
  height: 70px;
`;
export const ModalOverlayStyled = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 50;
  width: 100%;
  z-index: 98;
  height: 100vh;
  backdrop-filter: blur(5px);
`;

export const CartIconWrapper = styled.button`
  position: relative;
  width: 2.6rem;
  height: 2.6rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  background:none;
  & > p {
    position: absolute;
    top: -3px;
    right: -3px;
    font-size: 0.9rem;
    color: var(--secondary-text);
  }
`;
