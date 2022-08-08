import { motion } from 'framer-motion';
import styled from 'styled-components';
import { mediaQueries } from '../../styles/mediaQueries';

export const ProductPageStyled = styled(motion.div)`
  width: 100%;
  padding-top: 1rem;
  min-height: calc(100vh - 90px);
  @media (${mediaQueries.tablet}) {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    flex-wrap: wrap;
  }
`;
