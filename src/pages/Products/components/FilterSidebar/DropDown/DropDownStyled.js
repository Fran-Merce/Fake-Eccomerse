import styled from "styled-components";
import {motion} from "framer-motion";
export const DropDownWrapper = styled(motion.div)`

  position: relative;
  width: 100%;
  max-width: 360px;
  background-color:blue;
  /* border: 1px solid #eee; */
  text-align: start;
  gap: 1rem;
align-self: flex-start;
`

export const DropDownOptionsWrapper = styled(motion.div)`


  
  background-color:blue
  /* border: 1px solid blue; */
`

export const DropDownOptionStyled = styled.p`
  color: #000;
  font-size: 1.2rem;

`
  
