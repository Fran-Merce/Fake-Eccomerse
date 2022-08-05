import styled from 'styled-components';
import { mediaQueries } from '../../../../styles/mediaQueries';

export const CheckoutProductsWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  max-width: 450px;
  @media screen and (${mediaQueries.tablet}) {
    /* align-self: flex-end; */
  }
`;

export const ProductsWrapper = styled.div`
  width: 100%;
  min-height: 150px;
  height: auto;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;  
  @media screen and (${mediaQueries.tablet}) {
    height: 300px;
  }
  gap: 5px;
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
    background: var(--secondary-text);
    border-radius: 25px;
  }
`;
