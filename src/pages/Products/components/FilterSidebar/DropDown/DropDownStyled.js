import styled from 'styled-components';
import { motion } from 'framer-motion';
export const DropDownWrapper = styled(motion.div)`
  position: relative;
  width: 100%;
  max-width: 360px;
  background-color: blue;
  /* border: 1px solid #eee; */
  text-align: start;
  gap: 1rem;
  align-self: flex-start;
`;

export const DropDownOptionsWrapper = styled(motion.div)`

  color: #fff;
  /* gap: 10px; */

  /* background-color:blue */
  /* border: 1px solid blue; */
`;

export const DropDownOptionStyled = styled.p`
  color: ${props => (props.selected ? '#000' : '#f7c942')};
  background-color: ${props => (props.selected ? 'var(--secondary-text)' : 'transparent')};
  font-size: 0.9rem;
  padding: 0.1rem 0.4rem;
  width: fit-content;
  margin: 5px 0;
  border-radius: 15px;
  cursor: pointer;
  text-transform: capitalize;
`;
