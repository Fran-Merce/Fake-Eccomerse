import styled from 'styled-components';
import { mediaQueries } from '../../styles/mediaQueries';

export const FooterStyled = styled.div`
  /* margin-top: 1rem; */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  padding: 1rem 0;
  & p {
    font-family: 'Commissioner', sans-serif;
  }

  @media (${mediaQueries.tablet}) {
    flex-direction: row;
    justify-content: flex-start;
    margin-left: 1rem;
  }
`;

export const SocialMediaWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
`;
