import styled from 'styled-components';
import { mediaQueries } from '../../styles/mediaQueries';

export const CheckoutPageWrapper = styled.div`
  margin-top: 1rem;
  width: 100%;
  /* background-color: red; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: #fff;
  gap: 1rem;
  align-items: center;
  font-family: 'Poppins', sans-serif;
  @media screen and (${mediaQueries.tablet}) {
    flex-direction: row;
    align-items: center;
    min-height: 50vh;
    justify-content: space-around;
  }
  @media screen and (${mediaQueries.laptop}) {
      width: 80%;
      font-size: 1.1rem;
  }
`;

export const CheckoutPageStyled = styled.div`
  width: 100%;
  min-height: calc(100vh - 90px);
  display: flex;
  align-items: center;
  justify-content: center;
`;
