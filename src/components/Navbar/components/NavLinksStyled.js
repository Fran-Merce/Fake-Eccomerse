import styled from 'styled-components';
import {motion } from 'framer-motion';
export const LinksWrapperStyled = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: 1rem;
  text-align: center;
  font-family: 'poppins', sans-serif;
  @media screen and (max-width: 768px) {
    position: absolute;
    top: 90px;
    right: 0;

    width: 100%;
    min-height: 250px;
    color: #fff;

    z-index: 2;
    flex-direction: column;
    justify-content: space-around;
    background-color: rgba(0, 0, 0, 0.7);
    backdrop-filter: blur(5px);
  }
`;

// export const LinksWrapperStyled = styled.div`
//   position: absolute;
//   top: 90px;
//   background-color: red;
//   right: 0;
//   width: 100%;
//   min-height: 250px;
//   color: #fff;
//   border: 1px solid red;
//   z-index: 2;
//   display: flex;
//   align-items: center;
//   text-align: center;
//   flex-direction: column;
//   justify-content: space-around;
// `;
export const CartIconWrapper = styled.button`
  position: relative;
  width: 2.4rem;
  height: 2.4rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  background: none;
  border: none;
  margin: 0 5px;
  transition: all 0.3s ease-in-out;
  & > p {
    position: absolute;
    top: -5px;
    right: -5px;
    font-size: 0.9rem;
    color: var(--secondary-text);
  }
  &:hover {
    background-color: rgba(255, 255, 255, 0.5);
  }
`;
