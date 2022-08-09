import styled from "styled-components";

export const InputSearchStyled = styled.input`
  width: 100%;
  /* border-radius: 15px; */
  height: 1.5rem;
  outline: none;
  border: none ;
  padding: .2rem .5rem ;
  font-family: 'Poppins', sans-serif;
  font-size: .9rem;
  background-color: rgba(255,255,255,0.9);
  margin-top: .5rem;
  background-color: transparent;
  border-bottom: 1px solid rgba(255,255,255,0.9);
  color: #fff;
  &:focus{
    border-bottom: 1px solid var(--secondary-text);
  }
`