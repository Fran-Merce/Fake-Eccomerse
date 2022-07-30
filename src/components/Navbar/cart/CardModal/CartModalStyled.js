import styled from 'styled-components';
import { mediaQueries } from '../../../../styles/mediaQueries';
import { motion } from 'framer-motion';
import { HiX } from 'react-icons/hi';
export const CartModalStyled = styled(motion.div)`
  position: absolute;
  top: 0;
  right: 0;
  gap: 0.5rem;
  width: 100%;

  display: flex;
  align-items: center;

  flex-direction: column;
  background-color: rgba(0, 0, 0, 0.9);
  z-index: 99;
  @media (${mediaQueries.mobile}) {
    width: 400px;
  }
`;
export const CartModalHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 15%;
  background-color: #fff;
  padding: 1.5rem 1rem;
  padding-bottom: 25px;

  font-size: 0.9rem;
  & > h2,
  & > p {
    font-weight: 500;
    color: #000;
  }
  font-family: 'Signika', sans-serif;
`;
export const BackBtnStyled = styled(HiX)`
  position: absolute;
  top: 1rem;
  right: 1rem;
  width: 1.7rem;
  height: 1.7rem;

  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  color: var(--black);
  border: none;
  transition: transform 0.2s ease-in-out;
  :hover {
    color: red !important;
    cursor: pointer;
    transform: scale(1.1);
  }
`;
export const CartModalBody = styled.div`
  position: relative;
  width: 100%;
  min-height: 350px;
  max-height: 500px;

  margin-top: 0.5rem;
  padding: 0.5rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
  padding-top: 1rem;
  font-family: 'Signika', sans-serif;
  color: #fff;
  @media (${mediaQueries.mobile}) {
    padding: 1rem;
  }
`;

export const CartModalFooter = styled.div`
  width: 100%;
  height: 20%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
  color: #fff;
  font-family: 'Signika', sans-serif;
  font-size: 1.3rem;
  font-weight: 400;
  & hr {
    width: 100%;
  }
`;
export const CartModalFooterText = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1rem;
`;
export const CartModalCheckoutBtn = styled.button`
  position: relative;
  min-width: 50%;
  padding: 0 0.5rem;
  height: 35px;
  border: 1px solid #fff;
  background-color: transparent;
  color: #fff;
  font-family: 'Signika', sans-serif;
  font-size: 1.1rem;
  font-weight: 300;
  overflow: hidden;
  cursor: pointer;
  :disabled {
    cursor: not-allowed;
    & > span {
      display: none;
    }
  }
  & > span {
    top: 0;
    position: absolute;
    width: 100%;
    left: -200%;
    background-color: #fff;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    transition: all 0.3s;
    & img {
      width: 32px;
      height: auto;
      margin-left: 10px;
    }
  }

  &:hover span {
    left: 0;
    color: #000;
  }
`;

export const ClearCartBtn = styled.button`
  position: absolute;
  top: -5px;
  right: 5px;
  width: 2rem;
  height: 2rem;
  border: none;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: red;
  cursor: pointer;
  transition: transform 0.2s ease-in-out;
  :disabled {
    cursor: not-allowed;
  }

  :disabled:hover {
    background-color: red;
  }
  :hover {
    background-color: #9e0000;
    transform: scale(1.1);
  }
  @media (${mediaQueries.mobile}) {
    width: 42px;
    height: 42px;
  }
`;
