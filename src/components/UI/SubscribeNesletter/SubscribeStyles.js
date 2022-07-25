import styled from 'styled-components';
import { mediaQueries } from '../../../styles/mediaQueries';

export const SubscribeWrapper = styled.div`
  margin-top: 1rem;
  display: flex;
  /* width: 100%; */
  height: 120px;
  flex-direction: column;
  /* background-color: red; */
  /* align-items: center; */
  justify-content: center;
  padding: 1rem;

  gap: 0.5rem;
  padding-bottom: 0;
  & h5 {
    font-family: 'Cormorant SC', serif;
    font-size: 1.2rem;
    font-weight: 500;
  }
  @media (${mediaQueries.tablet}) {
    padding: 0;
    margin: 0;
    width: 33%;
  }
`;

export const SubscribeInput = styled.input`
  width: 100%;
  height: 30px;
  border: 1px solid var(--soft-black);
  background-color: transparent;
  margin-bottom: 1rem;
  font-family: 'Cormorant SC', serif;
  padding: 0 0.5rem;
  font-size: 1.2rem;
  color: #fff;
  @media (${mediaQueries.tablet}) {
    width: 400px;
  }
`;
export const SubscribeButton = styled.button`
  min-width: 120px;
  height: 30px;
  border: 1px solid #fff;
  background-color: transparent;
  font-size: 1rem;
  font-family: 'Cormorant SC', serif;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  color: #fff;
  &:hover {
    background-color: #fff;
    color: #000;
  }
`;
