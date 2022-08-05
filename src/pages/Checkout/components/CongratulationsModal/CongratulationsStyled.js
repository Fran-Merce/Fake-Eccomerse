import { motion } from 'framer-motion';
import styled from 'styled-components';

export const CongratulationsStyled = styled(motion.div)`
  position: absolute;
  height: 80vh;
  width: 80vw;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 100;

  background-color: red;
`;
