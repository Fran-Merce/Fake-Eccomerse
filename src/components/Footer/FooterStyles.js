import styled from 'styled-components';
import { mediaQueries } from '../../styles/mediaQueries';

export const FooterStyled = styled.div`
  width: 100%;
  border-top: 1px solid #e6e6e6;
  /* margin-top: 1rem; */
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  padding: 1rem;
  color: #e6e6e6;
  & p {
    font-family: 'Commissioner', sans-serif;
  }

  @media (${mediaQueries.tablet}) {
    flex-direction: row;
    justify-content: center;
    margin: 0;
  }
`;

export const SocialMediaWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  gap: 0.5rem;
`;

export const FooterContent = styled.div`
  @media (${mediaQueries.tablet}) {
    display: flex;
    align-items: center;

    height: 100%;
    /* width: 50%; */
    gap: 1rem;
  }
`;
