import styled from 'styled-components';
import { mediaQueries } from '../../../../styles/mediaQueries';
import { motion } from 'framer-motion';
export const ProductHomeStyled = styled(motion.div)`
  /* background-color: var(--soft-black); */
  margin-top: 1.2rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 0vh;

  padding: 1rem 0;
`;

export const Title = styled.h2`
  text-align: center;
  font-family: 'Signika', sans-serif;
  font-size: 2.5rem;
  margin: 2rem;
  letter-spacing: 3px;
  color: #fff;
`;

export const ProductCardsWrapper = styled.div`
  margin-top: 1.2rem;
  width: 100%;
  gap: 2rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (${mediaQueries.tablet}) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
  }
  @media (${mediaQueries.laptop}) {
    justify-content: center;
    gap: 2rem;
    width: 80%;
  }
  @media (${mediaQueries.desktop}) {
    width: 70%;
  }
`;

export const Button = styled.button`
  margin-top: 3rem;
  border: 1px solid #fff;
  min-width: 130px;
  padding: 0.5rem 0;
  background-color: transparent;
  font-size: 1.2rem;
  cursor: pointer;
  font-family: 'Signika', sans-serif;
  font-weight: 500;
  letter-spacing: 1px;
  color: #fff;
  transition: all 0.3s ease-in-out;
  &:hover {
    background-color: #fff;
    color: #000;
  }
`;
