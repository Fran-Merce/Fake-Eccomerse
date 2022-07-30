import styled from 'styled-components';
import { mediaQueries } from '../../../../styles/mediaQueries';
export const CategoriesWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  /* background-color: #111; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (${mediaQueries.tablet}) {
    flex-direction: row;
    min-height: 50vh;
    flex-wrap: wrap;
    align-items: flex-start;
  }

  @media (${mediaQueries.laptop}) {
    min-height: 70vh;
  }
`;

export const CategorieCard = styled.div`
text-transform: capitalize;
  width: 100%;
  height: 25rem;
  color: #fff;
  background-color: var(${props => props.color});
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  transition: box-shadow 0.3s ease-in-out;
  gap: 1rem;
  cursor: pointer;

  & img {
    width: 80%;
    object-fit: cover;
  }
  & h3 {
    font-size: 2rem;
    margin: 1rem;
    font-family: 'Cormorant SC', serif;
  }
  &:hover {
    box-shadow: 0px 30px 30px #000000;
    z-index: 99;
  }
  @media (${mediaQueries.mobile}) {
    width: 100%;
    height: 80%;
    & img {
      width: 70%;
    }
  }

  @media (${mediaQueries.tablet}) {
    width: 33.33%;

    /* height: 65%; */
    height: 25rem;
    & img {
      width: 80%;
      height: 60%;
      object-fit: cover;
    }
  }
  @media (${mediaQueries.laptop}) {
    height: 35rem;
  }
`;
