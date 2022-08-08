import styled from 'styled-components';
import { mediaQueries } from '../../../../styles/mediaQueries';

export const ProductListStyled = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1300px;
  gap: 10px;
  @media (${mediaQueries.tablet}) {
    align-items: center;
    min-width: 600px;
    justify-content: center;
    flex-direction: row;
    gap: 20px;
    flex-wrap: wrap;
  }
  @media (${mediaQueries.laptop}) {
    width: 90%;

    margin: 0 auto;
  }
 
`;
export const ProductListWrapper = styled.div`
  width: 100%;
  height: 100%;
  min-height:80vh;
  display: flex;
  align-items: center;
  justify-content: ${props => props.justifyContent || 'center'};
  flex-direction: column;
`;
