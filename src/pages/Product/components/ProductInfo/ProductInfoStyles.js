import styled from 'styled-components';
import { mediaQueries } from '../../../../styles/mediaQueries';

export const ProductInfoWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  color: #fff;
  font-family: 'Signika', sans-serif;
  justify-content: center;
  padding: 0 1rem;
  gap: 1rem;
  @media (${mediaQueries.tablet}) {
    width: 40%;
  }
`;

export const ProductInfoContent = styled.div`
  color: ${({ color }) => (color ? color : '#fff')};

  display: flex;
  flex-direction: column;
  margin: 0.7rem 0;
  text-transform: capitalize;
  gap: 5px;
  h3 {
    font-size: 1.5rem;
    font-weight: 500;
  }
`;

export const ProductInfoHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 100%;
  margin-top: 1rem;
  h1,
  h3 {
    font-size: 2rem;
    font-weight: 300;
  }
`;
export const ProductInfoBody = styled.div`
  display: flex;

  justify-content: space-between;
  flex-direction: column;
`;
export const ProductInfoText = styled.p`
  font-weight: 300;
  display: flex;
  align-items: center;
  gap: 7px;
`;

export const BtnWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  gap: 1rem;
`;
