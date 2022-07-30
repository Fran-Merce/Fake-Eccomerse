import styled from "styled-components";

export const DropDownWrapper = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  
  /* justify-content: ; */
  border: 1px solid #eee;;
  height: 80%;
  text-align: start;
  gap: 1rem;
  background-color: red;
`

export const DropDownOptionsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100px;
  width: 100%;

  /* border: 1px solid blue; */
`

export const DropDownOptionStyled = styled.p`
  color: #000;
  background-color: ${props => (props.selected ? '#00bcd4' : '#eee')};

`
  
