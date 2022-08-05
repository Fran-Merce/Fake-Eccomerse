import styled from 'styled-components';
import { mediaQueries } from '../../../../styles/mediaQueries';

export const FormPaymentStyled = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
  width: 100%;
  max-width: 450px;
  margin-top: 1rem;
  padding: 1rem;
  font-family: 'poppins', sans-serif;
  label{
    color: var(--secondary-text);
    font-size: .9rem;
  }
  @media screen and (${mediaQueries.laptop}) {
    max-width: 520px;
  }
`;

export const InputPayStyled = styled.input`
  display: block;
  width: 100%;
  border: none;
  border-bottom: 1px solid ${({ error }) => (error ? '#FF0000' : '#ccc')};
  background-color: transparent;
  margin: 0.5rem 0;
  padding: 0 0.25rem;
  color: #fff;
  font-family: 'poppins', sans-serif;
  text-transform: capitalize;
  transition: border 0.2s ease-in-out;
  &:focus {
    outline: none;
    border-color: var(--secondary-text);
  }
  @media screen and (${mediaQueries.tablet}) {
    font-size: 1rem;
  }
`;

export const ExpiryAndCvcWrapper = styled.div`
  width: 100%;
  display: flex;
  gap: 1rem;
  justify-content: space-between;
`;

export const CreditCardInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
  align-items: center;
  justify-content: center;
  @media screen and (${mediaQueries.tablet}) {
    max-width:550px;
   
  }
`