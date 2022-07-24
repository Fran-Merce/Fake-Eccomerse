import { motion } from 'framer-motion';
import styled from 'styled-components';
import { mediaQueries } from '../../styles/mediaQueries';

export const ProductCardWrapper = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 300px;
  height: 450px;
  background-color: var(--soft-black);
  border-radius: 3px;
  @media (${mediaQueries.mobile}) {
    width: 320px;
  }
`;

export const ProductCardImgWrapper = styled.div`
  height: 45%;
  width: 100%;
  margin-top: 1rem;
  & img {
    width: 100%;
    object-fit: cover;
    height: 100%;
  }
`;

export const ProductButtonsWrapper = styled.div`
  margin-top: 5px;
  display: flex;
  align-items: center;
  align-self: flex-start;
  gap: 1rem;
  width: 100%;
`;

export const ProductContentWrapper = styled.div`
  display: flex;
  flex-direction: column;

  justify-content: center;
  height: 60%;
  padding: 1.4rem;
  gap: 10px;

  & h3 {
    font-family: poppins;
    text-align: start;
    /* font-weight: bold; */
    font-family: 'Signika', sans-serif;
    font-size: 1.2rem;
    font-weight: 500;
    color: var(--secondary-text);
  }

  & > p {
    font-family: 'Commissioner', sans-serif;
    color: #969696;
    font-weight: 300;
    font-size: 0.8rem;
  }
`;
export const Price = styled.span`
  font-family: 'Commissioner', sans-serif;
  font-size: 1rem;
  color: #fff;
`;

export const ProductBtn = styled.button`
  font-family: 'poppins';
  border: 1px solid #fff;
  min-width: 120px;
  padding: 0.5rem 0;
  background-color: transparent;
  font-size: 0.8rem;
  letter-spacing: 1px;
  color: var(--primary-text);
  &:hover {
    background-color: #fff;
    color: #000;
    cursor: pointer;
  }
`;

export const ProductQuantity = styled.button`
  font-family: 'Signika', sans-serif;
  border: 1px solid var(--grey);
  min-width: 90px;
  padding: 0.4rem 0;
  background-color: transparent;
  font-size: 0.9rem;
  letter-spacing: 1px;
  color: var(--primary-text);
  &:hover {
    background-color: #fff;
    color: #000;
    cursor: pointer;
  }
`;
