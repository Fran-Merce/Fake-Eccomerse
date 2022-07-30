import styled from 'styled-components';
import { mediaQueries } from '../../../../styles/mediaQueries';

export const ProductListStyled = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  @media (${mediaQueries.tablet}) {
    align-items: center;
    justify-content: center;
    flex-direction: row;
    gap: 20px;
    flex-wrap: wrap;
  }
  @media (${mediaQueries.laptop}) {
    max-width: 1300px;
    margin: 0 auto;
  }
`;
export const ProductListWrapper = styled.div`
  width: 100%;
  min-height: 60vh;
  display: flex;
  align-items: center;

  justify-content: ${props => props.justifyContent || 'center'};
  flex-direction: column;
`;
