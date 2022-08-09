import styled from 'styled-components';
import { mediaQueries } from '../../../../styles/mediaQueries';

export const CartModalItemStyled = styled.div`
  width: 90%;
  max-width: 450px;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem;
  margin-top: 0.5rem;
  background-color: #fff;
  color: #000;
  font-family: 'Signika', sans-serif;
  overflow: hidden;
  @media (${mediaQueries.mobile}) {
    justify-content: space-around;
    padding: 1rem;
    gap: 1rem;
  }
`;
export const CartModalItemImg = styled.img`
  height: 90%;
  width: 90px;
  @media (${mediaQueries.mobile}) {
    width: 90px;
  }
`;

export const QuantityWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  font-size: 1.2rem;
`;
