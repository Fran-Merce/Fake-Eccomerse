import styled from 'styled-components';
import { motion } from 'framer-motion';
import { BiX } from 'react-icons/bi';
export const SideBarStyled = styled(motion.div)`
  position: absolute;
  top: 120px;
  left: 0;
  width: 320px;
  margin: 0 auto;
  height: 400px;
  background-color: rgba(0, 0, 0, 0.7);
  color: #fff;
  padding: 2rem;
  font-family: 'Poppins', sans-serif;
  font-size: 1.1rem;
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 2rem;
  backdrop-filter: blur(10px);
`;

export const CloseBtnStyled = styled(BiX)`
  cursor: pointer;
  color: #ff0000;
  font-size: 2rem!important;
  position: absolute;
  top: 1rem;
  right: 1rem;
  transition: all 0.2s ease;
  
  &:hover{
    color: #9F0000;
    transform: scale(1.2);
  }
`;
