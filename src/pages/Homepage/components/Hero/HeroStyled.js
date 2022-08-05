import styled from 'styled-components';
import { mediaQueries } from '../../../../styles/mediaQueries';
import { AiOutlineArrowDown } from 'react-icons/ai';

export const HeroWrapperStyled = styled.div`
  position: relative;
  width: 100%;
  min-height: calc(95vh - 90px);
  background-image: url(./assets/imgs/hero.jpg);
  padding: 0 2%;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-position: center;

  @media (${mediaQueries.mobile}) {
    padding: 0 5%;
  }
`;

export const HeroContentStyled = styled.div`
  max-width: 95%;
  font-size: 1.1rem;
  padding: 0 2%;

  & h1 {
    color: var(--secondary-text);
    font-family: 'Signika', sans-serif;
    font-weight: 500;
    text-transform: uppercase;
  }
  & p {
    color: var(--primary-text);
    font-family: 'Signika', sans-serif;
    font-weight: 500;
  }

  @media (${mediaQueries.tablet}) {
    max-width: 80%;
    font-size: 1.2rem;
  }
  @media (${mediaQueries.laptop}) {
    max-width: 45%;
    font-size: 1.2rem;
    padding-left: 2.5%;
    h1 {
      font-size: 2.5rem;
    }
  }
`;

export const HeroButtonStyled = styled.button`
  margin-top: 1rem;
  background-color: transparent;
  padding: 0.2rem 1.5rem;
  font-size: 1.1rem;
  border: 1px solid #fff;
  border-radius: 25px;
  transition: all 0.3s ease-in-out;
  cursor: pointer;
  color: #fff;
  background-color: var(--black);
  :hover {
    background-color: #fff;
    color: #000;
  }
`;
export const ArrowButtonStyled = styled(AiOutlineArrowDown)`
  position: absolute;
  width: 48px;
  height: 48px;
  right: 0;
  left: 0;
  bottom: 1.2rem;
  margin: auto;
  color: #fff;
`;
