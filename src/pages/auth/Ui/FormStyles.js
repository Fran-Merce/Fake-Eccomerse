import { mediaQueries } from '../../../styles/mediaQueries';

import styled from 'styled-components';

export const FormContentWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  gap: 1.5rem;
  color: #fff;
  & div {
    width: 80%;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    padding-left: 0.2rem;
  }
  & label {
    margin-left: 0.2rem;
  }
  @media (${mediaQueries.mobile}) {
    width: 450px;
  }
`;

export const FormStyled = styled.form`
  color: #fff;
  width: 450px;
  min-height: 80%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  backdrop-filter: blur(5px);
  gap: 3rem;
  padding: 5px;
  background-color: rgba(0, 0, 0, 0.7);
  font-family: 'Signika', sans-serif;

  h1 {
    font-size: 2.5rem;
    font-family: monospace;
    letter-spacing: 3px;
    text-align: center;
  }
  @media (${mediaQueries.mobile}) {
    padding: 2rem;
  }
  @media (${mediaQueries.desktop}) {
    max-height: 600px;
    min-height: 600px;
  }
  a {
    color: #fff;
  }
`;

export const FormErrorStyled = styled.small`
  color: red;
  margin-left: 0.2rem;
  font-size: 0.9rem;
`;
export const FormButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  font-family: 'Signika', sans-serif;
`;
export const SubmitButton = styled.button`
  min-width: 90px;
  font-size: 1rem;
  height: 35px;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  gap: 5px;
  padding: 0.3rem;
  cursor: pointer;
  border: 1px solid black;
  transition: all 0.3s ease-in-out;
  border-radius: 5px;
  justify-content: center;
  font-family: 'Signika', sans-serif;
  color: #fff;
  &:hover {
    background-color: var(--black);
  }
`;

export const InputStyled = styled.input`
  width: 100%;
  padding: 0.4rem 0.5rem;
  border-radius: 5px;
  border: 1px solid ${props => (props.errors ? 'red' : '#fff')};
  background-color: transparent;
  color: #fff;
  font-size: 0.8rem;
  font-family: 'Poppins', sans-serif;
  &:focus {
    outline: none;
    border: 1px solid ${props => (props.errors ? 'red' : '#000')};
  }
`;
