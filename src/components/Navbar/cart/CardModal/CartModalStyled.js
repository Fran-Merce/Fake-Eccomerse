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
  overflow-y: scroll;
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
    margin-top: 2rem;
  }
  ::-webkit-scrollbar {
    border-radius: 30px;
    width: 10px;
   
}

/* Track */
::-webkit-scrollbar-track {
  background: transparent;
 
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #888;
  border-radius: 25px;
}
`;


export const ClearCartBtn = styled.button`
  position: absolute;
  top: 7px;
  right: 2px;
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
  z-index: 10;
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
