import styled from 'styled-components';
import { mediaQueries } from '../../../styles/mediaQueries';

export const PriceInfoWrapper = styled.div`
  width: 100%;
  height: 20%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
  color: #fff;
  font-family: 'Signika', sans-serif;
  font-size: 1.3rem;
  font-weight: 400;
  & hr {
    width: 100%;
  }
  max-width: 450px;
 
`;
export const PriceInfoText = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1rem;
`;
