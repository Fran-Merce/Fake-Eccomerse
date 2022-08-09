import styled from 'styled-components';
import { motion } from 'framer-motion';


export const NavbarWrapperStyled = styled.nav`
  position: relative;
  width: 100%;
  height: 90px;
  gap: 10px;
  background-color: #000;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 .5rem;
  text-align: center;
  color: #fff;
  font-family: 'poppins', sans-serif;
  text-transform: capitalize;
`;



export const LogoStyled = styled.img`
  width: 70px;
  height: 64px;
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


